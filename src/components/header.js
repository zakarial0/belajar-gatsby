import React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";

const Header = () => {
    const data = useStaticQuery( graphql `
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
        `)

    return (
        <header className="flex py-4 px-6 bg-blue-600">
            <h1 className=" text-neutral-50 font-bold text-4xl w-4/5 ml-12">
            {data.site.siteMetadata.title}
            </h1>
            <nav className=" w-2/5">
            <ul className="flex my-1.5 space-x-8 w-1/5 ml-28">
                <li>
                    <Link to="/" as="script" className="text-xl text-neutral-50">Home</Link>
                </li>
                <li>
                    <Link to="/about" as="script" className="text-xl text-neutral-50">About</Link>
                </li>
                <li>
                    <Link to="/blog" as="script" className="text-xl text-neutral-50">Blog</Link>
                </li>
                <li>
                    <Link to="/contact" as="script" className="text-xl text-neutral-50">Contact</Link>
                </li>
            </ul>
            </nav>
        </header>
    )
}
export default Header