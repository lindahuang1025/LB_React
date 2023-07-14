import { MarketStatus } from "@/contracts/enumerates"
import { ApiResponse } from "@/contracts/interfaces/apiResponse"

export interface MarketIndexInterface {
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
}

export interface EtfIndexInterface {
  Symbol: string;
  Name: string;
  Price: string;
  PriceChange: string;
  PricePctChange: string;
  ClosePrice: string;
  ChartUrl: string;
}

export interface MarketIndicesInterface {
  marketIndices: MarketIndexInterface[];
  etfIndices: EtfIndexInterface[];
  UpdateTime: string;
  TimeStamp: string;
  MarketStatus: string;
  CurrentMarketStatusTypeId: number;
  CurrentMarketStatus: MarketStatus;
}

export interface MarketIndicesResponseInterface extends ApiResponse {
  ok: boolean;
  message: string;
  data: MarketIndicesInterface;
}
