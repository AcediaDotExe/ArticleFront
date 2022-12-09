import React, {FC, useEffect, useMemo} from 'react'
import {Card, Divider, Grid, Typography} from '@mui/material'
import {ArticleState, IArticlePreview} from '../../../../types/articles'
import ArticlePreviewHat from './ArticlePreviewHat';
import './articlePreview.css'

export interface IArticlePreview {
    id?: number
    article: ArticleState
}

const ArticlePreview: FC<IArticlePreview> = ({ article }) => {

    const headerStyle = {
        fontSize: '25px',
        textAlign: 'center',
        fontFamily: 'Sono',
        marginTop: '15px',
        marginBottom: '15px',

    }
    return (
        <Card sx={{ minWidth: '80%', maxWidth: '80%', marginTop: '30px', borderRadius: '15px'}} className="conic">
            <ArticlePreviewHat article={article}/>
            <Divider/>
            <Typography
                sx={headerStyle}>{article.title}</Typography>
            <img id='preview-image' alt='Preview image' src={article.previewImage}/>
        </Card>
    )

}

export default ArticlePreview
