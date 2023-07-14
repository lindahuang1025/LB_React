import { ArticleContract } from "@/contracts";
import MarketArticle from "@/client/component/MarketArticle";
import { MarketType, marketContract } from "@/contracts/marketContract";

interface dataType {
  article: ArticleContract,
};

const TheBigPicture = (props: dataType) => {
  const { article } = props;

  return (
    <div className="container">
      <div className="flex flex-col tablet:flex-row min-w-full ">
        <div className="w-full tablet:w-1/3 tablet:ml-auto">
          <div className="text-xl/[26px] text-blue  leading-[68px]">BIG PICTURE</div>
          <div className="text-[30px] text-white  text-center px-5 py-2 h-[64px] grow bg-[#31a700] mb-[29px]">
            MARKET PULSE
          </div>
          <div className="text-[#222222] text-[30px] bg-white h-[510px]  text-center px-5 py-2 grow bg-[#31a700] border-[1px] border-[#67c500] py-[40px] px-[25px]">
            <p className="text-[20px] font-medium text-left">Friday’s action:</p>
            <p className="text-[18px] font-light text-left">Stocks end lower amid mixed jobs report</p>
            <p className="text-[20px] font-medium text-left mt-[22px]">Current outlook:</p>
            <p className="text-[18px] font-light text-left">Confirmed uptrend</p>
            <p className="text-[20px] font-medium text-left mt-[22px]">Distribution days:</p>
            <p className="text-[18px] font-light text-left">5 on S&P 500, 4 on Nasdaq</p>
            <p className="text-[20px] font-medium text-left mt-[22px]">Leaders up in volume:</p>
            <div className="flex flex-row">
              <div className="w-1/3 text-[18px] text-left font-normal">
                <a href="https://research.stage.investors.com/stock-quotes/nyse-tidewater-tdw.htm" className="text-[#2a8f00]">TDW</a>
              </div>
              <div className="w-2/3 text-[18px] font-light text-left">Tidewater</div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/3 text-[18px] text-left font-normal ">
                <a href="https://research.stage.investors.com/stock-quotes/nasdaq-opera-adr-opra.htm" className="text-[#2a8f00]">OPRA</a>
              </div>
              <div className="w-2/3 text-[18px] font-light text-left">Opera</div>
            </div>
            <p className="text-[20px] font-medium text-left mt-[22px]">Leaders down in volume:</p>
            <div className="flex flex-row">
              <div className="w-1/3 text-[18px] text-left font-normal">
                <a href="https://research.stage.investors.com/stock-quotes/nyse-novartis-adr-nvs.htm" className="text-[#2a8f00]">NVS</a>
              </div>
              <div className="w-2/3 text-[18px] font-light text-left">Novartis</div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/3 text-[18px] text-left font-normal ">
                <a href="https://research.stage.investors.com/stock-quotes/nasdaq-biogen-biib.htm" className="text-[#2a8f00]">BIIB</a>
              </div>
              <div className="w-2/3 text-[18px] font-light text-left">Biogen</div>
            </div>
          </div>
        </div>
        <div className="w-full tablet:w-2/3 tablet:mr-auto tablet:ml-[45px]">
          <MarketArticle article={article} />
        </div>
      </div>
    </div>
  );
}

export default TheBigPicture;