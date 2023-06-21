import { ArticleContract, PositionSummaryContract, WholelistsContract } from "@/contracts"

async function getArticle(): Promise<ArticleContract> {
    const articleData: any = require("@/server/mockData/article-mock.json");
    const article: ArticleContract = new ArticleContract(articleData);
    return Promise.resolve(article);
}

async function getPositionSummary(): Promise<PositionSummaryContract[]> {
    const positionSummaryData: any[] = require("@/server/mockData/position-summary-mock.json");
    const positionSummary: PositionSummaryContract[] = positionSummaryData.map(item => {
        return new PositionSummaryContract(item);
    });
    return Promise.resolve(positionSummary);
}

async function getWholelists(): Promise<WholelistsContract[]> {
    const wholelistsData: {
        ListName: string,
        Items: WholelistsContract[]
    } = require("@/server/mockData/wholelists-mock.json");
    return Promise.resolve(wholelistsData.Items);
}

export {
    getArticle,
    getPositionSummary,
    getWholelists
}