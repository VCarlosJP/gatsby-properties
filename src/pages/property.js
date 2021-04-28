import React from 'react';
import { graphql } from 'gatsby'
import * as styles from './property.module.css'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "gatsby-image"

const PropertyPage = ({data}) =>{
    const property = data.allStrapiProperties.nodes[0]
    return(
        <Layout>
            <Seo title="Page two" />
        <div className={styles.property_container}>
            <div className={styles.details_container}>
                <h1>{property.title}</h1>
                <span>{property.category.name}</span>
                <span><b>{property.address}</b></span>
                <span><b>{property.price}</b></span>
            </div>
            <div>
                <Img fixed={property.picture.childImageSharp.fixed} />
            </div>
        </div>
        <div className={styles.mambo}>
            <span><b>Bathrooms: {property.room}</b></span>
            <span><b>Door Rooms: {property.bathroom}</b></span>
        </div>
        <div className={styles.description_container}>
            <h2><b>Description</b></h2>
            <p>{property.description}</p>
        </div>
        </Layout>
        
    )
}

export const query = graphql`
  query($id: String) {
    allStrapiProperties(filter: { id: { eq: $id } }) {
      nodes {
        id,
        title,
        address,
        price,
        room,
        bathroom,
        description,
        category{name},
        picture{
          childImageSharp{
            fixed(width:460){
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    
    }
  }
`

export default PropertyPage;

