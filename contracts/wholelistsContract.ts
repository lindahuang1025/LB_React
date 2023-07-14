export class WholelistsContract {
    Symbol: string
    CompanyName: string
    Price: number
    PriceChange: number
    PricePercentChange: number
    Volume: number
    VolumePercentChange: number
    Header: string
    Sector: string
    SectorRank: number
    SymbolOrder: number
    Story: string
    UpdateDate: string
    NearBuyPoint: boolean
    BuyPoint: string
    BuyRangeFrom: string
    BuyRangeTo: string
    CurrentAction: string
    LeaderboardAnalysis: string
    BackStory: string
    IsInLeaderboard: boolean
    RecentArticle: string
    PreviousClose: number
    CheckupUrl: string
    ListName: string
    PositionSize: string
  
  constructor(initializer?: any) {
    this.Symbol = initializer?.Symbol;
    this.CompanyName = initializer?.CompanyName;
    this.Price = initializer?.Price;
    this.PriceChange = initializer?.PriceChange;
    this.PricePercentChange = initializer?.PricePercentChange;
    this.Volume = initializer?.Volume;
    this.VolumePercentChange = initializer?.VolumePercentChange;
    this.Header = initializer?.Header;
    this.Sector = initializer?.Sector;
    this.SectorRank = initializer?.SectorRank;
    this.SymbolOrder = initializer?.SymbolOrder;
    this.Story = initializer?.Story;
    this.UpdateDate = initializer?.UpdateDate;
    this.NearBuyPoint = initializer?.NearBuyPoint;
    this.BuyPoint = initializer?.BuyPoint;
    this.BuyRangeFrom = initializer?.BuyRangeFrom;
    this.BuyRangeTo = initializer?.BuyRangeTo;
    this.CurrentAction = initializer?.CurrentAction;
    this.LeaderboardAnalysis = initializer?.LeaderboardAnalysis;
    this.BackStory = initializer?.BackStory;
    this.IsInLeaderboard = initializer?.IsInLeaderboard;
    this.RecentArticle = initializer?.RecentArticle;
    this.PreviousClose = initializer?.PreviousClose;
    this.CheckupUrl = initializer?.CheckupUrl;
    this.ListName = initializer?.ListName;
    this.PositionSize = initializer?.PositionSize;
  }
}

export class WholelistsGroupContract {
    header: string
    items: WholelistsContract[]

    constructor(initializer?: any) {
      this.header = initializer?.header;
      this.items = initializer?.items;
    }
}