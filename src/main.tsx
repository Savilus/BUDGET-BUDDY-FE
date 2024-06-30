import React from 'react';
import {createRoot} from 'react-dom/client';
import './app/index.css';
import {ThemeProvider} from '@material-tailwind/react';
import App from './App.tsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import * as ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter basename="/budget-buddy">
                <Routes>
                    <Route path="/*" element={<App/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);