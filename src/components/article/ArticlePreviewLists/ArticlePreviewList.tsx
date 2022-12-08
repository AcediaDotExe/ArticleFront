import React, { FC, useEffect, useMemo } from 'react'
import ArticlePreview, { IArticle } from './ArticlePreview/ArticlePreview'
import { getToken } from '../../../utils/queryParams/token'
import { serverUrl } from '../../../assets/urls/urls'
import { UserState } from '../../../types/user'
import { ArticlesActionType, IArticleList } from '../../../types/articles'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'

const ArticlePreviewList: FC = () => {
    const articles: IArticle[] = useTypedSelector(
        (state) => state.articles.articles
    )
    const dispatch = useDispatch()

    useMemo(() => {
        void getArticles().then((articles) => {
            dispatch({
                type: ArticlesActionType.SET_ARTICLES,
                payload: articles,
            })
        })
    }, [])

    async function getArticles(): Promise<IArticleList> {
        const bearerToken = getToken()
        return await fetch(serverUrl + 'articles', {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + bearerToken,
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

    return (
        <div>
            {articles.map((article) => (
                <ArticlePreview
                    article={article}
                    key={article.id}
                    id={article.id}
                />
            ))}
        </div>
    )
}

export default ArticlePreviewList
