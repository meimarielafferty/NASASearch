/***
 * 
 * UTILITY FUNCTIONS
 * 
 */


// returns lowercase copy of the passed string 
// with leading and trailing spaces removed
export function tidy(str) {

  str = str.toLowerCase();
  str = str.replaceAll('&amp;', 'and');
  str = str.replaceAll('&', 'and');
  // regex looks for apostrophes (')
  str = str.replaceAll(/[']/g, '');
  // regex looks for any non word or single white space characters
  str = str.replaceAll(/[^\w\s]/g, ' ').trim();

  // basic stemming to allow for simple relational matches
  // (ie. 'statistics' will match 'statistic' and vice versa)
  if (str.endsWith('ies')) {
    // eg. reliabilities --> reliability
    return str.slice(0, -3) + 'y';
  } else if (str.endsWith('es')) {
    // eg. boxes --> box
    return str.slice(0, -2)
  } else if (str.endsWith('s')) {
    // eg. statistics --> statistic
    return str.slice(0, -1);
  } else if (str.endsWith('ied') && str.length > 4) {
    // eg. studied --> study
    return str.slice(0, -3) + 'y';
  } else if (str.endsWith('ed') && str.length > 3) {
    // eg. researched --> research
    return str.slice(0, -2);
  } else if (str.endsWith('ing') && str.length > 5) {
    // eg. seeking --> seek
    return str.slice(0, -3);
  }

  return str;

} // tidy()


// returns the weighted rating of word based on specificity 
export function getRating(word) {

  const lowQuality = [
    'and'
    , 'the'
    , 'a'
    , 'an'
  ]

  const midQuality = [
    'of'
    , 'in'
    , 'it'
    , 'is'
    , 'as'
    , 'for'
    , 'at'
    , 'on'
  ];

  if (lowQuality.includes(word)) {
    return .2;
  } else if (midQuality.includes(word)) {
    return .35;
  } else {
    return 1;
  }

} // getRating()


// returns a number generated based on the link title/searchtext and url
// intended to be a unique value tied to each link
export function hashToNumber(str) {

  let hash = 0;

  // non-cryptogrpahic 32-bit hash
  for (let i = 0; i < str.length; i++) {
    // >>> 0 forces value into unsigned 32-bit integer range
    // (0 to 4294967295)
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }

  return hash;

} // hashToNumber()


// takes input message to log to console if debug is true
export function log(debug, msg) {
  debug && console.log(msg);
}