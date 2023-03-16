import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';
import About from '../screens/About';
import NotFound from '../screens/NotFound';
import User from '../screens/User';
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
            },
            {
                path: "user/:userId",
                element: <User />,
            },
            /**
             * 아래 방식으로 하지 않는 이유
             * - /user 에 접근할 경우 빈 User 컴포넌트가 렌더링됨. 
             * - /user 에 접근하면 errorElement가 렌더링되어 페이지를 보안할 수 있도록 처리하기 위함.
             */
            // {
            //     path: "user/",
            //     element: <User />,
            //     children: [
            //         {
            //             path: ":userId",
            //             element: <User/>,
            //         }
            //     ],
            // }
        ],
        errorElement: <NotFound />,
    }
]);

export default router;