import { createBrowserRouter } from "react-router-dom";
import SiteLayout from "../Layouts/SiteLayout";
import Home from "../Pages/site/Home";
import NotFound from "../Pages/NotFound";
import About from "../Pages/site/About";

export const HOME = '/'
export const LOGIN = '/login'
export const SIGNUP = '/sign-up'
export const ABOUT = '/about'


const Router = createBrowserRouter([
    {
        element: <SiteLayout />,
        children:[
            {
                path:HOME,
                element:<Home />
            },
            {
                path:ABOUT,
                element: <About />
            }
          
        ],
        
},
{
    path:"*",
    element: <NotFound />
}
]);

export default Router;
