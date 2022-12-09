import React, { FC } from 'react'
import Layout from '../../components/layout/layout/Layout'
import ArticlePreviewList from '../../components/article/ArticlePreviewLists/ArticlePreviewList'

const MyArticles: FC = () => {
    return (
        <Layout>
            <ArticlePreviewList anchor={'my-articles'} />
        </Layout>
    )
}

export default MyArticles
