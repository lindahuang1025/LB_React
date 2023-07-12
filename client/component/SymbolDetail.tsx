import { LeadersImage, GreenArrowImage, RedArrowImage } from "@/client/config/imgConfig";
import { WholelistsContract } from "@/contracts";
import Image from 'next/image';
import numberFormat from "@/client/utils/numberFormat";
import { Settings } from "@/contracts/marketContract";
import addImag from "@/public/img/Add.png";
import chartImag from "@/public/img/Chart.png";
import articleImag from "@/public/img/ArticleArchives.png";
import alertImag from "@/public/img/Alerts.png";
import { Fragment } from "react";

const SymbolDetail = ({ wholeItem, settings, type }: { wholeItem: WholelistsContract, settings: Settings, type: string }) => {
  let { Symbol,
    CompanyName,
    Price,
    PriceChange,
    PricePercentChange,
    VolumePercentChange,
    BuyPoint,
    Volume,
    BuyRangeFrom,
    BuyRangeTo,
    PositionSize,
    CurrentAction,
    LeaderboardAnalysis,
    BackStory,
    RecentArticle
  } = wholeItem;
  let priceChgFormat = numberFormat(PriceChange),
    pricePctChgFormat = numberFormat(PricePercentChange),
    volumePctChgFormat = numberFormat(VolumePercentChange),
    priceClass = priceChgFormat.isPositive ? "text-primary" : "text-red",
    volumeClass = volumePctChgFormat.isPositive ? "text-primary" : "text-red";
  const headerBorderClass = settings.showBanner ? "" : "border border-[#ddd] border-t-8 border-t-primary";
  return (<Fragment >
    {type == "spotlight" && <div className="w-full">
      <div className="bg-primary pl-5 h-[72px] ml-3 pt-[10px]  text-white">
        <div className="text-[22px]">
          <span className="text-xl/[26px] font-bold">{Symbol}</span>
          <span className="text-xl font-nomal ml-[35px]">{CompanyName} (NASDAQ)</span><span className="text-[14px] float-right font-bold mr-[10px]">Market Close</span>
          <div className="text-[14px]">
            <span>AFTER HOURS 07:31 PM ET 7/11/2023$95.620.50(0.53%)Vol: 11.8 K </span>
            <div className="text-[14px] float-right mr-[10px]">
              <span className="font-bold text-[20px] mr-[5px]">${Price}</span><span className="text-[18px]">{PriceChange}({PricePercentChange}%)</span>
            </div>
          </div>
        </div>
      </div>
      <div className={"shadow-md rounded bg-white  px-5 pt-[18px] pb-[15px] ml-2 " + headerBorderClass}>
        <div className="flex justify-between">
          <div>
            <h3 className="text-[#222] mb-4 leading-tight">
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
        </div>
        <div className="flex flex-col tablet:flex-row w-full border border-[#ddd] border-1 p-3">
          <div className="w-full tablet:w-1/2 tablet:ml-auto">
            <div className="text-[#1b7600] text-[20px] bg-white text-left  grow bg-[#31a700] font-black">
              Composite Rating
            </div>
          </div>
          <div className="w-full tablet:w-1/2 tablet:mr-auto tablet:ml-[45px]">
            <div className="text-[#1b7600] text-[20px] bg-white text-right grow bg-[#31a700] font-bold">
              99
            </div>
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row min-w-full border border-[#ddd] border-1 p-3">
          <div className="w-full tablet:w-1/2 tablet:ml-auto">
            <div className="text-[#333] font-light text-[20px] bg-white text-left grow bg-[#31a700]">
              Earnings Per Share Rating
            </div>
          </div>
          <div className="w-full tablet:w-1/2 tablet:mr-auto tablet:ml-[45px]">
            <div className="text-[#333] font-bold text-[20px]  bg-white  text-right  grow bg-[#31a700]">
              98
            </div>
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row min-w-full border border-[#ddd] border-1 p-3">
          <div className="w-full tablet:w-1/2 tablet:ml-auto">
            <div className="text-[#333] font-light text-[20px]  bg-white text-left  grow bg-[#31a700]">
              Relative Strength Rating
            </div>
          </div>
          <div className="w-full tablet:w-1/2 tablet:mr-auto tablet:ml-[45px]">
            <div className="text-[#333] font-bold text-[20px]  bg-white  text-right  grow bg-[#31a700]">
              91
            </div>
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row min-w-full border border-[#ddd] border-1 p-3">
          <div className="w-full tablet:w-1/2 tablet:ml-auto">
            <div className="text-[#333] font-light text-[20px]  bg-white text-left  grow bg-[#31a700]">
              Industry Group Relative Strength
            </div>
          </div>
          <div className="w-full tablet:w-1/2 tablet:mr-auto tablet:ml-[45px]">
            <div className="text-[#333] font-bold text-[20px]  bg-white  text-right  grow bg-[#31a700]">
              A+
            </div>
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row min-w-full border border-[#ddd] border-1 p-3">
          <div className="w-full tablet:w-1/2 tablet:ml-auto">
            <div className="text-[#333] font-light text-[20px]  bg-white text-left  grow bg-[#31a700]">
              SMR Rating
            </div>
          </div>
          <div className="w-full tablet:w-1/2 tablet:mr-auto tablet:ml-[45px]">
            <div className="text-[#333] font-bold text-[20px]  bg-white  text-right  grow bg-[#31a700]">
              A
            </div>
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row min-w-full border border-[#ddd] border-1 p-3">
          <div className="w-full tablet:w-1/2 tablet:ml-auto">
            <div className="text-[#333] font-light text-[20px]  bg-white text-left  grow bg-[#31a700]">
              Accumulation/Distribution Rating
            </div>
          </div>
          <div className="w-full tablet:w-1/2 tablet:mr-auto tablet:ml-[45px]">
            <div className="text-[#333] font-bold text-[20px]  bg-white  text-right  grow bg-[#31a700]">
              B+
            </div>
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row min-w-full border border-[#ddd] border-1 p-3">
          <div className="w-full tablet:w-1/2 tablet:ml-auto">
            <div className="text-[#333] font-light text-[20px]  bg-white text-left  grow bg-[#31a700]">
              Volume
            </div>
          </div>
          <div className="w-full tablet:w-1/2 tablet:mr-auto tablet:ml-[45px]">
            <div className="text-[#333] font-bold text-[20px]  bg-white  text-right  grow bg-[#31a700]">
              {Volume}
            </div>
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row min-w-full border border-[#ddd] border-1 p-3">
          <div className="w-full tablet:w-1/2 tablet:ml-auto">
            <div className="text-[#333] font-light text-[20px]  bg-white text-left  grow bg-[#31a700]">
              Sponsorship Rating
            </div>
          </div>
          <div className="w-full tablet:w-1/2 tablet:mr-auto tablet:ml-[45px]">
            <div className="text-[#333] font-bold text-[20px]  bg-white  text-right  grow bg-[#31a700]">
              C
            </div>
          </div>
        </div>
        <div className="mt-3 ml-[40%]">
          <div className="flex flex-row text-center">
            <Image height="48" width="48" alt="" src={chartImag} />
            <Image height="48" width="48" alt="" src={addImag} />
            <Image height="48" width="48" alt="" src={articleImag} />
            <Image height="48" width="48" alt="" src={alertImag} />
          </div>
        </div>
      </div>
    </div>
    }
    {type != "spotlight" && <div> {settings.showBanner && <div className="bg-primary ml-[8px] h-[52px] pt-[10px]  text-white">
      <div className="bg-white h-[30px] w-[30px] rounded-[50%] text-center text-[#31a700] px-[9px] py-[1px] font-black inline ml-[15px] mr-[10px]">1</div>
      <span className="text-[22px]">{settings.bannerText}</span>
    </div>}
      <div className={"shadow-md rounded bg-white  px-5 pt-[18px] pb-[15px] ml-2 " + headerBorderClass}>
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
                <span>${BuyPoint}</span>
              </div>
              <div className="text-lg leading-8">
                <span className="font-bold">Position Size: </span>
                <span>{PositionSize}</span>
              </div>
            </div>
            <div>
              <div className={"text-xl font-light leading-8 flex " + priceClass}>
                <Image
                  width={14}
                  height={14}
                  src={priceChgFormat.isPositive ? GreenArrowImage.src : RedArrowImage.src}
                  alt={priceChgFormat.isPositive ? GreenArrowImage.alt : RedArrowImage.alt} />
                <span className="pl-2.5">${priceChgFormat.number} ({pricePctChgFormat.number}%)</span>
              </div>
              <div className="text-xl font-light flex">
                <Image
                  width={14}
                  height={14}
                  src={volumePctChgFormat.isPositive ? GreenArrowImage.src : RedArrowImage.src}
                  alt={volumePctChgFormat.isPositive ? GreenArrowImage.alt : RedArrowImage.alt} />
                <span className={"leading-8 pl-2.5 " + volumeClass}>{volumePctChgFormat.number}%</span>
              </div>
              <div className="text-lg leading-8">
                <span className="font-bold">Buy Range: </span>
                <span>${BuyRangeFrom} - ${BuyRangeTo}</span>
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
      </div>
    </div>
    }
  </Fragment>)
}

export default SymbolDetail;