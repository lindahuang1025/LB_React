import ErrorHandler from "@/client/component/ErrorHandler";
import { NextPageContext } from 'next';
import React from "react";
import { getMarketIndices } from "@/server/repositories/market-indices-respository";
import { getSectorLeaderlists } from "@/server/repositories/leaders-respository";
import { MarketIndicesContract, ArticleContract, WholelistsContract, PositionSummaryContract } from "@/contracts"
import { Settings } from "@/contracts/marketContract";
import { getIntradayArticle } from "@/server/repositories/market-responsitory";
import Header from "@/client/container/Header";
import IndexLayout from "@/client/layouts/Index";
import Footer from "@/client/container/Footer";

interface dataType {
  wholelists: WholelistsContract[], 
  article: ArticleContract,
  positionSummary: PositionSummaryContract[],
  marketIndices: MarketIndicesContract,
  title:string,
  titleMessage:string,
  settings:Settings
};

const Index =(props: dataType) => {
    return <>
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
  const wholelists: WholelistsContract[] = await getSectorLeaderlists();
  const article: ArticleContract = await getIntradayArticle();
  const positionSummaryList: PositionSummaryContract[] = [];
  const marketIndices: MarketIndicesContract = await getMarketIndices()

  return { 
    wholelists,
    article,
    marketIndices,
    title:"IBD SECTOR LEADERS",
    titleMessage :"Growth Stock Kinsale Capital Sees Accelerated Earnings Growth, Moves Above New Buy Point",
    settings:{showBanner:true,bannerText:"Sector - COMPUTER",showSymbolGroup:false},
    positionSummary: positionSummaryList.map((item: PositionSummaryContract, index: number)=>{
      item.key=index;
      return item;
    }),
    
  }
}

export default Index;