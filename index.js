const request = require('request-promise');
const fs = require('fs');
const cheerio = require('cheerio');
const config = require('./config');
const url = config.url;


async function scrapeData() {
    try {
    const html = await request.get(url);
    fs.writeFileSync("./scrapedData.html", html);

    const $ = await cheerio.load(html);
    const textContent = $('h1').text();
    console.log(textContent);    
    } catch (error) {
          console.log("error = ",error);  
    }
    
} 

scrapeData();