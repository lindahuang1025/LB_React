import articleDataType from "../dataType/articleDataType";

const Article = ({article}: {article: articleDataType}) =>{
    return (<div className="mt-9 bg-white">
        <div className="bg-primary text-white text-2xl px-4 py-5">
            {article.Headline}
        </div>
        <div>
            <span>Updated 06/15/2023 08:01 AM ET</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.ArticleContent }}>
        </div>
    </div>)
}

export default Article;