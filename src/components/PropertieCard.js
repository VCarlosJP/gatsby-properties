import React from "react"
import Img from "gatsby-image"

import * as styles from "./PropertieCard.module.css"
import { Link } from "gatsby"

const PropertieCard = ({ id, category, address, price, picture }) => {
  return (
    <Link to={`properties/${id}`}>
      <div className={styles.property_card}>
        <Img fluid={picture.childImageSharp.fluid} />
        <div className={styles.card_details}>
          <div>
            <span>
              <b>{category.name}</b>
            </span>
          </div>
          <div>
            <span>{address}</span>
          </div>
          <div>
            <span>
              <b>${price}</b>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PropertieCard
