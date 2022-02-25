import App from "./App.js";
import Profile from './Profile.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NewPage from "./NewPage.js";
function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/newpage" element={<NewPage/>} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router;