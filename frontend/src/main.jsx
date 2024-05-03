import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './Context/ShopContext';
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <ShopContextProvider>
        <BrowserRouter><App/></BrowserRouter>
    </ShopContextProvider>
)
