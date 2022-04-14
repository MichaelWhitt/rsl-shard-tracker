const puppeteer = require('puppeteer');

async function scrape(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    //select image by xpath
    // const [el] = await page.$x('//*[@id="post-40375"]/div/p[1]/img')
    // const src = await el.getProperty('src')
    // const srcTxt = await src.jsonValue()

    // const allEls = await page.$('td')
    // const text = await allEls.getProperty('innerHTML')
    // const plainVal = await text.jsonValue()

//--------------
    //const mapMe = await page.$$('td')
    //const arr = []
    // mapMe.forEach( m => {
    //     m.getProperty('innerHTML').then( a => a.jsonValue().then(x => {
    //         arr.push(x)
    //         for (let i = 0; i < 20; i++) console.log(arr[i])
    //         //let newArr = arr.filter( (v, i, arr)=> i % 3 === 0)
    //     }))
    // })
//---------------
const data = await page.evaluate(() => {
    const tds = Array.from(document.querySelectorAll('table tr td'))
    return tds.map(td => td.innerText)
});
  // removes 11 items from the beginning that aren't relevant
let newData = []
for(let i = 0; i < data.length; i++) {
    if (i > 11 ) newData.push(data[i])
}
var fs = require('fs')
let champs = []
for (let i = 0; i < newData.length; i+=4) champs.push(newData[i])
//adds champs to json file
//fs.writeFileSync('./champs.json', JSON.stringify(champs))

}




scrape('https://www.gamingscan.com/raid-shadow-legends-tier-list/')