import React, { FC, useMemo } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { IArticle } from './ArticlePreview'
import UserAvatar from '../../../navigation/NavBar/user/UserAvatar'
import { UserActionType, UserState } from '../../../../types/user'
import './articlePreview.css'
import { ArticlesState, ArticleState } from '../../../../types/articles'
import { getToken } from '../../../../utils/queryParams/token'
import { serverUrl } from '../../../../assets/urls/urls'
import { getRequest } from '../../../../utils/fetch/basicFetch'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

interface IArticlePreviewHeader {
    article: ArticleState
}

const ArticlePreviewHat: FC<IArticlePreviewHeader> = ({ article }) => {
    const author: UserState = useTypedSelector((state) => state.user)

    const dispatch = useDispatch()
    useMemo(() => {
        getRequest<UserState>('users/' + article.creatorId)
            .then((data) => {
                dispatch({ type: UserActionType.SET_USER, payload: data })
            })
            .catch(function (error: any) {
                console.warn(error)
            })
    }, [])

    const typographyStyle = {
        fontFamily: 'OpenSans',
        marginTop: '12px',
        marginLeft: '4px',
    }

    const createdDate = new Date(article.created)

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            display="flex"
            sx={{
                paddingLeft: '10px',
                paddingRight: '10px',
                marginBottom: '8px',
            }}
        >
            <Box>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    textAlign="center"
                >
                    <img id="author-avatar" alt="Avatar" src={author.avatar} />
                    <Typography sx={typographyStyle}>
                        {author.username}
                    </Typography>
                </Grid>
            </Box>
            <Typography sx={typographyStyle}>
                {createdDate.toDateString()}
            </Typography>
        </Grid>
    )
}

export default ArticlePreviewHat
