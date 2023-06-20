import PageContainer from "../client/container/PageContainer";
import App from "../client/container/App";
import ErrorHandler from "../client/component/ErrorHandler";
import { getWholelists, getArticle, getPositionSummary } from "../client/services/lbService";
import { NextPageContext } from 'next';

import { getMarketIndices } from "@/server/repositories/market-indices"
import { MarketIndices } from "@/interfaces"

const Index =(props) => {
  return (
    <PageContainer marketIndices={props.marketIndices}>
      <ErrorHandler>
        <App {...props}/>
      </ErrorHandler>
    </PageContainer>
  )
}

Index.getInitialProps = async (ctx: NextPageContext) => {
  const resWholelists = await getWholelists();
  const resArticle = await getArticle();
  const resPositionSummary = await getPositionSummary();
  const marketIndices: MarketIndices = await getMarketIndices()

  return { 
    wholelists: resWholelists.data,
    article: resArticle.data,
    positionSummary: resPositionSummary.data,
    marketIndices
  }
}

export default Index;