import React, { useMemo } from 'react'
import { Route, Routes } from 'react-router'
import {
    AllArticles,
    ArticleEdit,
    ArticleReading,
    ArticleStatistics,
    Creating,
    MyArticles,
    MyHistory,
} from './index'
import { BrowserRouter } from 'react-router-dom'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllArticles />} />
                <Route path="/creating" element={<Creating />} />
                <Route path="/my-history" element={<MyHistory />} />
                <Route path="/my-articles" element={<MyArticles />} />
                <Route
                    path="/article-edit:articleId"
                    element={<ArticleEdit />}
                />
                <Route
                    path="/article-reading:articleId"
                    element={<ArticleReading />}
                />
                <Route
                    path="/article-statistics:articleId"
                    element={<ArticleStatistics />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
