import React, { FC } from 'react'
import { ArticleState } from '../../../types/articles'
import { Divider, Grid, Typography } from '@mui/material'
import ArticlePreviewHat from '../ArticlePreviewLists/ArticlePreview/ArticlePreviewHat'
import { Diversity1 } from '@mui/icons-material'
import parse from 'html-react-parser'

interface IArticleReader {
    article: ArticleState | undefined
}

const ArticleReader: FC<IArticleReader> = ({ article }) => {
    const typographyStyle = {
        fontFamily: 'Sono',
        maxWidth: '100%',
        overflowWrap: 'break-word',
    }

    return (
        <>
            {article !== undefined ? (
                <Grid container textAlign="center" direction="column">
                    <ArticlePreviewHat article={article} />
                    <Divider />
                    <Typography sx={typographyStyle} variant="h4">
                        {article.title}
                    </Typography>
                    <Divider />
                    <Typography sx={typographyStyle}>
                        {parse(article.content)}
                    </Typography>
                </Grid>
            ) : (
                '404 Not Found!'
            )}
        </>
    )
}

export default ArticleReader
