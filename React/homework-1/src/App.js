import React, {Component} from 'react';
import AllCars from "./components/AllCars/AllCars";
import AllPosts from "./components/AllPosts/AllPosts";
import AllComents from "./components/AllComents/AllComents";

class App extends Component {
    render() {
        return (
            <div>
                <AllCars/>
                <hr/>
                <AllPosts/>
                <hr/>
                <AllComents/>
            </div>
        );
    }
}

export default App;