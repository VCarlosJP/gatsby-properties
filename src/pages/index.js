import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import * as styles from "./index.module.css"

import Layout from "../components/layout"
import PropertieCard from "../components/PropertieCard"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />

    <div className={styles.properties_container}>
      {data.allStrapiProperties.nodes.map((propertie, index) => (
        <PropertieCard key={index} propertie={propertie} />
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query PropertiesQuery {
    allStrapiProperties {
      nodes {
        id
        address
        price
        category {
          name
        }
        picture {
          childImageSharp {
            fixed(width: 300, height: 176, cropFocus: CENTER, fit: COVER) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default IndexPage
