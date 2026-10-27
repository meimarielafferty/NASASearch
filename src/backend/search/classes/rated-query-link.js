export default class RatedQueryLink {

  constructor(index, matches, numWords, rating, word, arr) {
    this.index = index;
    this.matches = matches;
    this.numWords = numWords;
    this.rating = rating;
    this.words = word;
    // array that stores all RatedQueryLink instances
    arr.push(this);
  }

  // rating rates each link with a matching 
  updateLinkRating(rating, word) {
    this.matches += 1;
    if (this.words.includes(word)) {
      // if this word has already been 
      this.rating += rating * 0.75;
    } else {
      this.words.push(word);
      this.rating += rating;
    }
  }
}