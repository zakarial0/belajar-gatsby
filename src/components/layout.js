import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Header className="w-2/3"/>
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout