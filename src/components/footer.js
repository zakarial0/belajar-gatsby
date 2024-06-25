import React from "react";
import { graphql, useStaticQuery } from "gatsby";


const Footer = () => {
    const data = useStaticQuery( graphql `
    query{
        site{
            siteMetadata{
                author
            }
        }
    }
    `)
    
    return(
        <footer className="bg-blue-600 flex justify-center py-3 absolute bottom-0 w-full">
            <p className="font-bold text-white">© {data.site.siteMetadata.author} - 2020</p>
        </footer>
    )
}

export default Footer