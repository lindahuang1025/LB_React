export enum ApiRequestState {
  PENDING   = "PENDING",
  SUCCESS   = "SUCCESS",
  ERROR     = "ERROR",
}

export enum SelectLeader {
  article         = "Article",
  positionSummary = "Position Summary",
  wholeList       = "WholsList",
}

export enum Routes {
  Root            = "",
  Leaders         = "leaders",
  Myalert         = "myalert",
  MyStockLists    = "mystocklists",
  RecentAction    = "recentAction",
  SectorLeaders   = "sectorLeaders",
  Stockspotlight  = "stockspotlight",
  Top10           = "top10",
  TheBigPicture   = "thebigpicture",
}
