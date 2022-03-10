import './App.css';
import {Ratings} from "./components/ratings/Ratings";
import Faq from "./components/faq/Faq";
import {Navbar} from "./components/navbar/Navbar";
import {Purchase} from "./components/purchase/Purchase";

function App() {
    const currentRoute = window.location.pathname;

    return (
        <>
            <Navbar/>
            <div className="body">
                {currentRoute === "/" && <Ratings/>}
                {currentRoute === "/ratings" && <Ratings/>}
                {currentRoute === "/faq" && <Faq/>}
                {currentRoute === "/purchase" && <Purchase/>}
            </div>
        </>
    );
}

export default App;
