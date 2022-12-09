import React, { FC, useEffect, useMemo } from 'react'
import {
    Button,
    ButtonBase,
    Card,
    Divider,
    Grid,
    Typography,
} from '@mui/material'
import { ArticleState } from '../../../../types/articles'
import ArticlePreviewHat from './ArticlePreviewHat'
import './articlePreview.css'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { useNavigate } from 'react-router'

export interface IArticlePreview {
    id?: number
    article: ArticleState
}

const ArticlePreview: FC<IArticlePreview> = ({ article }) => {
    const isDarkMode: boolean = useTypedSelector(
        (state) => state.themes.isDarkMode
    )

    const cardClassName = isDarkMode
        ? 'conic conic-dark zoom appearance'
        : 'conic conic-light zoom'

    const conicClassName = 'conic-gradient ' + (isDarkMode
        ? 'conic-gradient-dark'
        : 'conic-gradient-light')

    const headerStyle = {
        fontSize: '25px',
        textAlign: 'center',
        fontFamily: 'Sono',
        marginTop: '15px',
        marginBottom: '15px',
    }

    const navigate = useNavigate()
    const routeChange = (): void => {
        navigate('/reading/' + String(article.id))
    }

    return (
        <Card
            sx={{
                minWidth: '80%',
                maxWidth: '80%',
                marginTop: '30px',
                borderRadius: '20px',
            }}
            className={cardClassName}
        >
            <div className={conicClassName}></div>
            <ButtonBase
                onClick={routeChange}
                sx={{ minWidth: '100%', maxWidth: '100%' }}
            >
                <Grid container direction="column" textAlign="center">
                    <ArticlePreviewHat article={article} />
                    <Divider />
                    <Typography sx={headerStyle}>{article.title}</Typography>
                    <img
                        id="preview-image"
                        alt="Preview image"
                        src={article.previewImage}
                    />
                </Grid>
            </ButtonBase>
        </Card>
    )
}

export default ArticlePreview
