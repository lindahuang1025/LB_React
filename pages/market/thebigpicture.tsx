import ErrorHandler from "@/client/component/ErrorHandler";
import { NextPageContext } from 'next';
import React from "react";
import { getMarketIndices } from "@/server/repositories/market-indices-respository";
import { MarketIndicesContract, ArticleContract, WholelistsContract, PositionSummaryContract } from "@/contracts"
import Market from "@/client/container/Market";
import { getMarketArticle } from "@/server/repositories/market-responsitory";
import { MarketType, marketContract } from "@/contracts/marketContract";
import Header from "@/client/container/Header";
import Footer from "@/client/container/Footer";

interface dataType {
    article: ArticleContract,
    marketInfo: marketContract,
    MarketType: MarketType,
    marketIndices: MarketIndicesContract,
    wholelists: WholelistsContract[], 
    positionSummary: PositionSummaryContract[],
};

const Index =(props: dataType) => {
    return <>
    <ErrorHandler>
      <Header marketIndices={props.marketIndices} />
    </ErrorHandler>
    <div className="bg-[#f5f5f5]">
      <Market {...props}/>
    </div> 
    <ErrorHandler>
      <Footer />
    </ErrorHandler>
  </>
}


Index.getInitialProps = async (ctx: NextPageContext) => {
  const article: ArticleContract = await getMarketArticle();
  const marketIndices: MarketIndicesContract = await getMarketIndices();
  return { 
    article,
    marketIndices,
    wholelists:[],
    positionSummary:[],
    settings:{showBanner:false,bannerText:"",showSymbolGroup:false},
  }
}

export default Index;