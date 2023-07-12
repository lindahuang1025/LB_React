import React, { Fragment } from "react";
import { NextPageContext } from 'next';
import { getMarketIndices } from "@/server/repositories/market-indices-respository";
import { getArticle, getPositionSummary, getWholelists } from "@/server/repositories/leaders-respository";
import { MarketIndicesContract, ArticleContract, WholelistsContract, PositionSummaryContract } from "@/contracts"
import { Settings } from "@/contracts/marketContract";
import Image from 'next/image';
import addImag from "@/public/img/Add.png";
import chartImag from "@/public/img/Chart.png";
import articleImag from "@/public/img/ArticleArchives.png";
import alertImag from "@/public/img/Alerts.png";
import deleteImag from "@/public/img/trash-default.svg";
import exportImag from "@/public/img/export.svg";
import { LeadersImage, GreenArrowImage, RedArrowImage } from "@/client/config/imgConfig";
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

const PriceChange = ({ symbol }: { symbol: WholelistsContract }) => {
  const value = symbol.PriceChange > 0 ? symbol.PriceChange : Math.abs(symbol.PriceChange);
  return <Fragment>
    <Image
      className="inline mr-2 mb-[5px]"
      width={16}
      height={16}
      src={symbol.PriceChange > 0 ? GreenArrowImage.src : RedArrowImage.src}
      alt={symbol.PriceChange > 0 ? GreenArrowImage.alt : RedArrowImage.alt} />
    <span className={(symbol.PriceChange > 0 ? "text-[#2a8f00]" : "text-red") + " text-[20px]"}>{value}</span>
  </Fragment>
}

const PricePersentChange = ({ symbol }: { symbol: WholelistsContract }) => {
  const value = symbol.PricePercentChange > 0 ? (symbol.PricePercentChange).toFixed(2) : Math.abs(symbol.PricePercentChange).toFixed(2);
  return <Fragment>
    <Image
      className="inline mr-2 mb-[5px]"
      width={16}
      height={16}
      src={symbol.PricePercentChange > 0 ? GreenArrowImage.src : RedArrowImage.src}
      alt={symbol.PricePercentChange > 0 ? GreenArrowImage.alt : RedArrowImage.alt} />
    <span className={(symbol.PricePercentChange > 0 ? "text-[#2a8f00]" : "text-red") + " text-[20px]"}>{value}%</span>
  </Fragment>
}

const VolumePersentChange = ({ symbol }: { symbol: WholelistsContract }) => {
  const value = symbol.VolumePercentChange > 0 ? (symbol.VolumePercentChange).toFixed(2) : Math.abs(symbol.VolumePercentChange).toFixed(2);
  return <Fragment>
    <Image
      className="inline mr-2 mb-[5px]"
      width={16}
      height={16}
      src={symbol.VolumePercentChange > 0 ? GreenArrowImage.src : RedArrowImage.src}
      alt={symbol.VolumePercentChange > 0 ? GreenArrowImage.alt : RedArrowImage.alt} />
    <span className={(symbol.VolumePercentChange > 0 ? "text-[#2a8f00]" : "text-red") + " text-[20px]"}>{value} %</span>
  </Fragment>
}

const SymbolItem = ({ _symbol }: { _symbol: WholelistsContract }) => {
  let volume = "";
  if (_symbol.Volume > 1000000) {
    volume = (Math.floor((_symbol.Volume / 1000000) * 10) / 10) + "M";
  }
  else if (_symbol.Volume > 1000) {
    volume = (Math.floor((_symbol.Volume / 1000) * 10) / 10) + "K";
  }

  return <tr className="text-left bg-white text-[#333] p-4 h-[50px] border border-[#ddd] border-t-1">
    <td className="p-4 font-black text-center text-lg">{_symbol.Symbol}</td>
    <td className="p-4 font-light text-center text-lg">{_symbol.CompanyName}</td>
    <td className="p-4 text-center text-[20px]">{"$" + _symbol.Price}</td>
    <td className="p-4 text-center"><PriceChange symbol={_symbol} /></td>
    <td className="p-4 text-center"><PricePersentChange symbol={_symbol} /></td>
    <td className="p-4 text-center text-[18px]">{volume}</td>
    <td className="p-4 text-center"><VolumePersentChange symbol={_symbol} /></td>
    <td>
      <div className="flex flex-row">
        <Image height="30" width="30" alt="" src={chartImag} />
        <Image height="30" width="30" alt="" src={addImag} />
        <Image height="30" width="30" alt="" src={articleImag} />
        <Image height="30" width="30" alt="" src={alertImag} />
        <Image height="30" width="30" alt="" src={deleteImag} />
      </div>
    </td>
  </tr>
}

