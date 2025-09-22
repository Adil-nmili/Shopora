import { createBrowserRouter } from "react-router-dom";
import SiteLayout from "../Layouts/SiteLayout";
import Home from "../Pages/site/Home";
import NotFound from "../Pages/NotFound";

export const HOME = '/'
export const LOGIN = '/login'
export const SIGNUP = '/sign-up'


const Router = createBrowserRouter([
    {
        element: <SiteLayout />,
        children:[
            {
                path:HOME,
                element:<Home />
            },
          
        ],
        
},
{
    path:"*",
    element: <NotFound />
}
]);

export default Router;
