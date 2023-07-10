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

interface dataType {
    wholelists: WholelistsContract[],
    article: ArticleContract,
    positionSummary: PositionSummaryContract[],
    marketIndices: MarketIndicesContract,
    title: string,
    titleMessage: string,
    settings: Settings
};

const Index = (props: dataType) => {
    return <>
        <ErrorHandler>
            <Header marketIndices={props.marketIndices} />
        </ErrorHandler>
        <div className="container">
            <div className="desktop:w-[1339px] laptop:w-[970px] tablet:w-[760px] mx-auto my-2">
                <h3 className="text-2xl py-4 hidden tablet:block ">Stocks Added / Removed In The Last 5 Days</h3>
                <div className="flex  flex-row text-left bg-drakGreen text-white p-4 h-[50px] text-[20px]">
                    <div className="w-full ml-auto">Date/Time (E.T.)</div>
                    <div className="w-full ml-auto">Symbol</div>
                    <div className="w-full ml-auto">CompanyName</div>
                    <div className="w-full ml-auto">Action</div>
                </div>
                <p className="text-center h-[50px] text-[20px]">No stocks have been added or removed in the last five days.</p>
            </div>
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
        title: "LEADERS LIST",
        titleMessage: "Nvidia Shines, CELH Lags With Leaders Mixed After Fed",
        settings: { showBanner: false, bannerText: "", showSymbolGroup: true },
        positionSummary: positionSummaryList.map((item: PositionSummaryContract, index: number) => {
            item.key = index;
            return item;
        })
    }
}

export default Index;