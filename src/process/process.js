let gpxParser = require('gpxparser');
let fs = require("fs");
const util = require("util")

async function process() {
  const readdir = util.promisify(fs.readdir);
  let files = await readdir("./routes")
  let resultsArr = []
  for (let i = 0; i < files.length; i++) {
    let currentJSON = await parseFile(files[i])
    resultsArr.push(currentJSON)
  }
  let output = JSON.stringify(resultsArr)
  const writeFile = util.promisify(fs.writeFile)
  await writeFile("./output.json", output)
}

async function parseFile(file) {
  const readFile = util.promisify(fs.readFile)
  let data = await readFile("./routes/" + file)
  let gpx = new gpxParser();

  gpx.parse(data)
  let result = gpx.tracks[0]
  return result
}

process()