import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';
import About from '../screens/About';
import NotFound from '../screens/NotFound';
import Root from '../Root';
import ErrorComponent from '../screens/ErrorComponent';

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
            }
        ],
        errorElement: <NotFound />,
    }
]);

export default router;