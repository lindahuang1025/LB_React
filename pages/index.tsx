import React from "react";

import Header from "@/client/container/Header";
import Footer from "@/client/container/Footer";
import Router from "@/client/container/Router"
import ErrorHandler from "@/client/component/ErrorHandler";

import { getMarketIndices } from "@/server/repositories/market-indices-respository";
import { getArticle, getPositionSummary, getWholelists } from "@/server/repositories/leaders-respository";
import { getIntradayArticle, getTop10Article, getMarketArticle } from "@/server/repositories/market-responsitory";

import { WholelistsContract, ArticleContract, PositionSummaryContract, MarketIndicesContract } from "@/contracts"
import { MarketIndicesInterface, IndexProps } from "@/contracts/interfaces"

const Index =(props: IndexProps) => {
  return <>
    <ErrorHandler>
      <Header marketIndices={props.marketIndices} />
    </ErrorHandler>
    <div className="bg-[#f5f5f5]">
      <Router {...props} />
    </div> 
    <ErrorHandler>
      <Footer />
    </ErrorHandler>
  </>
}

Index.getInitialProps = async function(): Promise<IndexProps> {

  const wholelists: WholelistsContract[] = await getWholelists();
  const article: ArticleContract = await getArticle();
  const positionSummaryList: PositionSummaryContract[] = await getPositionSummary();
  const marketIndices: MarketIndicesInterface = await getMarketIndices()

  const intradayArticle: ArticleContract = await getIntradayArticle();
  const top10Article: ArticleContract = await getTop10Article();
  const marketArticle: ArticleContract = await getMarketArticle();

  return { 
    wholelists,
    article,
    marketIndices,
    title:"LEADERS LIST",
    titleMessage :"Nvidia Shines, CELH Lags With Leaders Mixed After Fed",
    settings:{ showBanner: false, bannerText: "", showSymbolGroup: true },
    positionSummary: positionSummaryList,
    intradayArticle,
    top10Article,
    marketArticle,
    sectorLeadersTitle: "IBD SECTOR LEADERS",
    sectorLeadersTitleMessage: "Growth Stock Kinsale Capital Sees Accelerated Earnings Growth, Moves Above New Buy Point",
    sectorLeadersSetting: { showBanner: true, bannerText: "Sector - COMPUTER", showSymbolGroup: false },
    spotlightTitle: "STOCK SPOTLIGHT",
    spotlightTitleMessage: "Building Stock Crafts Framework Of Bullish Chart Pattern",
    spotlightSetting: { showBanner: true, bannerText: "STOCK SPOTLIGHT", showSymbolGroup: false },
    top10Title: "IBD 50 Top 10",
    top10TitleMessage: "4 IBD 50 Stocks At Risk; One Already Got Kicked Off The List",
    top10Setting: { showBanner:true, bannerText: "IBD 50 TOP 10", showSymbolGroup: false },
    thebigpictureSetting: { showBanner:false, bannerText:"", showSymbolGroup: false},
  }
}

export default Index;
