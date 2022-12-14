import React, { FC, useMemo } from 'react'
import Layout from '../../components/layout/layout/Layout'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import {
    ArticlesActionType,
    ArticleState,
} from '../../types/articles'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import ArticleReader from '../../components/article/Article/ArticleReader'
import { getRequest } from '../../utils/fetch/basicFetch';

const ArticleReading: FC = () => {
    const article: ArticleState = useTypedSelector(
        (state) => state.articles.article
    ) as ArticleState

    const { currentId } = useParams()

    const dispatch = useDispatch()
    useMemo(() => {
        console.log('articles/' + String(currentId))
        void getArticle().then((article) => {
            console.log(article)

            dispatch({ type: ArticlesActionType.SET_ARTICLE, payload: article })
        })
    }, [])

    return (
        <Layout>
            <ArticleReader article={article} />
        </Layout>
    )

    async function getArticle(): Promise<ArticleState> {
        return await getRequest('articles/' + String(currentId))
    }
}

export default ArticleReading
