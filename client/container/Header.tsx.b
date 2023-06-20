import React from "react"
import Image from 'next/image';
import { CloseOutlined, SearchOutlined, MenuOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

import { HeaderProps } from "@/interfaces"
import logo from "@/public/img/logo.svg";
import title from "@/public/img/title.svg";
import concierge from "@/public/img/concierge.svg";
import tour from "@/public/img/tour.svg";
import arrowup from "@/public/img/arrowup.png";

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

  const [searchText, setSearchText] = React.useState<string>("")
  const handleSearchChange = (searchText: string) => {
    console.log(searchText)
    setSearchText(searchText)
  }

  return <div>
    <div className="bg-[#1A7601] flex">
      <div className="flex-1"></div>
      <div className="w-[1339px] text-white text-center text-xl font-bold leading-[60px] font-lato">
        Click here to watch the Leaderboard Scorecard from May 2.
      </div>
      <div className="flex-1"></div>
    </div>
    <div className="header">
      <div className="w-[1339px] flex h-[74px] mx-auto">
        <div className="flex-1 py-[30px]">
          <Image
            width={180}
            height={14}
            src={logo}
            alt="logo"
          />
        </div>
        <Image
          width={200}
          height={43}
          src={title}
          alt="title"
        />
        <div className="flex-1 flex py-5 justify-end">
          <div className="flex">
            <input
              value={searchText}
              onChange={e => handleSearchChange(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSearchChange(searchText)}
              className="w-[218px] h-[34px] outline-0 rounded pl-3"
            />
            <div className="w-[40px] -ml-[40px]">
              {searchText &&
                <CloseOutlined className="text-xs mr-1 text-[#999999] cursor-pointer"
                  onClick={e => handleSearchChange("")}
                />
              }
            </div>
            <div className="w-[24px] -ml-[24px]">
              <SearchOutlined className="text-xs text-[#999999] cursor-pointer" />
            </div>
          </div>
          <Image
            width={34}
            height={34}
            src={concierge}
            className="mx-3 cursor-pointer"
            alt="concierge"
          />
          <Image
            width={34}
            height={34}
            src={tour}
            className="cursor-pointer"
            alt="tour"
          />
        </div>
      </div>
    </div>
    <div className="bg-[#3A9820]">
      <div className="w-[1339px] text-white mx-auto">
        {/* <MenuOutlined className="text-2xl h-12 cursor-pointer"/> */}
        <ul className="flex font-lato">
          <li className="h-12 leading-[48px] px-4 text-white text-xl font-light hover:bg-[#67C501] hover:text-[#484848] cursor-pointer flex items-center relative group">
            <span>Leaders</span>
            <CaretDownOutlined className="text-xs ml-1" />
            <ul className="hidden absolute w-[280px] group-hover:block z-10 top-[48px] bg-white border border-[#DDDDDD] rounded left-0 py-2 shadow-xl">
              <li className="px-3 hover:bg-[#eeeeee] text-xl py-1">Leaders Near A Buy Point</li>
              <li className="px-3 hover:bg-[#eeeeee] text-xl py-1">Leaders</li>
              <li className="px-3 hover:bg-[#eeeeee] text-xl py-1">Earnings Options</li>
              <li className="px-3 hover:bg-[#eeeeee] text-xl py-1">Short Sales</li>
              <li className="px-3 hover:bg-[#eeeeee] text-xl py-1">Leaders Watchlist</li>
            </ul>
          </li>
          <li className="h-12 leading-[48px] px-4 text-white text-xl font-light hover:bg-[#67C501] hover:text-[#484848] cursor-pointer flex items-center relative group">
            <span>Market</span>
            <CaretDownOutlined className="text-xs ml-1" />
            <ul className="hidden absolute w-[280px] group-hover:block z-10 top-[48px] bg-white border border-[#DDDDDD] rounded left-0 py-2 shadow-xl">
              <li className="px-3 hover:bg-[#eeeeee] text-xl py-1">The Big Picture</li>
              <li className="px-3 hover:bg-[#eeeeee] text-xl py-1">Stock Market Today</li>
              <li className="px-3 hover:bg-[#eeeeee] text-xl py-1">ETF Market Strategy</li>
              <li className="px-3 hover:bg-[#eeeeee] text-xl py-1">Market School</li>
            </ul>
          </li>
          <li className="h-12 leading-[48px] px-4 text-white text-xl font-light hover:bg-[#67C501] hover:text-[#484848] cursor-pointer flex items-center">
            <span>IBD Sector Leaders</span>
          </li>
          <li className="h-12 leading-[48px] px-4 text-white text-xl font-light hover:bg-[#67C501] hover:text-[#484848] cursor-pointer flex items-center relative group">
            <span>IBD 50</span>
            <CaretDownOutlined className="text-xs ml-1" />
            <ul className="hidden absolute w-[280px] group-hover:block z-10 top-[48px] bg-white border border-[#DDDDDD] rounded left-0 py-2 shadow-xl">
              <li className="px-3 hover:bg-[#eeeeee] text-xl py-1">Top 10</li>
              <li className="px-3 hover:bg-[#eeeeee] text-xl py-1">Full List</li>
            </ul>
          </li>
          <li className="h-12 leading-[48px] px-4 text-white text-xl font-light hover:bg-[#67C501] hover:text-[#484848] cursor-pointer flex items-center">
            <span>Stock Spotlight</span>
          </li>
          <li className="h-12 leading-[48px] px-4 text-white text-xl font-light hover:bg-[#67C501] hover:text-[#484848] cursor-pointer flex items-center">
            <span>Stocks Added/Removed </span>
          </li>
          <li className="h-12 leading-[48px] px-4 text-white text-xl font-light hover:bg-[#67C501] hover:text-[#484848] cursor-pointer flex items-center">
            <span>My Stock Lists</span>
          </li>
          <li className="h-12 leading-[48px] px-4 text-white text-xl font-light hover:bg-[#67C501] hover:text-[#484848] cursor-pointer flex items-center">
            <span>My Alerts</span>
          </li>
          <li className="h-12 leading-[48px] px-4 text-white text-xl font-light hover:bg-[#67C501] hover:text-[#484848] cursor-pointer flex items-center">
            <span>FAQ</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="bg-white">
      <div className="w-[1339px] mx-auto flex">
        <div className="flex-1">
          <div>
            <label className="font-light font-lato text-xs w-[100px] inline-block underline">PREVIOUS CLOSE:</label>
            <div className="inline-block">
              <ul className="flex text-sm font-light font-lato">
                {props.marketIndices.marketIndices.map(indexData => 
                  <li key={indexData.Symbol} className="px-3 cursor-pointer">
                    <div className="flex items-center">
                      <span className="pr-1">{indexData.IndexAbbr}</span>
                      <span>{indexData.IndexValue}</span>
                    </div>
                    <div className="flex items-center font-normal">
                      {indexData.IsUp
                        ? <CaretUpOutlined className="text-[#489E25] text-base"/>
                        : <CaretDownOutlined className="text-[#D01D1B] text-base"/>
                      }
                      <span className={indexData.IsUp ? "text-[#489E25] mr-1" : "text-[#D01D1B] mr-1"}>{indexData.IndexValueChange.trim()}</span>
                      <span className={indexData.IsUp ? "text-[#489E25]" : "text-[#D01D1B]"}>({indexData.IndexValuePctChange.trim()})</span>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div>
            <label className="font-light font-lato text-xs w-[100px] inline-block underline">AFTER HOURS:</label>
            <div className="inline-block">
              <ul className="flex text-sm font-light font-lato">
                {props.marketIndices.etfIndices.map(indexData => 
                  <li key={indexData.Symbol} className="px-2 cursor-pointer">
                    <div className="flex items-center text-xs items-center">
                      <span className="pr-1">{indexData.Symbol}</span>
                      {Number.parseFloat(indexData.PricePctChange) > 0
                        ? <CaretUpOutlined className="text-[#489E25] text-sm"/>
                        : <CaretDownOutlined className="text-[#D01D1B] text-sm"/>
                      }
                      <span>{Number.parseFloat(indexData.PricePctChange).toFixed(2)}%</span>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex min-h-[75px] items-center">
          <p className="text-2xl font-lato mr-[18px]">Market in confirmed uptrend</p>
          <Image
            width={42}
            className="py-[17px]"
            src={arrowup}
            alt="arrowup"
          />
        </div>
      </div>
    </div>
  </div>
}

export default Header