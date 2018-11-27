const karakia = require('./karakia.js')
const waiataHimene = require('./waiata-himene.js')
const whaikorero = require('./whaikorero.js')

/**
 * import each of the pukapuka sections, concatenate them into a single array
 * export them as an object for consumption in gatsby.node.js when creating the site pages
 */
module.exports = {
  items: [].concat(karakia.items, waiataHimene.items, whaikorero.items),
}
