import React, {Component} from 'react';
import './App.css';
import AddEmployee from "./AddEmployee";
import Table from "./Table";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BrowserRouter from "react-router-dom/BrowserRouter";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Router>
                    <div>
                        <Route exact path="/" component={AddEmployee} />
                        <Route exact path="/view" component={Table} />
                    </div>
                </Router>
            </BrowserRouter>
        );
    }
}

export default App;
