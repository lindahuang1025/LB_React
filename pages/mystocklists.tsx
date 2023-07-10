import React, { Fragment } from "react";
import { NextPageContext } from 'next';
import { getMarketIndices } from "@/server/repositories/market-indices-respository";
import { getArticle, getPositionSummary, getWholelists } from "@/server/repositories/leaders-respository";
import { MarketIndicesContract, ArticleContract, WholelistsContract, PositionSummaryContract } from "@/contracts"
import { Settings } from "@/contracts/marketContract";

import Head from "next/head";
import Header from "@/client/container/Header";
import Footer from "@/client/container/Footer";

import ErrorHandler from "@/client/component/ErrorHandler";
import { ArrowDownOutlined, ArrowUpOutlined, CaretDownOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space } from "antd";
import { getStockList } from "@/server/repositories/market-responsitory";

interface dataType {
    wholelists: WholelistsContract[],
    article: ArticleContract,
    positionSummary: PositionSummaryContract[],
    marketIndices: MarketIndicesContract,
    title: string,
    titleMessage: string,
    settings: Settings
};

const items: MenuProps['items'] = [
    {
        label: 'Price&Volume',
        key: '1',
        disabled: true
    },
    {
        label: 'Fundamentals',
        key: '2',
        disabled: true
    },
    {
        label: 'SmartSelect',
        key: '3',
        disabled: true
    }
];

const menuProps = {
    items,
    onClick: () => { },
};

const SymbolItem = ({ _symbol }: { _symbol: WholelistsContract }) => {

    const price_changed = _symbol.PriceChange > 0 ? <Fragment><ArrowUpOutlined className="mb-2 text-[#2a8f00]" /><span className="ml-1 text-[#2a8f00]">{_symbol.PriceChange}</span></Fragment> : <Fragment><ArrowDownOutlined className="text-red" /><span className="text-red">{Math.abs(_symbol.PriceChange)}</span></Fragment>
    const price_changed_percent = _symbol.PricePercentChange > 0 ? <Fragment><ArrowUpOutlined className="mb-2 text-[#2a8f00]" /><span className="ml-1 text-[#2a8f00]">{(_symbol.PricePercentChange).toFixed(2) + "%"}</span></Fragment> : <Fragment><ArrowDownOutlined className="text-red" /><span className="text-red">{Math.abs(_symbol.PricePercentChange).toFixed(2) + "%"}</span></Fragment>
    const volume_changed_percent = _symbol.VolumePercentChange > 0 ? <Fragment><ArrowUpOutlined className="mb-2 text-[#2a8f00]" /><span className="ml-1 text-[#2a8f00]">{(_symbol.VolumePercentChange).toFixed(2) + "%"}</span></Fragment> : <Fragment><ArrowDownOutlined className="text-red" /><span className="text-red">{Math.abs(_symbol.VolumePercentChange).toFixed(2) + "%"}</span></Fragment>

    let volume = "";
    if (_symbol.Volume > 1000000) {
        volume = (Math.floor((_symbol.Volume / 1000000) * 10) / 10) + "M";
    }
    else if (_symbol.Volume > 1000) {
        volume = (Math.floor((_symbol.Volume / 1000) * 10) / 10) + "K";
    }

    return <tr className="text-left bg-white text-[#333] text-[17px] p-4 h-[50px]">
        <td className="p-4 font-black">{_symbol.Symbol}</td>
        <td className="p-4 font-light">{_symbol.CompanyName}</td>
        <td className="p-4">{"$" + _symbol.Price}</td>
        <td className="p-4">{price_changed}</td>
        <td className="p-4">{price_changed_percent}</td>
        <td className="p-4">{volume}</td>
        <td className="p-4">{volume_changed_percent}</td>
    </tr>
}

