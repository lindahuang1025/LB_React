const SymbolDetail = ({wholeItem}) =>{
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
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>)
}

export default SymbolDetail;