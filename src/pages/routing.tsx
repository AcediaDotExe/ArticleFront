import React, { FC } from 'react'
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

const Routing: FC = () => {
    return (
        // <HashRouter>
            <BrowserRouter basename="/article-front/">
            <Routes>
                <Route path="/" element={<AllArticles />} />
                <Route path="/creating" element={<Creating />} />
                <Route path="/history" element={<MyHistory />} />
                <Route path="/my-articles" element={<MyArticles />} />
                <Route path="/edit:articleId" element={<ArticleEdit />} />
                <Route
                    path="/reading/:currentId"
                    element={<ArticleReading />}
                />
                <Route
                    path="/statistics:articleId"
                    element={<ArticleStatistics />}
                />
            </Routes>
            </BrowserRouter>
        // </HashRouter>
    )
}

export default Routing
