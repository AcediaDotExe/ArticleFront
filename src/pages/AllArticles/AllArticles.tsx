import React from 'react'
import Layout from '../../components/layout/layout/Layout'
import {useTypedSelector} from "../../hooks/useTypedSelector";

const AllArticles = () => {
    const a = useTypedSelector(state => state.user.avatar)
    return (
        <Layout>
            <p> AllArticle {a}</p>
        </Layout>
    )
}

export default AllArticles
