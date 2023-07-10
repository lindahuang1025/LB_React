import PageContainer from "@/client/container/PageContainer";
import ErrorHandler from "@/client/component/ErrorHandler";
import { NextPageContext } from 'next';
import React from "react";
import { getMarketIndices } from "@/server/repositories/market-indices-respository";
import { MarketIndicesContract, ArticleContract, WholelistsContract, PositionSummaryContract } from "@/contracts"
import Market from "@/client/container/Market";
import { getMarketArticle } from "@/server/repositories/market-responsitory";
import { MarketType, marketContract } from "@/contracts/marketContract";

interface dataType {
    article: ArticleContract,
    marketInfo: marketContract,
    MarketType: MarketType,
    marketIndices: MarketIndicesContract
};

const Index =(props: dataType) => {
  return (
    <PageContainer marketIndices={props.marketIndices}>
      <ErrorHandler>
        <Market {...props}/>
      </ErrorHandler>
    </PageContainer>
  )
}

Index.getInitialProps = async (ctx: NextPageContext) => {
  const article: ArticleContract = await getMarketArticle();
  const marketIndices: MarketIndicesContract = await getMarketIndices()
  return { 
    article,
    marketIndices,
  }
}

export default Index;