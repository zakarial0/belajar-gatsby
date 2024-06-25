import React from "react";
import Layout from "../components/layout";
import { data } from "autoprefixer";

const aboutPage = ({data}) => {
    return (
        <Layout>
            <h1>Halaman About</h1>
            <p>ini materi pertama bahas gatsby</p>
            <br/>
            {/* {
                data.allMdx.node.map((node) => (
                    <article key={node.id}>
                        <p>{node.fontmatter.author}</p>
                    </article>
                ))
            } */}
        </Layout>
    )
}
// export const pageQuery = graphql`
//   query {
//   allMdx {
//     nodes {
//       frontmatter {
//         title
//         slug
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// }`  
export default aboutPage;