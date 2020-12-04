import React, {Component} from 'react';
import AllCars from "./components/AllCars/AllCars";
import AllPost from "./components/AllPost/AllPost";
import AllComents from "./components/AllComents/AllComents";

class App extends Component {
    render() {
        return (
            <div>
                <AllCars/>
                <hr/>
                <AllPost/>
                <hr/>
                <AllComents/>
            </div>
        );
    }
}

export default App;