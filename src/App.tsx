import React, {useEffect} from 'react'
import Routing from './pages/routing'
import { store } from './store'
import { Provider } from 'react-redux'
import ThemeProviderWrapper from './components/themes/ThemeProviderWrapper'

function App() {



    return (
        <React.StrictMode>
            <Provider store={store}>
                <ThemeProviderWrapper>
                    <Routing />
                </ThemeProviderWrapper>
            </Provider>
        </React.StrictMode>
    )
}

export default App
