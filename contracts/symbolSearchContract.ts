import { ApiResponse } from "@/contracts/apiResponse"

export class SearchedSymbolContract {
	Symbol: string;
	CompanyName: string;
	Url: string;
	IsIndex: boolean;
	IsLineChart: boolean;

  constructor(initializer?: any) {
    this.Symbol = initializer?.Symbol;
    this.CompanyName = initializer?.CompanyName;
    this.Url = initializer?.Url;
    this.IsIndex = initializer?.IsIndex;
    this.IsLineChart = initializer?.IsLineChart;
  }
}

export class SymbolSearchResponse implements ApiResponse {
  ok: boolean;
  message: string;
  data: SearchedSymbolContract[];

  constructor(initializer?: any) {
    this.ok = initializer?.ok
    this.message = initializer?.message
    this.data = initializer?.data.map((i: any) => new SearchedSymbolContract(i))
  }
}
