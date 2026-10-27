/*** 
 * CATEGORY CLASS 
 * Note:
 *      "data" field is an array that can be assigned either:
 *          - an array of subcategories (each of which contain an array of links)
 *          - an array of links, if the category has no subcategories
 *     
 ***/

import Subcategory from "./subcategory.js";


export default class Category {

  constructor(tag, title, hasSubcat, subtext) {
    // tag value must match the input parameter used when calling "onCategoryClicked(e, input)"
    this.tag = tag;
    this.title = title;
    this.hasSubcat = hasSubcat;
    if (subtext == undefined || subtext == '') { subtext = null };
    this.subtext = subtext;
    this.links = [];
    // adds all Category instances to this array
    allLinks.push(this);
  }

  addSubcategory(title) {
    let addme = new Subcategory(title);
    this.links.push(addme);
    return addme;
  }

}