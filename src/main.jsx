import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './assets/MainLayout';


import Home from './assets/components/Home';
import Book from './assets/components/Book';
import ListedBooks from './assets/components/ListedBooks';
// import ReadBooks from './assets/components/ReadBooks';
import Wishlist from './assets/components/Wishlist';
// import PageToRead from './assets/components/PageToRead';
import PagesToRead from './assets/components/PagesToRead';
import ReadBooks from './assets/components/ReadBooks';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/book/:id',
        element: <Book></Book>,
        loader: () => fetch('/Books.json')

      },
      {
        path: '/pagetoread',
        element: <PagesToRead></PagesToRead>

      },

      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>,
        // loader: () => fetch('Books.json'),
        children:[
         
          {
            path:'wishlist',
            element:<Wishlist></Wishlist>,
            loader: () => fetch('Books.json'),
          },
          {
            path:'readlist',
            element:<ReadBooks></ReadBooks>
            
          },
          {
            path:'wishlist',
            element: <Wishlist></Wishlist>

          }
        ]
      }

    ]

  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
