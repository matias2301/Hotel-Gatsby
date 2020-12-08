exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allDatoCmsHabitacion {
                nodes {
                    slug
                }
            }
        }
    `);

    // console.log(result.data.allDatoCmsHabitacion.nodes);

    if(result.errors) {
        reporter.panic('No hubo resultados ', result.errors);
    }

    // If there's pages, create files
    const rooms = result.data.allDatoCmsHabitacion.nodes;

    rooms.forEach( room => {
        actions.createPage({
            path: room.slug,
            component: require.resolve('./src/components/rooms.js'),
            context: {
                slug: room.slug
            }
        })
    });    
}
