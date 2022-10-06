exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query{
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `);

  if(resultado.errors){
    reporter.panic('No hubo resultados', resultado.errors);
  }

  // si hay paginas, crear los arhicvos
  const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;

  habitaciones.forEach(element => {
    console.log(element.slug)
    actions.createPage({
      path: element.slug,
      component: require.resolve('./src/components/habitaciones.js'),
      context: {
        slug: element.slug
      }
    })
  });
}
