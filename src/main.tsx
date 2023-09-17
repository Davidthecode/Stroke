import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { UseColorContext } from './state/colorProvider.tsx';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { UseThemeContext } from './state/themeProvider.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UseThemeContext>
      <UseColorContext>
        <RouterProvider router={router} />
      </UseColorContext>
    </UseThemeContext>
  </React.StrictMode>,
)
