// import { MarketIndicesContract, SearchedSymbolContract } from "@/contracts"
import { MarketIndicesDto, SearchedSymbolDto } from "@/contracts/dtos"

async function getMarketIndices(): Promise<MarketIndicesDto> {
  const marketIndicesData: any = require("@/server/mockData/market-indices.json")
  const marketIndices = new MarketIndicesDto(marketIndicesData)
  return Promise.resolve(marketIndices)
}

async function getSearchedSymbols(): Promise<SearchedSymbolDto[]> {
  const searchedSymbolsData: any[] = require("@/server/mockData/searched-symbols.json")
  const searchedSymbol = searchedSymbolsData.map((i: any) => new SearchedSymbolDto(i))
  return Promise.resolve(searchedSymbol)
}

export {
  getMarketIndices,
  getSearchedSymbols,
}