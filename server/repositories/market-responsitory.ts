import { ArticleContract, WholelistsContract } from "@/contracts"
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

async function getTop10Article(): Promise<ArticleContract> {
    const articleData: any = require("@/server/mockData/top10-article.json");
    const article: ArticleContract = new ArticleContract(articleData);
    return Promise.resolve(article);
}

async function getIdaySymbols(): Promise<MarketSymbol> {
    const data: any = require("@/server/mockData/idaysymbols.json");
    const symbol: MarketSymbol = new MarketSymbol(data);
    return Promise.resolve(symbol);
}

async function getStockList(): Promise<WholelistsContract[]> {
    const wholelistsData: {
        Items: any[]
    } = require("@/server/mockData/stockList.json");
    const wholelists: WholelistsContract[] = wholelistsData.Items.map(item => {
        return new WholelistsContract(item);
    });
    return Promise.resolve(wholelists);
}

export {
    getMarketArticle,
    getIntradayArticle,
    getIdaySymbols,
    getTop10Article,
    getStockList
}