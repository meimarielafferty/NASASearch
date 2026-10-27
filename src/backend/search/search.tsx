/***
 *
 * MEI LAFFERTY'S SEARCH ALGORITHM BUILT FOR NASA'S RELIABILITY SITE
 * 
 */

/***
 * 
 * Search functionality for the application.
 *
 * This application was built to demonstrate the custom search algorithm
 * and functionality utilized by NASA's Reliability site. 
 * 
 */

/***
 * 
 * SEARCH STEPS
 * 
 * 1. getLinkData() stores each flattened link in allFlatLinks array
 *    --> titles/searchtext are tidied, split, and each unique individual word is stored in wordList array
 * 
 * 2. processesQuery() returns array of each tidied word from the query
 *    getRatingSum() returns the total rating of each word in the query
 * 
 * 3. getMatchingWordList() filters wordList 
 *    (containing each unique word found in the links) 
 *    down to only the words in the search query
 *    stores filtered array in foundWords
 *    --> words must be exact match, typos are not accounted for (not case sensitive)
 * 
 * 4. tidyAndSplit() cleans up the query string and splits it into array of individual words
 * 
 * 5. foundwords (containing each link word that matches a query word) is traversed to
 *    get each link associated with any matching word
 * 
 * 5. create a RatedQueryLink for each match (each match is rated for relevance)
 * 
 * 6. weak matches are filteres out
 * 
 * 7. sorts the remaining matches by relevance
 * 
 * 8. format() method adds html formatting based on search result type 
 *    (text or card)
 * 
 */

// import the data
import * as data from '../data/data.js';

// import the utility functions
import * as utils from './utils.js';

// import global array that holds every flattened link
import { wordList, allFlatLinks } from '../globals/arrays.js';

/***
 * CUSTOM CLASSES
 */
// import Word from './classes/word.js';
import RatedQueryLink from './classes/rated-query-link.js';
import FlatLink from './classes/flat-link.js';
import type Category from '../data/classes/category.js';
// import Link from '../data/classes/link.js';


const debug = false;


export var searchResults = [];


/***
 * MAIN function that takes the query as an input and traverses through the search algorithm
 */
export function search(query: string) {

  utils.log(debug, 'Query String: ' + query);

  // *** STEP 1 ***
  // store all link data in allFlatLinks array
  getLinkData(data.allLinks);

  // *** STEP 2 ***
  // process query
  let tidiedQuery = processQuery(query);
  // calculate sum of each query word's rating
  let totalQueryRating = getRatingSum(tidiedQuery);


  // stores a map of all found words and their indices
  let ratedQueryIndexMap = new Map();

  // *** STEP 3 ***
  // array of Word instances where the Word.val matches a query word
  let foundWords = getMatchingWordList(ratedQueryIndexMap, tidiedQuery);

  // *** STEP 4 ***
  // stores array of FlatLink objects that match the query string
  // sorted by relevnce and duplicates removed
  let searchResults = getSearchResults(ratedQueryIndexMap, foundWords.length, totalQueryRating);

  return searchResults;

}


/***
 * STEP 1
 */
function getLinkData(categoriesArray: Category[], parentCat?: string) {

  categoriesArray.forEach((cat) => {
    // if categoriesArray has a subcategory
    // recursively pass the subcategory to get the nested links 
    if (cat.hasSubcat) {
      getLinkData(cat.links, cat.title);
      return;
    }

    let linkCategory = parentCat == undefined ? cat.title : parentCat;
    let linkSubcat = parentCat == undefined ? null : cat.title;

    // iterate through each link and create a FlatLink instance
    // the FlatLink constructor adds every instance to the allFlatLinks array 
    // (allFlatLinks is declared in /globals/arrays.js)
    // the constructor also adds each unique word from all of the links to wordList array
    // (wordList array is declared in /globals/arrays.js)
    cat.links.forEach((l) => {
      let searchThis = l.searchtext == null ? l.title : l.searchtext;
      new FlatLink(
        l.title,
        l.url,
        linkCategory,
        linkSubcat,
        l.label,
        l.status,
        searchThis,
        l.imgsrc,
        l.diagram,
        null,
        null
      );
    })
  });

} // getLinkData()


/***
 * STEP 2
 */
