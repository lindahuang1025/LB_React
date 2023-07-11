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
import { Button, Dropdown, Input, MenuProps, Space } from "antd";
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
        <div className="container">
            <div className="mt-2">
                <Button className="ml-4 text-base">Create</Button>
                <Button className="ml-4 text-base">Active</Button>
                <Button className="ml-4 text-base">Triggred</Button>
            </div>
            <div className="mt-2">
                <Button className="ml-4 text-base">Symbol</Button>
                <Button className="ml-4 text-base">Lists</Button>
            </div>

            <div className="border bg-white p-5 border-[#ddd] border-t-8 border-t-primary">
                <div className="flex flex-col tablet:flex-row min-w-full ">
                    <div className="w-full tablet:w-1/2 tablet:ml-auto">
                        <div className="text-[14px] text-white text-center px-5 py-2 h-[12px] grow bg-[#31a700]">
                            Symbol
                        </div>
                        <div className="text-[#222222] text-[30px] bg-white h-[20px]  text-center px-5 py-2 grow bg-[#31a700] border-[1px] border-[#67c500] py-[40px] px-[25px]">
                        </div>
                    </div>
                    <div className="w-full tablet:w-1/2 tablet:mr-auto tablet:ml-[45px]">
                        <div className="text-[14px] text-white text-center px-5 py-2 h-[12px] grow bg-[#31a700]">
                            Price
                        </div>
                        <div className="text-[#222222] text-[14px] bg-white h-[20px]  text-center px-5 py-2 grow bg-[#31a700] border-[1px] border-[#67c500] py-[40px] px-[25px]">
                        </div>
                    </div>
                </div>
                <p className="mb-1">Moving Averages:</p>
                <div className="flex flex-col tablet:flex-row min-w-full ">
                    <div className="w-full tablet:w-1/2 tablet:ml-auto">
                        <div className="text-[14px] text-white text-center px-5 py-2 h-[12px] grow bg-[#31a700]">
                            Daily Chart
                        </div>
                        <div className="text-[#222222] text-[14px] bg-white h-[20px]  text-left  grow bg-[#31a700] border-[1px] border-[#67c500]">
                            <div className="border bg-white p-2 border-[#ddd] border-b-1 border-t-primary">10-day</div>
                            <div className="border bg-white p-2 border-[#ddd] border-b-1 border-t-primary">21-day EMA</div>
                            <div className="border bg-white p-2 border-[#ddd] border-b-1 border-t-primary">50-day</div>
                            <div className="border bg-white p-2 border-[#ddd] border-b-1 border-t-primary">200-day</div>
                        </div>
                    </div>
                    <div className="w-full tablet:w-1/2 tablet:mr-auto tablet:ml-[45px]">
                        <div className="text-[14px] text-white text-center px-5 py-2 h-[12px] grow bg-[#31a700]">
                            Weekly Chart
                        </div>
                        <div className="text-[#222222] text-[14px] bg-white h-[20px]  text-left  grow bg-[#31a700] border-[1px] border-[#67c500]">
                            <div className="border bg-white p-2 border-[#ddd] border-b-1 border-t-primary">10-Week</div>
                            <div className="border bg-white p-2 border-[#ddd] border-b-1 border-t-primary">40-Week</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col tablet:flex-row min-w-full ">
                    <div className="w-full tablet:w-1/2 tablet:ml-auto">
                        <p className="mb-1">Email Notification Settings:</p>
                        <Input placeholder="wangqx@shinetechsoftware.com" />
                        <p>Desktop Notification Settings:</p>
                        <Input placeholder="Audio" />
                    </div>
                    <div className="w-full tablet:w-1/2 tablet:mr-auto tablet:ml-[45px]">
                        <p>Note:</p>
                        <Input.TextArea
                            placeholder="input note"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                        <div className="text-right text-[12px] text-[#222222]">100 Characters maximum</div>
                    </div>
                </div>
                <div className="flex flex-col tablet:flex-row min-w-full ">
                    <div className="w-full tablet:w-1/2 tablet:ml-auto"></div>
                    <div className="w-full tablet:w-1/2 tablet:mr-auto tablet:ml-[45px]">
                    <Button className="ml-4 text-base w-full">Save</Button>
                    </div>
                </div>
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