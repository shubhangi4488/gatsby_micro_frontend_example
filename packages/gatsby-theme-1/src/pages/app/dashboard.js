import React from "react";
import {Router} from "@reach/router";
import {Link} from "gatsby";

const Home=()=> <p>Home</p>
const Dashboard=()=>{
    return (
    <div>
        <h1>Dashboard</h1>
        <nav>
        </nav>
        <Router>
            <Home path="/app/dashboard" />
        </Router>
    </div>
    )
}

export default Dashboard;
