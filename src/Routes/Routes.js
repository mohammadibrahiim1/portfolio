import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import Root from "../Root/Root";

export const router=createBrowserRouter([
    {path:'/',
element: <Root></Root>,
children:[
    {
        path:'/about',
        element:<About></About>
    },
]}
])
