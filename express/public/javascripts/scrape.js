const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const launch = require("puppeteer").launch;

//const Nightmare = require('nightmare');
//const assert = require('assert');
//const express = require('express');

var reviewsArray = []

const conversionObj = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12'
}

//multiple page recursion
const yelpRecursion = (link, i, cb, link2) => {
  // let url = link + i
  console.log('Yelp scraping started', i+20)
  // console.log(link + '?start=' + i)
  let url = link + '?start=' + i
  request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('div[itemprop="review"]').each(function (index, el) {
        // var ratingv = $(this).find('meta[itemprop="ratingValue"]').attr('content')
        // var authorv = $(this).find('meta[itemprop="author"]').attr('content')
        // var descriptionv = $(this).find('p[itemprop="description"]').text()
        // var datePublishedv = $(this).find('meta[itemprop="datePublished"]').attr('content')
        var review = {
          id: reviewsArray.length,
          rating: $(this).find('meta[itemprop="ratingValue"]').attr('content'),
          author: $(this).find('meta[itemprop="author"]').attr('content'),
          origin: 'Yelp',
          description: $(this).find('p[itemprop="description"]').text(),
          datePublished: $(this).find('meta[itemprop="datePublished"]').attr('content'),
        }
        reviewsArray.push(review)
      })
      if (i < 0) {
        i += 20
        yelpRecursion(link, i, cb, link2)
      } else {
        console.log('Yelp scraping completed', reviewsArray.length)
        if (!link2) {
          cb(reviewsArray)
        }
        tripAdvisorRecursion(link2, 0, cb)
        // reviewsArray = [] // resets reviewsArray between  requests
      }
    }
  })
}

async function tripAdvisorRecursion(link, i, cb) {
  console.log("tripadvisor started", i+10);
  console.log('link passed url1', link)
  url = link.replace(/Reviews/g, `Reviews-or${i}`);
  const browser = await launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });
  await page.waitForSelector("h1");

  await page.click("p span.ulBlueLinks");
  await page.waitFor(1500);

  const reviews = await page.evaluate(() => {
    let array = [];
    let divArray = document.querySelectorAll("div.reviewSelector");
    for (var element of divArray) {
      const conversionObj = {
        January: '01',
        February: '02',
        March: '03',
        April: '04',
        May: '05',
        June: '06',
        July: '07',
        August: '08',
        September: '09',
        October: '10',
        November: '11',
        December: '12'
      }
      let rating = element
        .querySelector(".rating")
        .childNodes[0].className.replace(/ui_bubble_rating bubble_/g, "")
        .replace(0, ".0");
      let author = element.querySelector("span.scrname").textContent;
      let description = element.querySelector("p.partial_entry").textContent;
      let datePublished = element.querySelector(".ratingDate").title;
      datePublished = datePublished.replace(/,/g, '').split(' ')
      let parsedDate = datePublished[2]+'-'+conversionObj[datePublished[0]]+'-'+datePublished[1]
      array.push({
        rating: rating,
        author: author,
        origin: "TripAdvisor",
        description: description,
        datePublished: parsedDate
      });
    }
    return array;
  });


  reviews.forEach(function(review) {
    // review.id = reviewsArray.length
    // reviewsArray.push(review);
    reviewsArray.push({id: reviewsArray.length, ...review}); // ***just changed
  });

  await page.close();
  await browser.close();

  if (i < 0) {
    i += 10;
    tripAdvisorRecursion(link, i, cb);
  } else {
    // console.log("reviews", reviews);
    // console.log("global reviews", reviewsArray);
    console.log('TripAdvisor scraping completed', reviewsArray.length)
    cb(reviewsArray)
  }
}

// tripAdvisorRecursion(
//   "https://www.tripadvisor.ca/Restaurant_Review-g155019-d704408-Reviews-Fresh_On_Spadina-Toronto_Ontario.html",
//   0, null
// );

module.exports = {
  yelpRecursion: yelpRecursion,
  tripAdvisorRecursion: tripAdvisorRecursion,
}

const yelp = function (url, cb) {
  request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var reviewsArray = []
      $('div[itemprop="review"]').each(function (i, el) {
        var ratingv = $(this).find('meta[itemprop="ratingValue"]').attr('content')
        var authorv = $(this).find('meta[itemprop="author"]').attr('content')
        var descriptionv = $(this).find('p[itemprop="description"]').text()
        var datePublishedv = $(this).find('meta[itemprop="datePublished"]').attr('content')
        var review = {
          id: i,
          rating: ratingv,
          author: authorv,
          origin: 'yelp',
          description: descriptionv,
          datePublished: datePublishedv
        }
        reviewsArray.push(review)
      })
      cb(reviewsArray);
      //  console.log(reviewsArray)
    }
  })
}

// tripAdvisor scrape ---> need to convert to function
function tripAdvisor() {
  request('https://www.tripadvisor.ca/Restaurant_Review-g155019-d704408-Reviews-or10-Fresh_On_Spadina-Toronto_Ontario.html', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var reviewsArray = []
      var todayDate = new Date().toJSON().slice(0, 10)
      console.log(todayDate)
      $('.review').each(function (i, el) {
        var reviewv = $(this).find('p.partial_entry').text()
        var ratingv = $(this).find('.ui_bubble_rating').attr('class').replace(/ui_bubble_rating bubble_/g, '')
        // var datev = $(this).find('.ratingDate').text()
        var datev = $(this).find('.ratingDate').attr('title')
        var namev = $(this).find('.scrname').text()
        review = {
          rating: ratingv,
          author: namev,
          description: reviewv,
          datePublished: datev
        }
        reviewsArray.push(review)
      })
      console.log(reviewsArray)
    }
  });
}
