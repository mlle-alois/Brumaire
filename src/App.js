import './App.css';
import {Ratings} from "./components/ratings/Ratings";
import Faq from "./components/faq/Faq";
import {Navbar} from "./components/navbar/Navbar";
import {Purchase} from "./components/purchase/Purchase";
import {Reviews} from "./components/reviews/Reviews";

function App() {
    const currentRoute = window.location.pathname;

    return (
        <>
            <Navbar/>
            <div className="body">
                {currentRoute === "/" && <Reviews/>}
                {currentRoute === "/reviews" && <Reviews/>}
                {currentRoute === "/ratings" && <Ratings/>}
                {currentRoute === "/faq" && <Faq/>}
                {currentRoute === "/purchase" && <Purchase/>}
            </div>
        </>
    );
}

export default App;
