/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions: { createPage } }) => {
  console.log('Creating Pukapuka Pages...')

  const item = {
    heading: { title: 'Prayer For Tamariki' },
    group: 'Karakia',
    lines: [
      { maori: 'E te Atua', eng: 'Oh Creator of everything' },
      { maori: 'Manaakitia mātou', eng: 'watch over us' },
      { maori: 'Arahina mai', eng: 'guide and lead' },
      { maori: 'I ā mātou i roto i a mātou mahi', eng: 'us in all our duties' },
      { maori: 'Mō tēnei rā', eng: 'for today' },
      { maori: 'Korōria ki tōu ingoa tapu', eng: 'Glory to your holy name' },
      { maori: 'Āmene', eng: 'Let it be so' },
    ],
  }

  item.slug = item.heading.title
    .toLowerCase()
    .split(' ')
    .join('-')

  createPage({
    path: `/${item.group.toLowerCase()}/${item.slug}/`,
    component: require.resolve('./src/templates/pukapuka-item.js'),
    context: { item },
  })

  // // `getPokemonData` is a function that fetches our data
  // const allPokemon = await getPokemonData(["pikachu", "charizard", "squirtle"])

  // // Create a page that lists all Pokémon.
  // createPage({
  //   path: `/`,
  //   component: require.resolve("./src/templates/all-pokemon.js"),
  //   context: { allPokemon },
  // })

  // // Create a page for each Pokémon.
  // allPokemon.forEach(pokemon => {
  //   createPage({
  //     path: `/pokemon/${pokemon.name}/`,
  //     component: require.resolve("./src/templates/pokemon.js"),
  //     context: { pokemon },
  //   })
  // })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `SitePage` && node.context) {
    const { createNodeField } = actions

    if (node.context.hasOwnProperty('item')) {
      createNodeField({
        node,
        name: `title`,
        value: node.context.item.heading.title,
      })

      createNodeField({
        node,
        name: `group`,
        value: node.context.item.group,
      })
    }
  }
}
