import React from 'react'
import Routing from './pages/routing'
import {createTheme, PaletteMode, ThemeProvider} from "@mui/material";
import {store} from "./store";
import {Provider} from "react-redux";
import { StyledEngineProvider } from '@mui/material/styles';

function App() {


    return (
        <div className="App">
            <React.StrictMode>
                <StyledEngineProvider injectFirst>
                    <Provider store={store}>
                        <Routing/>
                    </Provider>
                </StyledEngineProvider>
            </React.StrictMode>

        </div>
    )
}

export default App
