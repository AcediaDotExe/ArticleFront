import React from 'react'
import Layout from '../../components/layout/layout/Layout'
import { Grid } from '@mui/material'

import ArticleEditor from '../../components/editor/articleEditor/ArticleEditor'

const Creating = () => {
    return (
        <Layout>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                sx={{ minHeight: '100vh', pt: '10px' }}
            >
                <ArticleEditor />
            </Grid>
        </Layout>
    )
}

export default Creating
