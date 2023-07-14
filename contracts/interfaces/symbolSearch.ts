import { ApiResponse } from "@/contracts/interfaces/apiResponse"

export interface SearchedSymbolInterface {
	Symbol: string;
	CompanyName: string;
	Url: string;
	IsIndex: boolean;
	IsLineChart: boolean;
}

export interface SymbolSearchResponseInterface extends ApiResponse {
  ok: boolean;
  message: string;
  data: SearchedSymbolInterface[];
}
