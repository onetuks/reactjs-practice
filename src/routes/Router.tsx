import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Root from '../Root';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            }
        ],
    }
]);

export default router;