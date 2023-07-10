import PageContainer from "@/client/container/PageContainer";
import App from "@/client/container/App";
import ErrorHandler from "@/client/component/ErrorHandler";
import { NextPageContext } from 'next';
import React from "react";
import { getMarketIndices } from "@/server/repositories/market-indices-respository";
import { getArticle, getPositionSummary, getSectorLeaderlists, getWholelists } from "@/server/repositories/leaders-respository";
import { MarketIndicesContract, ArticleContract, WholelistsContract, PositionSummaryContract } from "@/contracts"
import { Settings } from "@/contracts/marketContract";

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
  return (
    <PageContainer marketIndices={props.marketIndices}>
      <ErrorHandler>
        <App {...props}/>
      </ErrorHandler>
    </PageContainer>
  )
}

Index.getInitialProps = async (ctx: NextPageContext) => {
  const wholelists: WholelistsContract[] = await getSectorLeaderlists();
  const article: ArticleContract = await getArticle();
  const positionSummaryList: PositionSummaryContract[] = [];
  const marketIndices: MarketIndicesContract = await getMarketIndices()

  return { 
    wholelists,
    article,
    marketIndices,
    title:"IBD 50 TOP 10",
    titleMessage :"4 IBD 50 Stocks At Risk; One Already Got Kicked Off The List",
    settings:{showBanner:true,bannerText:"4 IBD 50 Stocks At Risk; One Already Got Kicked Off The List",showSymbolGroup:false},
    positionSummary: positionSummaryList.map((item: PositionSummaryContract, index: number)=>{
      item.key=index;
      return item;
    }),
    
  }
}

export default Index;