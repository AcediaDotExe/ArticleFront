import React, { FC } from 'react'
import { OnlyChildProps } from '../../../../types/types'
import { Box, Grid, Paper } from '@mui/material'

const LayoutContent: FC<OnlyChildProps> = ({ children }) => {
    // @ts-ignore
    const styles = (theme) => ({
        width: '100vh',
        height: '95vh',
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            mt: '64px',
        },
        [theme.breakpoints.down('sm')]: {
            mt: '56px',
            width: '100%',
        },
    })

    return (
        <Grid container justifyContent="center">
            <Paper sx={styles} square variant="outlined">
                {children}
            </Paper>
        </Grid>
    )
}

export default LayoutContent
