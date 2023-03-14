import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import reportWebVitals from './reportWebVitals';


const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
