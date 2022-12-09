import React, { FC } from 'react'
import {Box, Grid, Typography} from '@mui/material'
import { IArticle } from './ArticlePreview'
import UserAvatar from '../../../navigation/NavBar/user/UserAvatar';
import {UserState} from '../../../../types/user';
import './articlePreview.css'

interface IArticlePreviewHeader{
    article: number
}

const ArticlePreviewHat: FC<IArticlePreviewHeader> = (article) => {

    const author: UserState = {
        id: '0',
        username: 'Username Usersurname',
        avatar: 'https://pbs.twimg.com/profile_images/1082020318523412480/E87sUSUc_400x400.jpg'
    }

    const typographyStyle = {
        fontFamily: 'Sono',
        marginTop: '12px',
        marginLeft: '4px'
    }

    return (
        <Grid
            container
            direction='row'
            justifyContent='space-between'
            display='flex'
            sx={{paddingLeft: '10px',
                paddingRight: '10px',
                marginBottom: '8px',
            }}
        >
            <Box>
                <Grid
                    container
                    direction='row'
                    justifyContent='flex-start'
                    textAlign='center'

                >
                <img id='author-avatar' alt="Avatar" src={author.avatar} />
                <Typography sx={typographyStyle}>{author.username}</Typography>
                </Grid>
            </Box>
            <Typography sx={typographyStyle}>11.12.2002 12:34:12 AM</Typography>
        </Grid>
    )
}

export default ArticlePreviewHat
