/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
// const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `StrapiProperties`) {
        const slug = 'properties';
        createNodeField({
            node,
            name: `slug`,
            value: slug,
          })
      }
  }

  exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions
    const result = await graphql(`
      query {
        allStrapiProperties {
          edges {
            node {
                id,
                fields {
                    slug
                  }
            }
          }
        }
      }
    `)

    result.data.allStrapiProperties.edges.forEach(({ node }) => {
        createPage({
          path: `${node.fields.slug}/${node.id}`,
          component: path.resolve(`./src/pages/property.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
            id: node.id
          },
        })
      })



  }
