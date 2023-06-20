import { LeadersImage } from "../config/imgConfig";
import wholelistsDataType from "../dataType/wholelistsDataType";

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
    return (<div className="border">
        <div>
            <div>
                <div>
                    <div>{Symbol}</div>
                    <div>{CompanyName} (NASDAQ)</div>
                </div>
                <div>
                    <div><b>AFTER HOURS 07:59 PM ET 6/16/2023</b></div>
                    <div>
                        <span>$721.97</span>
                        <span>0.09</span>
                        <span>0.01%</span>
                        <span>Volume: 44.1K</span>
                    </div>
                </div>
            </div>
            <div>
                <img src={LeadersImage.src} alt={LeadersImage.alt}></img>
            </div>
        </div>
        <div>
            <div>
                <div>Market Close</div>
                <div><b>${Price}</b></div>
                <div>Volume % Chg:</div>
                <div>
                    <b>Buy Point: </b>
                    <span>{BuyPoint}</span>
                </div>
                <div>
                    <b>Position Size: </b>
                    <span>{PositionSize}</span>
                </div>
            </div>
            <div>
                <div>${PriceChange} ({PricePercentChange}%)</div>
                <div>{VolumePercentChange}</div>
                <div>
                    <b>Buy Range: </b>
                    <span>{BuyRangeFrom} - {BuyRangeTo}</span>
                </div>
            </div>
        </div>
        <div>
            <b>Current Action:</b>{CurrentAction}
        </div>
        <div>
            <b>Leaderboard Analysis:</b>{LeaderboardAnalysis}
        </div>
        <div>
            <b>Backstory:</b>{BackStory}
        </div>
        <div>
            <div><b>Recent Articles:</b></div>
            <div dangerouslySetInnerHTML={{ __html: RecentArticle }}></div>
        </div>
    </div>)
}

export default SymbolDetail;