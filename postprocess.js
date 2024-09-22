// This can be a typescript file as well

// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, json, excel, zip, and image files
import { readJSON, writeJSON } from 'https://deno.land/x/flat@0.0.11/mod.ts' 

// Step 1: Read the downloaded_filename JSON
const filename = Deno.args[0] // Same name as downloaded_filename `const filename = 'League-of-nations.json';`
const json = await readJSON(filename)
console.log(json)

// Step 2: Filter specific data we want to keep and write to a new JSON file
const matchResults = Object.values(json.matches); // convert property values into an array
const filteredmatchResults = matchResults.map(match => ({ 
    event: match.event, 
    homeTeam: match.league_entry_1,
    homeTeamPoints: match.league_entry_1_points,
    awayTeam: match.league_entry_2,
    awayTeamPoints: match.league_entry_2_points,
    finished: match.finished
}));

// Step 3. Write a new JSON file with our filtered data
const newFilename = `League-of-nations-postprocessed.json` // name of a new file to be saved
await writeJSON(newFilename, filteredmatchResults) // create a new JSON file with just the Bitcoin price
console.log("Wrote a post process file")
