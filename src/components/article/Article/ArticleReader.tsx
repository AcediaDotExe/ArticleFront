import React, {FC} from 'react'
import {ArticleState} from '../../../types/articles';

interface IArticleReader{
    article: ArticleState
}


const ArticleReader: FC<IArticleReader> = ({article}) => {

    return <div>{article ? article.title : "404 Not Found!"}</div>
}

export default ArticleReader
