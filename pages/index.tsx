import PageContainer from "@/client/container/PageContainer";
import App from "@/client/container/App";
import ErrorHandler from "@/client/component/ErrorHandler";
import { NextPageContext } from 'next';
import React from "react";
import { getMarketIndices } from "@/server/repositories/market-indices-respository";
import { getArticle, getPositionSummary, getWholelists } from "@/server/repositories/leaders-respository";
import { MarketIndicesContract, ArticleContract, WholelistsContract, PositionSummaryContract } from "@/contracts"
import { Settings } from "@/contracts/marketContract";

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
  return (
    <PageContainer marketIndices={props.marketIndices}>
      <ErrorHandler>
        <App {...props}/>
      </ErrorHandler>
    </PageContainer>
  )
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