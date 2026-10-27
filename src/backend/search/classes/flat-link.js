/***
 * 
 * CUSTOM CLASS
 * 
 */


import Word from './word.js';
import { hashToNumber, tidy } from '../utils.js';
import { wordList, allFlatLinks } from '../../globals/arrays.js';


export default class FlatLink {

  constructor(title, url, cat, subcat, label, status, searchtext, imgsrc, diagram, pgTitle, pgUrl) {
    this.title = title;
    this.url = url;
    this.cat = cat;
    this.subcat = subcat;
    this.label = label;
    this.status = status;
    this.searchtext = searchtext;
    this.imgsrc = imgsrc;
    this.diagram = diagram;
    this.pgTitle = pgTitle;
    this.pgUrl = pgUrl;
    // create a unique numericidentifier based on the title/searchtext string and url
    let hashString = searchtext == null ? title : searchtext;
    hashString = hashString + url;
    this.uniqueHash = hashToNumber(hashString);
    // add all Link instances to this array
    allFlatLinks.push(this);
    //add each word in the title/searchtext to the searchable list of words
    this.addTitleToSearchList(title, allFlatLinks.length - 1, searchtext);
  }

  addTitleToSearchList(title, index, searchtext) {
    var splitStr = searchtext == null ? title.split(' ') : searchtext.split(' ');

    splitStr.forEach(word => {
      var titleWord = tidy(word);

      var wordSearch = wordList.find(word => word.val == titleWord);
      // if wordSearch is undefined, the word is not yet in the list
      // add new words to the list, otherwise, update the existing word's tracker
      wordSearch == undefined ? new Word(titleWord, [index]) : wordSearch.updateTracker(index);
    });
  }

  format() {
    // check if link has imgsrc (if yes, it is a card with title)
    // if not, it is a text link

    var html = '';
    var cardFormat = this.imgsrc == null ? false : true;

    if (cardFormat) {
      html = card_wtitle_format.replace(put_imgsrc_here, this.imgsrc);
    } else {
      html = li;
    }
    html = html.replace(put_url_here, this.url);
    html = html.replaceAll(put_title_here, this.title);
    html = html.replace(put_span_here, '');
    html += div_tabspacer;

    return html;
  }

} // FlatLink class