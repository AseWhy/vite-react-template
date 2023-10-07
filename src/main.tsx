import React from 'react';
import ReactDOM from 'react-dom/client';
import { ROOT_ELEMENT_ID } from '@service';

import { Provider, RootStore } from "./store/RootStore";
import { App } from './App';

import "./styles/main.scss";

const store = RootStore.create();

ReactDOM
    .createRoot(document.getElementById(ROOT_ELEMENT_ID) as HTMLElement)
    .render(
        <React.StrictMode>
            <Provider value={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    );
