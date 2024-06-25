import { graphql, frontmatter } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const blogPage = ({ data }) => {
 return(
    <div>
        <Layout>
            <div>
                {
                    data.allMdx.nodes.map((node) => (
                        <article>
                            <h1>{node.frontmatter.title}</h1>
                            <p>posted : {node.frontmatter.date}</p>
                            <p>Author : {node.frontmatter.author}</p>
                            <p>{node.excerpt}</p>
                        </article>
                    ))
                }
            </div>
        </Layout>
    </div>
 )
}
    export const query = graphql `
    query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
        nodes {
            frontmatter{
                date(formatString: "MMMM D, YYYY")
                title
                author
                }
            id
            excerpt
            }
        }
    }
    `

export default blogPage