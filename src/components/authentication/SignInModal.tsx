import React, { FC } from 'react'
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Link,
    Slide,
} from '@mui/material'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { TransitionProps } from '@mui/material/transitions'
import './SignInButton.css'
import { GoogleSignInLink } from '../../assets/authentication/authenticationData'
import { UiActionType } from '../../types/ui'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="down" ref={ref} {...props} />
})

export const SignInModal: FC = () => {
    const isModalOpen: boolean = useTypedSelector(
        (state) => state.ui.isSignInModalOpen
    )
    const dispatch = useDispatch()

    function handleCloseSingInModal() {
        dispatch({ type: UiActionType.CLOSE_SIGN_IN_MODAL_WINDOW })
    }

    return (
        <Dialog
            open={isModalOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseSingInModal}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle sx={{ textAlign: 'center' }}>
                {'Authorization'}
            </DialogTitle>
            <DialogContent>
                <DialogContentText
                    id="alert-dialog-slide-description"
                    sx={{ textAlign: 'center' }}
                >
                    <Link
                        href={GoogleSignInLink.replace('{host}', window.location.href)}
                        sx={{ textDecoration: 'none' }}
                    >
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{ mt: '5px' }}
                            className={'google-btn'}
                        >
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Box
                                    sx={{
                                        width: 30,
                                        height: 30,
                                        color: 'secondary',
                                    }}
                                >
                                    <img
                                        className="google-icon"
                                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                    />
                                </Box>
                                <p className={'font-Sono google-text'}>
                                    Sign in with google
                                </p>
                            </Grid>
                        </Button>
                    </Link>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}
