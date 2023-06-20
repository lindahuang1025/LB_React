import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ErrorHandler from "../component/ErrorHandler";
import React from "react";

const PageContainer = ({children})=>{
    return (
        <>
        <Head></Head>

        <ErrorHandler>
            <Header />
        </ErrorHandler>
        <div className="bg-[#f5f5f5]">
            {children}
        </div> 
        <ErrorHandler>
            <Footer />
        </ErrorHandler>
      </>
    );
}

export default PageContainer;
