/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info

  const result = await graphql(`
    {
      allStrapiProperties {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  result.data.allStrapiProperties.edges.forEach(({ node }) => {
    createPage({
      path: `properties/${node.id}`,
      component: path.resolve(`./src/pages/property.js`),
      context: {
        id: node.id,
      },
    })
  })
}
