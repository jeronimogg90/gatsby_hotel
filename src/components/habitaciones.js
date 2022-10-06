import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

export const query = graphql`
    query($slug: String!) {
        allDatoCmsHabitacion(filter:{ slug:{eq: $slug } }) {
            nodes{
                titulo
                contenido
                imagen{
                    gatsbyImageData
                }
            }
        }
    }
`

const HabitacionTemplate = ({data: { allDatoCmsHabitacion: { nodes } }}) => {
    const { titulo, contenido, imagen} = nodes[0]
    const img = getImage(imagen)

  return (
    <Layout>
        <main
            css={css`
                margin: 0 auto;
                max-width: 1200px;
                width: 95%;
            `}
        >
            <h1
                css={css`
                    text-align: center;
                    margin-top: 4rem;
                `}
            >{titulo}</h1>
            <p>{contenido}</p>
            <GatsbyImage image={img} alt="habitacion" src={img.images.fallback.src}/>
        </main>
    </Layout>
  )
}

export default HabitacionTemplate
