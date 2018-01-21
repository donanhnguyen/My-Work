import React from 'react';


class Military extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            army: 0,
            navy: 0,
            marines: 0,
            airForce: 0,
            coastGuard: 0
        }

    }

    addArmy (event) {
        event.preventDefault();
        var armyInput = document.getElementById("army-input");
            
            if (armyInput.value !== "" && Number.isInteger(parseInt(armyInput.value))) {
                this.setState( {army: this.state.army + parseInt(armyInput.value)} );
            } else {
                alert("Wrong Input...")
            }
        armyInput.value = "";
    }

    addNavy (event) {

        event.preventDefault();
        var navyInput = document.getElementById("navy-input");
            
            if (navyInput.value !== "" && Number.isInteger(parseInt(navyInput.value))) {
                this.setState( {navy: this.state.navy + parseInt(navyInput.value)} );
            } else {
                alert("Wrong Input...")
            }
        navyInput.value = "";

    }


    addMarines (event) {

        event.preventDefault();
        var marinesInput = document.getElementById("marines-input");
            
            if (marinesInput.value !== "" && Number.isInteger(parseInt(marinesInput.value))) {
                this.setState( {marines: this.state.marines + parseInt(marinesInput.value)} );
            } else {
                alert("Wrong Input...")
            }
        marinesInput.value = "";
   
    }

    addAirForce () {

        event.preventDefault();
        var airForceInput = document.getElementById("airforce-input");
            
            if (airForceInput.value !== "" && Number.isInteger(parseInt(airForceInput.value))) {
                this.setState( {airForce: this.state.airForce + parseInt(airForceInput.value)} );
            } else {
                alert("Wrong Input...")
            }
        airForceInput.value = "";

    }

    addCoastGuard () {

        event.preventDefault();
        var coastGuardInput = document.getElementById("coastguard-input");
            
            if (coastGuardInput.value !== "" && Number.isInteger(parseInt(coastGuardInput.value))) {
                this.setState( {coastGuard: this.state.coastGuard + parseInt(coastGuardInput.value)} );
            } else {
                alert("Wrong Input...")
            }
        coastGuardInput.value = "";

    }

    clear (event) {  
        event.preventDefault();
        this.setState({army: 0, navy: 0, marines: 0, airForce: 0, coastGuard: 0});
    }

    render () {
        return (

        <div>
                <div class="branches">
                    <h1 id="army-header">Army: {this.state.army}</h1>
                    <h1 id="navy-header">Navy: {this.state.navy}</h1>
                    <h1 id="marines-header">Marines: {this.state.marines}</h1>
                    <h1 id="airforce-header">Air Force: {this.state.airForce}</h1>
                    <h1 id="coastguard-header">Coast Guard: {this.state.coastGuard}</h1>
                </div>


            <div class="add-buttons">
                <div>
                    <br/>
                    <button onClick={this.addArmy.bind(this)} id="army-button">Add Army</button>
                    <br/>
                    <input id="army-input"/>
                </div>

                <div>
                    <br/>    
                    <button onClick={this.addNavy.bind(this)} id="navy-button">Add Navy</button>
                    <br/>
                    <input id="navy-input"/>
                </div>

                <div>
                    <br/> 
                    <button onClick={this.addMarines.bind(this)} id="marines-button">Add Marines</button>
                    <br/>
                    <input id="marines-input"/>
                </div>

                <div>
                    <br/> 
                    <button onClick={this.addAirForce.bind(this)} id="airforce-button">Add Air Force</button>
                    <br/>
                    <input id="airforce-input"/>
                </div>

                <div>
                    <br/> 
                    <button onClick={this.addCoastGuard.bind(this)} id="coastguard-button">Add CoastGuard</button>
                    <br/>
                    <input id="coastguard-input"/>
                </div>

            </div>

            <button onClick={this.clear.bind(this)} class="clear-button">CLEAR</button>

        </div>

        )
        
        
    }


    
}


export default Military;