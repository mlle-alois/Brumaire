import './App.css';
import {Ratings} from "./components/ratings/Ratings";
import Faq from "./components/faq/Faq";
import {Navbar} from "./components/navbar/Navbar";
import {Purchase} from "./components/purchase/Purchase";
import {Reviews} from "./components/reviews/Reviews";
import {Token} from "./components/exception/expiredTokenException"
import {Comment} from "./components/exception/doubleCommentException"

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
                {currentRoute === "/accessError" && <Token/>}
                {currentRoute === "/commentError" && <Comment/>}

            </div>
        </>
    );
}

export default App;
