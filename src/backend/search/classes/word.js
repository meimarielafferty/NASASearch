/***
 * 
 * CUSTOM CLASS
 * 
 */


import { getRating } from './utils.js';
import { wordList } from '../../globals/arrays.js';



export default class Word {

  /***
   * val[string] - stores the word
   * tracker[array] - stores the indexes of links containing the word
   * rating[number] - stores the word's calculated rating
   */

  constructor(val, tracker) {
    this.val = val;
    this.tracker = tracker;
    this.rating = getRating(val);
    // add all Word instances to this array
    wordList.push(this);
  }

  updateTracker(addme) {
    this.tracker.push(addme);
  }

} // Word class