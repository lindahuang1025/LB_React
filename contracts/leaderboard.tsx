import { MarketIndices } from "@/contracts/market-index"

export enum ApiRequestState {
  PENDING   = "PENDING",
  SUCCESS   = "SUCCESS",
  ERROR     = "ERROR",
}

export interface ApiResponse {
  ok: boolean;
  message: string;
  data: any;
}

export interface HeaderProps {
  marketIndices: MarketIndices;
}
