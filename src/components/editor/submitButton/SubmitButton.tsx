import React, {FC} from 'react';
import {Button, Typography} from '@mui/material';
import {ArticleType} from '../../../types/article';
import {getToken} from '../../../utils/queryParams/token';



const SubmitButton:FC<ArticleType> = ({title, previewImage, content }) => {
    async function submitArticle() {
        const bearerToken = String(getToken())
        await fetch('https://comgrid.ru/article-api/users/', {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + bearerToken,
            }),
        })
    }
    return (
        <Button variant="outlined" color="secondary" onClick={submitArticle}
        >
            <Typography fontFamily="Sono">
                Submit
            </Typography>
        </Button>
    );
};

export default SubmitButton;