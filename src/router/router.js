import { createBrowserRouter, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import Login from '../components/Form/Login'
import Coupons from '../components/Catalog/Coupons'
import store from '../app/store'
import Dashboard from '../components/Dashboard/Dashboard'
import Products from '../components/Catalog/Products'
import Categories from '../components/Catalog/Categories'
import Attributes from '../components/Catalog/Attributes'
import Customers from '../components/Customers/Customers'
import Orders from '../components/Orders/Orders'
import OurStaff from '../components/OurStaff/OurStaff'
import Settings from '../components/Settings/Settings'
import Languages from '../components/International/Languages'
import Currenciess from '../components/International/Currenciess'
import ViewStore from '../components/OnlineStore/ViewStore'
import StoreCustomization from '../components/OnlineStore/StoreCustomization'
import Fo4 from '../components/Pages/Fo4'
import Commingsoon from '../components/Pages/Commingsoon'
import Signup from '../components/Form/Signup'
import { useEffect } from 'react'
import ProductInvoice from '../components/Catalog/ProductInvoice'
import ProductDetail from '../components/Catalog/ProductDetail'




const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <Layout />
      </Provider>
    ),

    children: [

      {
        path: "/",
        element: <Dashboard />,

      },

      {
        path: "/products",
        element: <Products />,
      
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/attributes",
        element: <Attributes />,
      },
      {
        path: "/coupons",
        element: <Coupons />,
      },

      {
        path: "/customers",
        element: <Customers />,

      },
      {
        path:"pid",
        element:<ProductInvoice/>
      },
      {
        path:"productdetal",
        element:<ProductDetail/>
      },
      {
        path: "/orders",
        element: <Orders />,

      },
      {
        path: "/ourStaff",
        element: <OurStaff />,

      },
      {
        path: "/settings",
        element: <Settings />,

      },

      {
        path: "/languages",
        element: <Languages />,
      },
      {
        path: "/currencies",
        element: <Currenciess />,
      },


      {
        path: "/viewstore",
        element: <ViewStore />,
      },
      {
        path: "/storecustomization",
        element: <StoreCustomization />,
      },


      {
        path: "*",
        element: <Fo4 />,
      },
      {
        path: "/comingsoon",
        element: <Commingsoon />,
      },


    ]
  },

  {
    path: "login",
    element: <Login />,

  },
  {
    path: "signup",
    element: <Signup />,

  }

])

export default router


