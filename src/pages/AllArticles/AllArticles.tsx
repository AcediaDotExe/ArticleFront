import React, { FC } from 'react'
import Layout from '../../components/layout/layout/Layout'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import ArticlePreviewList from '../../components/article/ArticlePreviewLists/ArticlePreviewList'

const AllArticles: FC = () => {
    return (
        <Layout>
            <ArticlePreviewList anchor={'main-page'} />
        </Layout>
    )
}

export default AllArticles
