import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ErrorHandler from "../component/ErrorHandler";
import React from "react";

const PageContainer = ({children, marketIndices})=>{
    return (
        <>
        <Head></Head>

        <ErrorHandler>
            <Header marketIndices={marketIndices} />
        </ErrorHandler>
        {children}
        <ErrorHandler>
            <Footer />
        </ErrorHandler>
      </>
    );
}

export default PageContainer;