function processQuery(query: string) {

  // store a lowercase version of each search word in an array
  let splitQuery = query.split(/\s+/);

  // get an array of the tidied version of each word in the query
  let tidiedQuery = splitQuery.map(utils.tidy);

  return tidiedQuery;

} // processQuery()

function getRatingSum(arr: any[]) {
  
  let totalRating = 0;

  // get the sum of each query word's rating (words like 'and', 'the', & 'of' are lower rated)
  arr.forEach((word => {
    totalRating += utils.getRating(word);
  }));

  return totalRating;
} // getRatingSum()


/***
 * STEP 3
 */
function getMatchingWordList(ratedQueryMap: Map<number, RatedQueryLink>, splitQuery: string[]) {
  let foundWords = wordList.filter((w) => {
    // if the current word is in the query list, match = true
    let match = splitQuery.includes(w.val);

    // if it is a match, add the tracker array to the linkIndex array
    if (match) {
      // TODO NEXT
      w.tracker.forEach((i: number) => {
        
        let wordCount = allFlatLinks[i].searchtext.split(' ').length;

        if (ratedQueryMap.has(i)) {
          ratedQueryMap.get(i)?.updateLinkRating(w.rating, w.val);
        } else {
          const ratedLink = new RatedQueryLink(i, 1, wordCount, w.rating, [w.val], []);
          ratedQueryMap.set(i, ratedLink);
        }
      });
    };
    return match;
  });
  return foundWords;

} // getMatchingWordList()


/***
 * STEP 4
 */
function getSearchResults(ratedQueryMap: Map<number, RatedQueryLink>, numFoundWords: number, totalQueryRating: number) {

  let ratedQueryIndexList = Array.from(ratedQueryMap.values());
  let searchResults = [];

  // remove any low quality matches (links that only have low quality word matches)
  ratedQueryIndexList = ratedQueryIndexList.filter((l) => l.rating >= 1);

  const ratingSet = {};
  // sorts the links based on relevance
  ratedQueryIndexList.sort(sortIndexByRating(numFoundWords, totalQueryRating, ratingSet));

  const hashTrack = new Set<number>();

  // stores the sorted link details in array to be formatted and printed
  ratedQueryIndexList.forEach((l) => {
    // can use the "format" method to return html formatting if desired
    // html formatting should be stored in a string

    let link = allFlatLinks[l.index] as FlatLink;

    // checks uniqueHash to avoid adding duplicate values to searchResults[]
    if ( !hashTrack.has(link.uniqueHash) ) {
      hashTrack.add(link.uniqueHash);
      searchResults.push(link);
    }
  });

}

function sortIndexByRating(numSearchWords: number, queryRating: number, set: any) {
  return function (a: any, b: any) {
    // adds the number of search words not found to the title word count
    // this ensures 1 word matches for 1 word titles don't automatically
    // get the top spot as 100% match, and ensures titles with all of the
    // search terms will appear at the top every time
    let bNumWords = b.numWords + (numSearchWords - b.matches);
    let aNumWords = a.numWords + (numSearchWords - a.matches);

    // if the link title/searchtext match rating is equal to or greater
    // than the query rating boost result by 2x
    // link rating can exceed if a query word is found multiple times
    let bMaxMatch = (b.rating >= queryRating ? 2 : 1);
    let aMaxMatch = (a.rating >= queryRating ? 2 : 1);
    // if the search term and link title/searchtext match 1 to 1
    // then boost that match by 5x because its a 100% match
    bMaxMatch *= (b.words.length == numSearchWords ? 5 : 1);
    aMaxMatch *= (a.words.length == numSearchWords ? 5 : 1);

    let bRating = (Math.pow(b.matches, b.matches) / bNumWords) * bMaxMatch;
    let aRating = (Math.pow(a.matches, a.matches) / aNumWords) * aMaxMatch;

    if (debug) {
      let aLink = allFlatLinks[a.index];
      let bLink = allFlatLinks[b.index];

      set[aLink.uniqueHash] = [aLink.title, a.rating, a.words.length, a.numWords, bMaxMatch, aRating];
      set[bLink.uniqueHash] = [bLink.title, b.rating, b.words.length, b.numWords, bMaxMatch, bRating];
    }

    return bRating - aRating;
  }
}