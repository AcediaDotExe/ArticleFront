import React, { FC, useEffect, useMemo, useRef } from 'react'
import Layout from '../../components/layout/layout/Layout'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import {
    ArticlesActionType,
    ArticlesState,
    ArticleState,
} from '../../types/articles'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { getToken } from '../../utils/queryParams/token'
import { serverUrl } from '../../assets/urls/urls'
import { UserState } from '../../types/user'
import ArticleReader from '../../components/article/Article/ArticleReader'

const ArticleReading: FC = () => {
    const article: ArticleState = useTypedSelector(
        (state) => state.articles.article
    ) as ArticleState

    const { currentId } = useParams()

    const dispatch = useDispatch()
    useMemo(() => {
        console.log(serverUrl + 'articles/' + String(currentId))
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
        return await fetch(serverUrl + 'articles/' + String(currentId), {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }),
        })
            .then(async (response) => await response.json())
            .then((data: UserState) => {
                return data
            })
            .catch(function (error: any) {
                console.warn(error)
            })
            .then()
    }
}

export default ArticleReading
