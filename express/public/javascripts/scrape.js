const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

//const Nightmare = require('nightmare');
//const assert = require('assert');
//const express = require('express');

var reviewsArray = []

//multiple page recursion
const yelpRecursion = (i, link, cb) => {
  // let url = link + i
  console.log('yelp started', i+20)
  // console.log(link + '?start=' + i)
  let url = link + '?start=' + i
  // let url = `https://www.yelp.ca/biz/seven-lives-tacos-y-mariscos-toronto?start=${i}`
  request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('div[itemprop="review"]').each(function (index, el) {
        var ratingv = $(this).find('meta[itemprop="ratingValue"]').attr('content')
        var authorv = $(this).find('meta[itemprop="author"]').attr('content')
        var descriptionv = $(this).find('p[itemprop="description"]').text()
        var datePublishedv = $(this).find('meta[itemprop="datePublished"]').attr('content')
        var review = {
          id: index + i,
          rating: ratingv,
          author: authorv,
          origin: 'yelp',
          description: descriptionv,
          datePublished: datePublishedv,
        }
        reviewsArray.push(review)
      })
      // if (reviewsArray.length <=100 ) {
      // can scrape and base off of 'div[class="page-of-pages"]' or 'span[itemprop="reviewCount"] innerHTML
      if (i < 0) {
        i += 20
        yelpRecursion(i, link, cb)
      } else {
        // console.log('scrapedlength', reviewsArray.length)
        // console.log('scrapeddata', reviewsArray)
        // fs.writeFile('data.json', JSON.stringify(reviewsArray))
        //console.log(reviewsArray)
        cb(reviewsArray)
        reviewsArray = [] // resets reviewsArray between requests
      }
    }
  })
}

// yelpRecursion(0, 'https://www.yelp.ca/biz/seven-lives-tacos-y-mariscos-toronto?start=', function(data){console.log(data)})

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

module.exports = {
  yelpRecursion: yelpRecursion,
  yelp: yelp,
  tripAdvisor: tripAdvisor
}
