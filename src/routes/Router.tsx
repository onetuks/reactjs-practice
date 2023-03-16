import Header from '../Header';
import Home from '../Home';
import About from '../About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
    return <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </BrowserRouter>;
}

export default Router;