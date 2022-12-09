import React, { FC, useEffect, useMemo } from 'react'
import ArticlePreview, { IArticle } from './ArticlePreview/ArticlePreview'
import { getToken } from '../../../utils/queryParams/token'
import { serverUrl } from '../../../assets/urls/urls'
import { UserState } from '../../../types/user'
import {
    ArticlesActionType,
    ArticlesState,
    IArticleList,
} from '../../../types/articles'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { Grid } from '@mui/material'

const ArticlePreviewList: FC = () => {
    const articlesList: IArticle[] = useTypedSelector(
        (state) => state.articles.articles
    )
    const dispatch = useDispatch()

    useMemo(() => {
        void getArticles().then((data) => {
            dispatch({
                type: ArticlesActionType.SET_ARTICLES,
                payload: data.articles,
            })
        })
    }, [])

    return (
        <Grid container direction="row" justifyContent="center">
            {articlesList != null
                ? articlesList.map((article) => (
                      <ArticlePreview
                          article={article}
                          key={article.id}
                          id={article.id}
                      />
                  ))
                : null}
        </Grid>
    )

    async function getArticles(): Promise<ArticlesState> {
        // const bearerToken = getToken()
        return await fetch(serverUrl + 'articles', {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // Authorization: 'Bearer ' + bearerToken,
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

export default ArticlePreviewList
