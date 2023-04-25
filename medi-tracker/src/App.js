import AddGenesisBlock from './Pages/AddGenesisBlock';
import ViewPendingRequests from './Pages/ViewPendingRequests';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DistributorLogin from './Pages/DistributorLogin'
import OwnerLogin from './Pages/OwnerLogin'
import Home from './Pages/Home'
import './App.css';

function App() 
{
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path = "/" element = {<Home />}></Route>
                    <Route exact path = "/DistributorLogin" element = {<DistributorLogin />} />
                    <Route exact path = "/OwnerLogin" element = {<OwnerLogin />} />
                    <Route exact path = "/OwnerLogin/AddGenesisBlock" element = {<AddGenesisBlock />} />
                    <Route exact path = "/OwnerLogin/ViewPendingRequests" element = {<ViewPendingRequests />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
