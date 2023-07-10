import React from 'react'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { MarketIndicesContract } from "@/contracts"

interface MarketIndicesProps {
  marketIndices: MarketIndicesContract
}

const MarketIndices: React.FC<MarketIndicesProps> = (props: MarketIndicesProps) => {

  const searchElement = React.useRef<HTMLInputElement>(null)
  
	return (
    <div className="flex-1 mr-3">
      <div>
        <label className="font-light font-lato text-xs w-[100px] inline-block underline">PREVIOUS CLOSE:</label>
        <div className="inline-block">
          <ul className="flex text-sm font-light font-lato flex-wrap">
            {props.marketIndices.marketIndices.map(indexData => 
              <li key={indexData.Symbol} className="px-3 cursor-pointer">
                <div className="flex items-center h-5">
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
	)
}

export default MarketIndices