const SymbolMobileItem = ({ _symbol }: { _symbol: WholelistsContract }) => {

    const price_changed = _symbol.PriceChange > 0 ? <Fragment><ArrowUpOutlined className="mb-2 text-[#2a8f00]" /><span className="ml-1 text-[#2a8f00]">{_symbol.PriceChange}</span></Fragment> : <Fragment><ArrowDownOutlined className="text-red" /><span className="text-red">{Math.abs(_symbol.PriceChange)}</span></Fragment>
    const price_changed_percent = _symbol.PricePercentChange > 0 ? <Fragment><ArrowUpOutlined className="mb-2 text-[#2a8f00]" /><span className="ml-1 text-[#2a8f00]">{(_symbol.PricePercentChange).toFixed(2) + "%"}</span></Fragment> : <Fragment><ArrowDownOutlined className="text-red" /><span className="text-red">{Math.abs(_symbol.PricePercentChange).toFixed(2) + "%"}</span></Fragment>
    const volume_changed_percent = _symbol.VolumePercentChange > 0 ? <Fragment><ArrowUpOutlined className="mb-2 text-[#2a8f00]" /><span className="ml-1 text-[#2a8f00]">{(_symbol.VolumePercentChange).toFixed(2) + "%"}</span></Fragment> : <Fragment><ArrowDownOutlined className="text-red" /><span className="text-red">{Math.abs(_symbol.VolumePercentChange).toFixed(2) + "%"}</span></Fragment>

    let volume = "0";
    if (_symbol.Volume > 1000000) {
        volume = (Math.floor((_symbol.Volume / 1000000) * 10) / 10) + "M";
    }
    else if (_symbol.Volume > 1000) {
        volume = (Math.floor((_symbol.Volume / 1000) * 10) / 10) + "K";
    }
    return <div className="text-left bg-white text-[#333] text-[17px] p-4 h-[50px] mt-1 mb-1">
        <div className="mb-4"><span>Symbol :</span> <span className="p-4 font-black">{_symbol.Symbol}</span></div>
        <div className="mb-4"><span>CompanyName :</span><span className="p-4 font-light">{_symbol.CompanyName}</span></div>
        <div className="mb-4"><span>Price</span><span className="p-4">{"$" + _symbol.Price}</span></div>
        <div className="mb-4"><span>PriceChg. :</span>{price_changed}</div>
        <div className="mb-4"><span>Price%Chg. :</span>{price_changed_percent}</div>
        <div className="mb-4"><span>Volume :</span>{volume}</div>
        <div className="mb-4"><span>Volume%Chg. :</span>{volume_changed_percent}</div>
    </div>
}

const Index = (props: dataType) => {

    const { wholelists } = props;
    return <>
        <ErrorHandler>
            <Header marketIndices={props.marketIndices} />
        </ErrorHandler>
        <div className="w-full bg-drakGreen h-[60px] ">
            <div className="desktop:w-[1339px] laptop:w-[970px] tablet:w-[760px] mx-auto my-2 py-4">
                <div className="desktop:w-[1339px] laptop:w-[970px] tablet:w-[760px] text-white mx-auto">
                    <ul className="font-lato hidden desktop:flex">
                        <span className="mt-[15px]">My Stock List</span>
                        <li className={`h-12 leading-[48px] px-4 text-white text-xl font-light hover:bg-[#67C501] hover:text-[#484848] cursor-pointer flex items-center relative group`}>
                            <span className="w-[40px] pl-[20px] mx-[50px]"><DownOutlined className="text-xs ml-1 text-bold" /></span>
                            <ul className="hidden absolute w-[280px] group-hover:block z-10 top-[48px] bg-white border border-[#DDDDDD] rounded left-0 py-2 shadow-xl">
                                <li className="px-3 hover:bg-[#EEEEEE] text-xl py-1 cursor-not-allowed font-light text-[#888]">My Stock List</li>
                                <li className="px-3 hover:bg-[#EEEEEE] text-xl py-1 cursor-not-allowed font-light text-[#888]">My Stock List 2</li>
                                <li className="px-3 hover:bg-[#EEEEEE] text-xl py-1 cursor-not-allowed font-light text-[#888]">My Stock List 3</li>
                                <li className="px-3 hover:bg-[#EEEEEE] text-xl py-1 cursor-not-allowed font-light text-[#888]">My Stock List 4</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container">
            <Dropdown menu={menuProps} className="mr-3">
                <Button>
                    <Space className="text-base">
                        Price&Volume
                        <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
            <Button className="ml-4 text-base">Edit Stock List</Button>
            <div className="tablet:hidden">
                {
                    wholelists.map(item => {
                        return <SymbolMobileItem _symbol={item} />
                    })
                }
            </div>
            <div className="mt-5 hidden tablet:block">
                <table className="border-collapse table-auto w-full text-sm w-full">
                    <thead>
                        <tr className="bg-primary text-white">
                            <th className="p-4">Symbol</th>
                            <th className="p-4">CompanyName</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">PriceChg.</th>
                            <th className="p-4">Price%Chg.</th>
                            <th className="p-4">Volume</th>
                            <th className="p-4">Volume%Chg.</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-800">
                        {
                            wholelists.map(item => {
                                return <SymbolItem _symbol={item} />
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
        <ErrorHandler>
            <Footer />
        </ErrorHandler>
    </>
}

Index.getInitialProps = async (ctx: NextPageContext) => {
    const wholelists: WholelistsContract[] = await getStockList();
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