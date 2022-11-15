import React, { FC } from 'react'
import { Grid, Typography } from '@mui/material'
import { IArticle } from './ArticlePreview'

const ArticlePreviewHeader: FC<IArticle> = (article) => {
    return (
        <Grid>
            <Typography>article.authorId</Typography>
            <Typography>article.date</Typography>
        </Grid>
    )
}

export default ArticlePreviewHeader
