import React, {Component} from 'react';
import {cars} from "./Data/carDb/Car";
import Cars from "./components/carsComp/Cars";

class App extends Component {
    render() {
        return (
            <div>
                {
                    cars.map(car=>(<Cars item={car}/>))
                }
            </div>
        );
    }
}

export default App;