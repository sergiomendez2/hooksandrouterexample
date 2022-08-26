import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";


const RouterExample = () => {
    return(
       <>
       <Router>
               <Routes><Route path = "/home" element={<Home />}/>

              </Routes>
       </Router>
       </>

    );
}

export default RouterExample;