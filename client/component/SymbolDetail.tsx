import { LeadersImage } from "../config/imgConfig";
import wholelistsDataType from "../dataType/wholelistsDataType";
import Image from 'next/image'

const SymbolDetail = ({wholeItem}: {wholeItem: wholelistsDataType}) =>{
    let { Symbol, 
        CompanyName, 
        Price, 
        PriceChange, 
        PricePercentChange, 
        VolumePercentChange, 
        BuyPoint,
        BuyRangeFrom,
        BuyRangeTo,
        PositionSize,
        CurrentAction, 
        LeaderboardAnalysis,
        BackStory,
        RecentArticle
    } = wholeItem;
    return (<div className="border border-[#ddd] shadow-md rounded bg-white border-t-8 border-t-primary px-5 pt-[18px] pb-[15px] mt-[70px]">
        <div className="flex justify-between">
            <div>
                <h3 className="text-[#222] mb-4 leading-tight"> 
                    <span className="text-xl/[26px] font-bold">{Symbol}</span>
                    <span className="text-xl font-light ml-[35px]">{CompanyName} (NASDAQ)</span>
                </h3>
                <div className="border-l-[6px] border-l-[#1b7600] mt-5 mb-[30px] pl-[15px]">
                    <div className="mb-[5px] text-sm font-black text-[#202d3c]">AFTER HOURS 07:59 PM ET 6/16/2023</div>
                    <div className="text-lg font-normal">
                        <span className="mr-2">$721.97</span>
                        <span className="mr-2">0.09</span>
                        <span className="mr-2">0.01%</span>
                        <span className="mr-2">Volume: 44.1K</span>
                    </div>
                </div>
            </div>
            <div>
                <Image src={LeadersImage.src} alt={LeadersImage.alt} width={90} height={90} />
            </div>
        </div>
        <div className="mb-2.5">
            <div className="text-sm font-normal text-[#848484]">Market Close</div>
            <div className="grid grid-cols-2 mb-2.5">
                <div className="">
                    <div className="text-3xl mb-1.5 text-[#333]">${Price}</div>
                    <div className="text-xl font-light text-[#333] leading-8">Volume % Chg:</div>
                    <div className="text-lg leading-8">
                        <span className="font-bold">Buy Point: </span>
                        <span>{BuyPoint}</span>
                    </div>
                    <div className="text-lg leading-8">
                        <span className="font-bold">Position Size: </span>
                        <span>{PositionSize}</span>
                    </div>
                </div>
                <div>
                    <div className="text-xl font-light">${PriceChange} ({PricePercentChange}%)</div>
                    <div className="text-xl font-light">{VolumePercentChange}</div>
                    <div className="text-lg leading-8">
                        <span className="font-bold">Buy Range: </span>
                        <span>{BuyRangeFrom} - {BuyRangeTo}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="mb-2.5">
            <b className="text-lg">Current Action: </b>{CurrentAction}
        </div>
        <div className="mb-2.5">
            <b className="text-lg">Leaderboard Analysis:</b>{LeaderboardAnalysis}
        </div>
        <div className="mb-2.5">
            <b className="text-lg">Backstory: </b>{BackStory}
        </div>
        <div className="mb-2.5">
            <div className="mb-[11px]">
                <b className="text-lg">Recent Articles: </b>
            </div>
            <div className="text-primary text-lg leading-5/[22px]"
                dangerouslySetInnerHTML={{ __html: RecentArticle }}></div>
        </div>
    </div>)
}

export default SymbolDetail;