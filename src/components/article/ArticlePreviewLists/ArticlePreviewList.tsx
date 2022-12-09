import React, { FC, useMemo } from 'react'
import ArticlePreview, { IArticle } from './ArticlePreview/ArticlePreview'
import { ArticlesActionType, ArticlesState } from '../../../types/articles'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { Grid } from '@mui/material'
import { getRequest } from '../../../utils/fetch/basicFetch'

interface IArticlePreviewList {
    anchor: string
}

const ArticlePreviewList: FC<IArticlePreviewList> = ({ anchor }) => {
    const articlesList: IArticle[] = useTypedSelector(
        (state) => state.articles.articles
    )
    const currentUserId: string = useTypedSelector(
        (state) => state.user.id
    ) as string
    const dispatch = useDispatch()

    useMemo(() => {
        if (anchor === 'main-page') {
            void getRequest<ArticlesState>('articles').then((data) => {
                dispatch({
                    type: ArticlesActionType.SET_ARTICLES,
                    payload: data.articles,
                })
            })
        } else {
            void getRequest<ArticlesState>(
                'articles/?creatorId=' + currentUserId
            ).then((data) => {
                dispatch({
                    type: ArticlesActionType.SET_ARTICLES,
                    payload: data.articles,
                })
            })
        }
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
}

export default ArticlePreviewList
