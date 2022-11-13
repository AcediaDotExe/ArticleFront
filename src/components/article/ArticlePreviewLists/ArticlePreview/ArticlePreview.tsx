import React, {FC} from 'react'
import {Grid, Typography} from "@mui/material";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import {Link} from "react-router-dom";
import ArticlePreviewHeader from "./ArticlePreviewHeader";

export type IArticle ={
    id: number,
    authorId: number,
    date: string,
    header: string;
    text: string;
    feedback: IFeedback;
}

type IFeedback = {
    likes: number;
    dislikes: number;
    views: number;
}

const ArticlePreview: FC<IArticle> = (article) => {
    return <Grid>
        <ArticlePreviewHeader article={article}></ArticlePreviewHeader>
        <Typography>{article.header}</Typography>
        <Link to={"/article-reading:" + article.id}>
            <ReadMoreIcon/>
        </Link>
    </Grid>
}

export default ArticlePreview
