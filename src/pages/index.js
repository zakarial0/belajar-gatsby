import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const IndexPage = ({data}) => {
    return (
        <Layout>
            <p>{data.site.siteMetadata.description}</p>
        </Layout>
    )
}
export const query = graphql` 
query IndexPageQuery {
    site {
        siteMetadata{
            description}}}`

export default IndexPage;