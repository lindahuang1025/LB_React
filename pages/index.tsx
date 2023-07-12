import React from "react";

import Header from "@/client/container/Header";
import Footer from "@/client/container/Footer";
import Router from "@/client/container/Router"
import ErrorHandler from "@/client/component/ErrorHandler";

import { getMarketIndices } from "@/server/repositories/market-indices-respository";
import { getArticle, getPositionSummary, getWholelists } from "@/server/repositories/leaders-respository";
import { getIntradayArticle, getTop10Article, getMarketArticle } from "@/server/repositories/market-responsitory";

import { IndexProps } from "@/contracts/props"

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
  const marketIndices: MarketIndicesContract = await getMarketIndices()

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
    top10Title: "STOCK SPOTLIGHT",
    top10TitleMessage: "Building Stock Crafts Framework Of Bullish Chart Pattern",
    top10Setting: { showBanner:true, bannerText: "STOCK SPOTLIGHT", showSymbolGroup: false },
    thebigpictureSetting: { showBanner:false, bannerText:"", showSymbolGroup: false},
  }
}

export default Index;
