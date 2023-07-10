import { ArticleContract } from "@/contracts"
import { MarketSymbol, marketContract } from "@/contracts/marketContract";

async function getMarketArticle(): Promise<ArticleContract> {
    const articleData: any = require("@/server/mockData/thebigpicture.json");
    const article: ArticleContract = new ArticleContract(articleData);
    return Promise.resolve(article);
}

async function getIntradayArticle(): Promise<ArticleContract> {
    const articleData: any = require("@/server/mockData/intradayarticles.json");
    const article: ArticleContract = new ArticleContract(articleData);
    return Promise.resolve(article);
}

async function getIdaySymbols(): Promise<MarketSymbol> {
    const data: any = require("@/server/mockData/idaysymbols.json");
    const symbol: MarketSymbol = new MarketSymbol(data);
    return Promise.resolve(symbol);
}

export {
    getMarketArticle,
    getIntradayArticle,
    getIdaySymbols
}