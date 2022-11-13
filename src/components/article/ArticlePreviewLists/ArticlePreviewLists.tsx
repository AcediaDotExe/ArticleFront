import React from 'react'
import ArticlePreview, {IArticle} from "./ArticlePreview/ArticlePreview";
const articles: IArticle = require("/assets/articleTemplateData/article.json");

type IArticleList = {
    articles: IArticle[];
}

const ArticlePreviewLists = () => {
    const listArticle = articles.map
    return <div>
        {Object.keys(articles).map((key, i) => (
            <p key={i}>
                <ArticlePreview article={articles[key] as IArticle}/>
            </p>
        ))}
    </div>
}

export default ArticlePreviewLists
