import React from "react"
import Image from 'next/image';
import { Divider } from "antd";
import { CloseOutlined, SearchOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

import logo from "@/public/img/logo.svg";
import title from "@/public/img/title.svg";
import concierge from "@/public/img/concierge.svg";
import tour from "@/public/img/tour.svg";
import arrowup from "@/public/img/arrowup.png";
import close from "@/public/img/close.svg";
import { searchSymbols } from "@/client/services/lbService"
import { ApiRequestState, SearchedSymbolContract, SymbolSearchResponse, MarketIndicesContract } from "@/contracts"

import Menu from '@/client/container/Menu'
import Search from '@/client/container/Search'
import MarketIndices from '@/client/container/MarketIndices'

interface dataType {
  marketIndices: MarketIndicesContract;
};

const Header: React.FC<dataType> = (props: dataType) => {
  
  const [renderAlert, setRenderAlert] = React.useState<boolean>(true)

  const [searchText, setSearchText] = React.useState<string>("")
  const [searchInputFocused, setSearchInputFocused] = React.useState<boolean>(false)
  const handleSearchChange = async (searchText: string) => {
    setSearchText(searchText)
    return onSearchSymbols(searchText)
  }

  const [searchedSymbols, setSearchedSymbols] = React.useState<SearchedSymbolContract[]>([])
  const [searchSymbolsStatus, setSearchSymbolsStatus] = React.useState<ApiRequestState>(ApiRequestState.SUCCESS)
  const onSearchSymbols = async (searchText: string = "") => {
    setSearchSymbolsStatus(ApiRequestState.PENDING)
    try {
      const response: SymbolSearchResponse = await searchSymbols(searchText)
      setSearchedSymbols(response.data as SearchedSymbolContract[])
    } catch (error) {
      setSearchSymbolsStatus(ApiRequestState.ERROR)
    } finally {
      setSearchSymbolsStatus(ApiRequestState.SUCCESS)
    }
  }

  return <div>
    {/* Alert on tablet, laptop and desktop */}
    {renderAlert &&
      <div className="bg-[#1A7601] hidden tablet:flex">
        <div className="flex-1 min-w-[20px]"></div>
        <div className="desktop:w-[1339px] laptop:w-[970px] tablet:w-[760px] text-white text-center text-xl font-bold leading-[60px] font-lato">
          Click here to watch the Leaderboard Scorecard from May 2.
        </div>
        <div className="flex-1 flex justify-end min-w-[20px]">
          <Image
            width={12}
            height={12}
            src={close}
            alt="close"
            className="mr-2 cursor-pointer"
            onClick={e => setRenderAlert(false)}
          />
        </div>
      </div>
    }
    <div className="header hidden tablet:flex">
      <div className="desktop:w-[1339px] laptop:w-[970px] tablet:w-[760px] flex h-[74px] mx-auto justify-center">
        <div className="flex-1 py-[30px] hidden laptop:block">
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
        <div className="flex-1 py-5 justify-end hidden laptop:flex">
          <Search
            searchText={searchText}
            handleSearchChange={handleSearchChange}
            setSearchInputFocused={setSearchInputFocused}
            searchInputFocused={searchInputFocused}
            searchSymbolsStatus={searchSymbolsStatus}
            searchedSymbols={searchedSymbols}
          />
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

    <Menu />

    {/* Alert on mobile */}
    {renderAlert &&
      <div className="bg-[#1A7601] flex tablet:hidden">
        <div className="flex-1 min-w-[20px]"></div>
        <div className="desktop:w-[1339px] laptop:w-[970px] tablet:w-[760px] text-white text-center text-sm font-bold font-lato px-5 py-2">
          Click here to watch the Leaderboard Scorecard from May 2.
        </div>
        <div className="flex-1 flex justify-end min-w-[20px]">
          <Image
            width={12}
            height={12}
            src={close}
            alt="close"
            className="mr-2 cursor-pointer"
            onClick={e => setRenderAlert(false)}
          />
        </div>
      </div>
    }

    <div className="bg-white">
      <div className="desktop:w-[1339px] laptop:w-[970px] tablet:w-[760px] mx-auto hidden tablet:flex">
        <MarketIndices marketIndices={props.marketIndices} />
        <div className="flex items-center">
          <p className="text-xl font-lato mr-[18px]">Market in confirmed uptrend</p>
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