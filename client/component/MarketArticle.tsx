import { ArticleContract } from "@/contracts";

const MarketArticle = ({article}: {article: ArticleContract}) =>{
    return (
    <div className="bg-white border border-[#ddd] mt-[29px] tablet:mt-[70px]">
        <div className="text-[#222222] px-4 pt-5 text-[22px] font-bold">
            {article.Headline}
        </div>
        <p className="px-4 text-[12px] text-[#222] font-medium">BY MICHAEL LARKIN, INVESTOR'S BUSINESS DAILY</p>
        <div className="p-5">
            <div className="mb-[23px]">
                <span className="text-lg font-normal text-[#333] italic">
                    Updated 06/15/2023 08:01 AM ET
                </span>
            </div>
            <div className="space-y-[23px]" 
                dangerouslySetInnerHTML={{ __html: article.ArticleContent }}>
            </div>
        </div>
    </div>)
}

export default MarketArticle