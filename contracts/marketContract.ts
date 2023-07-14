export interface marketContract {
    header: string
    article: string
    marketInfos: Array<MarketInfoItem>
    upVolume: Array<MarketVolume>
    downVolume: Array<MarketVolume>
    storeToWatch:Array<MarketVolume>

}
export interface MarketInfoItem {
  title : string
  value:string
}

export interface MarketVolume {
  title : string
  link:string
  value:string
}
export class MarketSymbol{
  SymbolName:string
  CompanyName:string
  QuoteUrl:string
  constructor(data?:any){
    this.SymbolName = data.SymbolName;
    this.CompanyName =data.CompanyName;
    this.QuoteUrl =data.QuoteUrl;
  }
}
export interface Settings{
  showBanner:Boolean
  bannerText:string
  showSymbolGroup:Boolean
}

export enum MarketType {
  BigPicture,
  MarketToday,
  MarketStrategy,
  MarketSchool
}
