import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Wrapper>
                    <Route exact path="/search" component={Search} />
                </Wrapper>
                <Footer />
            </div>
        </Router>
    );
}

export default App;