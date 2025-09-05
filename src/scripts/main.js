'use strict';

/**
 * Center the spider
 *
 * @param {string} fieldClass
 * @param {string} spiderClass
 */
function centerTheSpider(fieldClass, spiderClass) {
  const wall = document.querySelector(fieldClass);
  const spider = document.querySelector(spiderClass);

  const offsetX = (wall.clientWidth - spider.clientWidth) / 2;
  const offsetY = (wall.clientHeight - spider.clientHeight) / 2;

  spider.style.left = `${offsetX}px`;
  spider.style.top = `${offsetY}px`;
}

centerTheSpider('.wall', '.spider');
