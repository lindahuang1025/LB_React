import PageContainer from "../client/container/PageContainer";
import App from "../client/container/App";
import ErrorHandler from "../client/component/ErrorHandler";
import { NextPageContext } from 'next';
import React from "react";
import { getMarketIndices } from "@/server/repositories/market-indices-respository";
import { getArticle, getPositionSummary, getWholelists } from "@/server/repositories/leaders-respository";
import { MarketIndicesContract, ArticleContract, WholelistsContract, PositionSummaryContract } from "@/contracts"

interface dataType {
  wholelists: WholelistsContract[], 
  article: ArticleContract,
  positionSummary: PositionSummaryContract[],
  marketIndices: MarketIndicesContract
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
    positionSummary: positionSummaryList.map((item: PositionSummaryContract, index: number)=>{
      item.key=index;
      return item;
    })
  }
}

export default Index;