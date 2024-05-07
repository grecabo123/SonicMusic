import React from 'react'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom/cjs/react-router-dom.min'
import Landing from './Landing'
import Register from './components/Register'
import PrimeReact from 'primereact/api';
import axios from 'axios'
import Login from './components/Login';


axios.defaults.baseURL= import.meta.env.VITE_API_BASE_URL;
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.post['Accept'] = "application/json";

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
})

function App() {

    PrimeReact.ripple = true;


    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Landing} />
                <Route path="/register" exact={true} component={Register} />
                <Route path="/login" exact={true} component={Login} />
            </Switch>
        </Router>
    )
}

export default App