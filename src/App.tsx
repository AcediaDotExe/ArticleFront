import React, { useEffect } from 'react'
import Routing from './pages/routing'
import { store } from './store'
import { Provider } from 'react-redux'
import ThemeProviderWrapper from './components/themes/ThemeProviderWrapper'
import AuthWrapper from './components/authentication/AuthWrapper'

function App() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <ThemeProviderWrapper>
                    <AuthWrapper>
                        <Routing />
                    </AuthWrapper>
                </ThemeProviderWrapper>
            </Provider>
        </React.StrictMode>
    )
}

export default App
