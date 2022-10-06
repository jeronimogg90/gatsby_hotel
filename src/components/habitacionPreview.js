import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80,.85);
    width : 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    &hover{
        cursor: pointer;
    }
`

const HabitacionPreview = ({habitacion}) => {
    const {titulo, id, contenido, slug, imagen} = habitacion
    const img = getImage(imagen)
  return (
    <div
        css={css`
            border: 1px solid #e1e1e1;
            margin-bottom: 2rem;
        `}
    >
        <GatsbyImage image={img} alt={slug} src={img.images.fallback.src}/>
      <div
        css={css`
            padding: 2rem;
        `}
      >
          <h3
            css={css`
               font-size: 3rem; 
            `}
          >{titulo}</h3>
          <p>{contenido}</p>

          <Boton to={slug}>Ver habitacion</Boton>
      </div>
    </div>
  )
}

export default HabitacionPreview
