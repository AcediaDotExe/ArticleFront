import React from 'react'
import { Box, Container, Link, Paper, Typography } from '@mui/material'

const LayoutFooter = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                width: '100%',
                height: '64px',
                boxShadow: 3,
            }}
            square
            variant="outlined"
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        display: 'flex',
                        my: 1,
                    }}
                >
                    <Link href="/"></Link>
                </Box>

                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        display: 'flex',
                        mb: 2,
                    }}
                >
                    <Typography variant="caption">Copyright ©2022</Typography>
                </Box>
            </Container>
        </Paper>
    )
}

export default LayoutFooter
