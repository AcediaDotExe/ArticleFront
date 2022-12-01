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
import { BrowserRouter, HashRouter } from 'react-router-dom'
import {useDispatch} from "react-redux";
import {setUser} from "../utils/userAuth/user";
import {UserActionType, UserState} from "../types/user";

const Routing = () => {

    const dispatch = useDispatch();

    setUser().then(((value: UserState) => {
        dispatch({type: UserActionType.SET_USER, payload: value})
    }))

    return (
        <HashRouter>
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
        </HashRouter>
    )
}

export default Routing
