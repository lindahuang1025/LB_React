import { SearchedSymbolInterface, SymbolSearchResponseInterface } from "@/contracts/interfaces"

export class SearchedSymbolDto implements SearchedSymbolInterface {
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

export class SymbolSearchResponse implements SymbolSearchResponseInterface {
  ok: boolean;
  message: string;
  data: SearchedSymbolDto[];

  constructor(initializer?: any) {
    this.ok = initializer?.ok
    this.message = initializer?.message
    this.data = initializer?.data.map((i: any) => new SearchedSymbolDto(i))
  }
}
