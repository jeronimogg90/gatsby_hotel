import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const useHabitaciones = () => {
    
    const data = useStaticQuery(graphql`
        query{
            allDatoCmsHabitacion {
                nodes{
                    titulo
                    id
                    slug
                    contenido
                    imagen {
                        gatsbyImageData
                    }
                }
            }
        }
    `)

    return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
        titulo : habitacion.titulo,
        id: habitacion.id,
        contenido: habitacion.contenido,
        slug: habitacion.slug,
        imagen: habitacion.imagen
    }))
}

export default useHabitaciones