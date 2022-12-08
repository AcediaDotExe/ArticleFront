import React, { FC, useEffect } from 'react'
import { Grid, Typography } from '@mui/material'
import { IArticlePreview } from '../../../../types/articles'

const ArticlePreview: FC<IArticlePreview> = ({ article }) => {
    useEffect(() => {
        console.log(article.creatorId)
    })
    return <Typography>{article.title}</Typography>
}

export default ArticlePreview
