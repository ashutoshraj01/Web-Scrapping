# Basic Web Scrapping using jQuery and Node.js

## Tech used
- jQuery
- Node.js

## Packages used:-
i)  request and request-promise  --> used to download web sites.
ii)  cheerio --> used for using jQuery inside Node.js
iii) fs -> For doing file operations.

## Installing Yarn
- sudo apt remove cmdtest
- sudo apt remove yarn
- curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
- echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.- list
- sudo apt-get update
- sudo apt-get install yarn
- yarn install

## Steps to run the project on your local
- Clone the repo.
- Run "npm i" command inside the repo extracted from the clonned repo.
- Run "node index.js" inside the terminal.
- You can check the data scrapped inside "scrapedData.html" file, if not you can check for  
  error inside the console.

##
- You can add the url of website you want to scrap in the config.js file.
