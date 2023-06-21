class MarketIndexContract {
  Symbol: string;
  IndexValueChange: string;
  IndexValue: string;
  IndexAbbr: string;
  SymbIndexNameol: string;
  IndexValuePctChange: string;
  IndexVolume: string;
  IndexVolumeChange: string;
  IndexVolumePctChange: string;
  IsUp: boolean;
  Flag: string;
  ChartUrl: string;
  ForVolume: boolean;
  OrderNum: string;

  constructor(initializer?: any) {
    this.Symbol = initializer?.Symbol;
    this.IndexValueChange = initializer?.IndexValueChange;
    this.IndexValue = initializer?.IndexValue;
    this.IndexAbbr = initializer?.IndexAbbr;
    this.SymbIndexNameol = initializer?.SymbIndexNameol;
    this.IndexValuePctChange = initializer?.IndexValuePctChange;
    this.IndexVolume = initializer?.IndexVolume;
    this.IndexVolumeChange = initializer?.IndexVolumeChange;
    this.IndexVolumePctChange = initializer?.IndexVolumePctChange;
    this.IsUp = initializer?.IsUp;
    this.Flag = initializer?.Flag;
    this.ChartUrl = initializer?.ChartUrl;
    this.ForVolume = initializer?.ForVolume;
    this.OrderNum = initializer?.OrderNum;
  }
}

class EtfIndex {
  Symbol: string;
  Name: string;
  Price: string;
  PriceChange: string;
  PricePctChange: string;
  ClosePrice: string;
  ChartUrl: string;

  constructor(initializer?: any) {
    this.Symbol = initializer?.Symbol;
    this.Name = initializer?.Name;
    this.Price = initializer?.Price;
    this.PriceChange = initializer?.PriceChange;
    this.PricePctChange = initializer?.PricePctChange;
    this.ClosePrice = initializer?.ClosePrice;
    this.ChartUrl = initializer?.ChartUrl;
  }
}

enum MarketStatus {
  AFTERHOURS = "AFTER HOURS",
}

export class MarketIndicesContract {
  marketIndices: MarketIndexContract[];
  etfIndices: EtfIndex[];
  UpdateTime: string;
  TimeStamp: string;
  MarketStatus: string;
  CurrentMarketStatusTypeId: number;
  CurrentMarketStatus: MarketStatus;

  constructor(initializer?: any) {
    this.marketIndices = initializer?.marketIndices.map((i: any) => new MarketIndexContract(i)) ?? [];
    this.etfIndices = initializer?.etfIndices.map((i: any) => new EtfIndex(i)) ?? [];
    this.UpdateTime = initializer?.UpdateTime;
    this.TimeStamp = initializer?.TimeStamp;
    this.MarketStatus = initializer?.MarketStatus;
    this.CurrentMarketStatusTypeId = initializer?.CurrentMarketStatusTypeId;
    this.CurrentMarketStatus = initializer?.CurrentMarketStatus;
  }
}

