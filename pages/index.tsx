import React from "react";
import { NextPageContext } from 'next';
import { getMarketIndices } from "@/server/repositories/market-indices-respository";
import { getArticle, getPositionSummary, getWholelists } from "@/server/repositories/leaders-respository";
import { MarketIndicesContract, ArticleContract, WholelistsContract, PositionSummaryContract } from "@/contracts"
import { Settings } from "@/contracts/marketContract";

import Head from "next/head";
import Header from "@/client/container/Header";
import Footer from "@/client/container/Footer";

import ErrorHandler from "@/client/component/ErrorHandler";
import IndexLayout from "@/client/layouts/Index"

interface dataType {
  wholelists: WholelistsContract[], 
  article: ArticleContract,
  positionSummary: PositionSummaryContract[],
  marketIndices: MarketIndicesContract,
  title:string,
  titleMessage:string,
  settings :Settings
};

const Index =(props: dataType) => {
  return <>
    {/* <Head></Head> */}
    <ErrorHandler>
      <Header marketIndices={props.marketIndices} />
    </ErrorHandler>
    <div className="bg-[#f5f5f5]">
      <IndexLayout {...props}/>
    </div> 
    <ErrorHandler>
      <Footer />
    </ErrorHandler>
  </>
}

Index.getInitialProps = async (ctx: NextPageContext) => {
  const wholelists: WholelistsContract[] = await getWholelists();
  const article: ArticleContract = await getArticle();
  const positionSummaryList: PositionSummaryContract[] = await getPositionSummary();
  const marketIndices: MarketIndicesContract = await getMarketIndices()

  return { 
    wholelists,
    article,
    marketIndices,
    title:"LEADERS LIST",
    titleMessage :"Nvidia Shines, CELH Lags With Leaders Mixed After Fed",
    settings:{showBanner:false,bannerText:"",showSymbolGroup:true},
    positionSummary: positionSummaryList.map((item: PositionSummaryContract, index: number)=>{
      item.key=index;
      return item;
    })
  }
}

export default Index;