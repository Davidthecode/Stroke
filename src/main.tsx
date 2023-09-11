import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import About from './pages/about.tsx'
import Contact from './pages/contact.tsx'
import { UseColorContext } from '../state/colorProvider.tsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />),
    children: [
      {
        path: "contact",
        element: <Contact />,
        children: [
          {
            path: "contact/person",
            element: <div>david ajibola</div>
          }
        ]
      },
    ]
  },
  {
    path: "about",
    element: <About />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UseColorContext>
      <RouterProvider router={router} />
    </UseColorContext>
  </React.StrictMode>,
)
