// import { launch } from 'puppeteer';
const launch = require("puppeteer").launch;

// amazon example
const productUrls = [
  "https://www.amazon.co.uk/dp/B00UY2U93W/ref=cm_sw_r_tw_dp_x_HO5Yzb6HQ03ZN",
  "https://www.amazon.co.uk/JETech-0900-SP-IPAD-MINI4-GLASS-Screen-Protector-Tempered-transparent/dp/B0155WVNA8/ref=pd_vtph_bs_lp_t_1/258-7988169-4810757?_encoding=UTF8&pd_rd_i=B0155WVNA8&pd_rd_r=f80dcb2a-7f1e-11e8-9f46-955b7807e231&pd_rd_w=o7UUU&pd_rd_wg=OtP80&pf_rd_i=desktop-dp-sims&pf_rd_m=A3P5ROKL5A1OLE&pf_rd_p=3950386175001893296&pf_rd_r=88AXH85J5B49FH2X2KCA&pf_rd_s=desktop-dp-sims&pf_rd_t=40701&psc=1&refRID=88AXH85J5B49FH2X2KCA"
];

async function amazon() {
  const browser = await launch({ headless: true });
  for (const url of productUrls) {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "load" });
    const data = await page.evaluate(() => ({
      title: document.querySelector("#productTitle").textContent.trim(),
      price: document.querySelector(".offer-price").textContent.trim()
    }));

    await page.close();
    console.log(`${data.title}: ${data.price}`);
  }
  browser.close();
}

function tripAdvisor() {
  request(
    "https://www.tripadvisor.ca/Restaurant_Review-g155019-d704408-Reviews-or10-Fresh_On_Spadina-Toronto_Ontario.html",
    function(error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var reviewsArray = [];
        var todayDate = new Date().toJSON().slice(0, 10);
        console.log(todayDate);
        $(".review").each(function(i, el) {
          var reviewv = $(this)
            .find("p.partial_entry")
            .text();
          var ratingv = $(this)
            .find(".ui_bubble_rating")
            .attr("class")
            .replace(/ui_bubble_rating bubble_/g, "");
          // var datev = $(this).find('.ratingDate').text()
          var datev = $(this)
            .find(".ratingDate")
            .attr("title");
          var namev = $(this)
            .find(".scrname")
            .text();
          review = {
            rating: ratingv,
            author: namev,
            description: reviewv,
            datePublished: datev
          };
          reviewsArray.push(review);
        });
        console.log(reviewsArray);
      }
    }
  );
}

async function tripAdvisorPuppet(url) {
  const browser = await launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });
  await page.waitForSelector("h1");
  await page.evaluate(() => (window.map = new Map()));
  const mapPrototype = await page.evaluateHandle(() => Map.prototype);
  let array = []

  const reviews = await page.evaluate(() => {
    
    // const reviewsArray = document.querySelectorAll("div.review-container");
    const reviewsArray = Array.from(document.querySelectorAll('div.review-container'));
    reviewsArray.forEach(function(item) {
      array.push(document.querySelector("h1.header").textContent.trim())
    });
    // return reviewsArray.map(p => p.partialentry.innerHTML)
  });

  console.log("all reviews", reviews);

  console.log(array)
  //   for (let storyLink of storyLinks) {
  //     await page.goto(storyLink)
  //     const screen = await page.screenshot();
  //     await expect(screen).toMatchImageSnapshot();
  // };

  dataArray = [];
  (".review-container");
  const data = await page.evaluate(() => ({
    title: document.querySelector("h1.header").textContent.trim()
  }));

  await page.close();
  console.log(data);
  // other actions...
  await browser.close();
}

tripAdvisorPuppet(
  "https://www.tripadvisor.ca/Restaurant_Review-g155019-d704408-Reviews-or20-Fresh_On_Spadina-Toronto_Ontario.html"
);