import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import GlobalNavbar from './components/GlobalNavbar'
import RootComponent from './RootComponent'
import { persistor, store } from './store/reducers/store'

const App: React.FC = () => {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GlobalNavbar />
                <RootComponent />
            </PersistGate>
        </Provider>
    )
}

export default App
