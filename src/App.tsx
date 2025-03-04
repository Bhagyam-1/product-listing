import { Provider } from 'react-redux';
import Routes from './components/layout/Route';
import { store } from './redux/store';
import { ToastContainer } from 'react-toastify';

function App() {

    return (
        <Provider store={store}>
            <ToastContainer position="top-right" autoClose={3000} />
            <Routes />
        </Provider>
    )
}

export default App
