import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './app'
import 'react-perfect-scrollbar/dist/css/styles.css';
import ScrollToTop from './scrollToTop'
import './js/default';
import './index.scss';
const Index = (props) => {
    
    return (
        <Provider store={store}>
            <Router>
                <ScrollToTop>
                    <App  />
                </ScrollToTop>
            </Router>
        </Provider>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));