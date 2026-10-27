/***
 * 
 * GLOBAL HTML FORMATS
 * 
 */


/*** REPLACEMENT STRINGS ****/
export const put = {
  title_here: '[@title]',
  url_here: '[@url]',
  class_here: '[@class]',
  span_here: '[@span]',
  subtext_here: '[@subtext]',
  imgsrc_here: '[@imgsrc]',
  sub_title_here: '[@sub-title]',
};


/*** SPACERS ****/
export const div_tabspacer = `<div class="tabspacer"></div>`;


/*** LISTS ****/
export const ul = {
  open: `<ul class="${put.class_here}"`,
  close: `</ul>`,
};

export const li = `<li style="list-style:none;">
                        <a href="${put.url_here}" title="${put.title_here}">
                            ${put.title_here}
                        </a>
                        ${put.span_here}
                    </li>`;


/*** DIVS ***/
export const div = {
  open: {
    card: `<div class="card">`,
    row_card_container: `div class="row card-container" style="justify-content: flex-start">`,

  }
}