const SymbolMobileItem = ({ _symbol }: { _symbol: WholelistsContract }) => {
  let volume = "";
  if (_symbol.Volume > 1000000) {
    volume = (Math.floor((_symbol.Volume / 1000000) * 10) / 10) + "M";
  }
  else if (_symbol.Volume > 1000) {
    volume = (Math.floor((_symbol.Volume / 1000) * 10) / 10) + "K";
  }
  return <div className="text-left bg-white text-[#333] text-lg p-4 h-[400px] mt-3 mb-1 shadow-xl">
    <div className="mb-4"><span>Symbol :</span> <span className="p-4 font-black">{_symbol.Symbol}</span></div>
    <div className="mb-4"><span>CompanyName :</span><span className="p-4 font-light">{_symbol.CompanyName}</span></div>
    <div className="mb-4"><span>Price :</span><span className="p-4">{"$" + _symbol.Price}</span></div>
    <div className="mb-4"><span>PriceChg. :</span><span className="p-4"><PriceChange symbol={_symbol} /></span></div>
    <div className="mb-4"><span>Price%Chg. :</span><span className="p-4"><PricePersentChange symbol={_symbol} /></span></div>
    <div className="mb-4"><span>Volume :</span>{volume}</div>
    <div className="mb-4"><span>Volume%Chg. :</span><span className="p-4"><VolumePersentChange symbol={_symbol} /></span></div>
    <div className="flex flex-row">
        <Image height="30" width="30" alt="" src={chartImag} />
        <Image height="30" width="30" alt="" src={addImag} />
        <Image height="30" width="30" alt="" src={articleImag} />
        <Image height="30" width="30" alt="" src={alertImag} />
        <Image height="30" width="30" alt="" src={deleteImag} />
      </div>
  </div>
}

const MyStockLists = (props: dataType) => {
  const { wholelists } = props;
  return <>
    <div className="w-full bg-drakGreen h-[60px] ">
      <div className="desktop:w-[1339px] laptop:w-[970px] tablet:w-[760px] mx-auto my-2">
        <div className="desktop:w-[1339px] laptop:w-[970px] tablet:w-[760px] text-white mx-auto">
          <ul className="font-lato hidden desktop:flex">
            <span className="ml-[15px] mt-4">My Stock List</span>
            <li className={`h-12 leading-[48px] px-4 text-white text-xl font-light hover:bg-[#67C501] hover:text-[#484848] cursor-pointer flex items-center relative group`}>
              <span className="w-[40px] mb-8 mt-7"><DownOutlined className="text-xs ml-1 text-bold" /></span>
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
    <div className="container mt-3">
      <Dropdown menu={menuProps} className="mr-3">
        <Button size={'large'}>
          <Space className="text-base">
            Price&Volume
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <Button size={'large'} className="ml-4 text-base">Edit Stock List</Button>
      <div className="float-right mt-5 mr-[10px]">
        <div className="flex flex-row">
          <span className="w-[65px]">EXPORT</span>
          <Image height="22" width="22" alt="" src={exportImag} />
        </div>
      </div>
      <div className="tablet:hidden">
        {
          wholelists.map((item, i) => {
            return <SymbolMobileItem _symbol={item} key={i} />
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
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800">
            {
              wholelists.map((item, i) => {
                return <SymbolItem _symbol={item} key={i} />
              })
            }
          </tbody>
        </table>

      </div>
    </div>
  </>
}



export default MyStockLists;