import request from "./axios";
import { SymbolSearchResponse } from "@/contracts"

function getArticle() {
  return request({
    url: "/api/leaderboard/article",
    method: "GET"
  });
}

function getPositionSummary() {
    return request({
      url: "/api/leaderboard/PositionSummary",
      method: "GET"
    });
}

function getRelatedNews() {
    return request({
      url: "/api/leaderboard/relatednews",
      method: "GET"
    });
}

function getWholelists() {
    return request({
      url: "/api/leaderboard/wholelists",
      method: "GET"
    });
}

let searchSymbolsAbortController: AbortController
async function searchSymbols(searchText: string): Promise<SymbolSearchResponse> {
  if (searchSymbolsAbortController) {
    searchSymbolsAbortController.abort()
  }
  searchSymbolsAbortController = new AbortController()
  const responseData: any = await request({
    url: `/api/leaderboard/symbols?search=${searchText}`,
    method: "GET"
  })
  return new SymbolSearchResponse(responseData)
}

export {
    getArticle,
    getPositionSummary,
    getRelatedNews,
    getWholelists,
    searchSymbols
}