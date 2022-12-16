import React, { FC } from 'react'
import '../ArticlePreviewLists/ArticlePreview/articlePreview.css'
import { ArticleState } from '../../../types/articles'
import { Divider, Grid, Typography } from '@mui/material'
import ArticlePreviewHat from '../ArticlePreviewLists/ArticlePreview/ArticlePreviewHat'
import parse from 'html-react-parser'

interface IArticleReader {
    article: ArticleState | undefined
}

const ArticleReader: FC<IArticleReader> = ({ article }) => {
    const typographyStyle = {
        fontFamily: 'Sono',
        maxWidth: '100%',
        overflowWrap: 'break-word',
        textAlign: 'left',
    }

    return (
        <>
            {article !== undefined && (
                <Grid container textAlign="center" direction="column">
                    <ArticlePreviewHat article={article} />
                    <Divider />
                    <Typography sx={typographyStyle} variant="h4">
                        {article.title}
                    </Typography>
                    <Divider />
                    <img
                      style={{
                          'width': 'auto',
                          'height': 'auto',
                          'max-height': '60%',
                          'max-width': '100%',
                    }}
                      id="preview-image"
                      alt="Preview image"
                      src={article.previewImage}
                    />
                    <Divider />
                    <Typography sx={typographyStyle}>
                        {parse(article.content ?? '')}
                    </Typography>
                </Grid>
            )}
        </>
    )
}

export default ArticleReader
