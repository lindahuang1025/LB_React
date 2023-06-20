import articleDataType from "../dataType/articleDataType";

const Article = ({article}: {article: articleDataType}) =>{
    return (
    <div className="bg-white border border-[#ddd] mt-[70px]">
        <div className="bg-primary text-white text-2xl px-4 py-5">
            {article.Headline}
        </div>
        <div className="p-5">
            <div className="mb-[23px] ">
                <span className="text-lg font-normal text-[333] italic">
                    Updated 06/15/2023 08:01 AM ET
                </span>
            </div>
            <div className="space-y-[23px]" 
                dangerouslySetInnerHTML={{ __html: article.ArticleContent }}>
            </div>
        </div>
    </div>)
}

export default Article;