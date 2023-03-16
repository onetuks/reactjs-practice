import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';
import About from '../screens/About';
import NotFound from '../screens/NotFound';
import User from '../screens/User';
import Root from '../Root';
import ErrorComponent from '../screens/ErrorComponent';
import Followers from '../screens/Followers';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
                errorElement: <ErrorComponent/>
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "user/:userId",
                element: <User />,
                children: [
                    {
                        path: "followers",
                        element: <Followers />
                    }
                ],
            },
        ],
        errorElement: <NotFound />,
    }
]);

export default router;