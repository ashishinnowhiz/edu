import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <Head>
                <title>Education Portal</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="education - React Next Online Courses & Education Template" />
                <meta name="og:title" property="og:title" content="education - React Next Online Courses & Education Template"></meta>
                <meta name="twitter:card" content="education - React Next Online Courses & Education Template"></meta>
                {/* <link rel="canonical" href="https://education-react.envytheme.com/"></link> */}
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;