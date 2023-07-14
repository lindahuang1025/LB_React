import React from 'react'
import { Divider } from "antd";
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';

import { SearchedSymbolDto } from "@/contracts/dtos"
import { ApiRequestState } from "@/contracts/enumerates"

interface SearchProps {
	searchText: string;
	handleSearchChange: any;
	setSearchInputFocused: any;
	searchInputFocused: boolean;
	searchSymbolsStatus: ApiRequestState;
	searchedSymbols: SearchedSymbolDto[];
}

const Search: React.FC<SearchProps> = (props: SearchProps) => {

  const searchElement = React.useRef<HTMLInputElement>(null)

	return (
    <div className="flex relative">
      <input
        ref={searchElement}
        value={props.searchText}
        onChange={e => props.handleSearchChange(e.target.value)}
        onKeyDown={e => e.key === "Enter" && props.handleSearchChange(props.searchText)}
        className="w-[218px] h-[34px] outline-0 rounded pl-3"
        onFocus={e => props.setSearchInputFocused(true)}
        onBlur={e => setTimeout(() => props.setSearchInputFocused(false), 200)}
      />
      <div className="w-[40px] -ml-[40px]">
        {props.searchText &&
          <CloseOutlined className="text-xs mr-1 text-[#999999] cursor-pointer"
            onClick={e => props.handleSearchChange("")}
          />
        }
      </div>
      <div className="w-[24px] -ml-[24px]">
        <SearchOutlined className="text-xs text-[#999999] cursor-pointer"
          onClick={e => {props.handleSearchChange(props.searchText);searchElement.current?.focus();}}
        />
      </div>
      {props.searchInputFocused &&
        <div className="absolute w-[320px] z-10 top-[35px] bg-white border border-[#DDDDDD] rounded-b left-0 shadow-xl">
          {props.searchSymbolsStatus === ApiRequestState.ERROR
            ? <div className="p-2">Server Error!</div>
            : props.searchSymbolsStatus === ApiRequestState.PENDING
            ? <div className="p-2">Searching...</div>
            : props.searchedSymbols.length === 0
            ? <div className="p-2">Please input symbol to search!</div>
            : <ul className="">
              {props.searchedSymbols.map(s =>
                <li key={s.Symbol} className=" cursor-pointer hover:bg-[#EEEEEE]" onClick={e => console.log("select symbol")}>
                  <div className="px-3 py-2 flex justify-between">
                    <span className="font-bold">{s.Symbol}</span>
                    <span className="font-light">{s.CompanyName}</span>
                  </div>
                  <Divider className="m-0" />
                </li>
              )}
            </ul>
          }
        </div>
      }
    </div>
	)
}

export default Search
