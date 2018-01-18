import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';



const PanelsBitch = [
    {title: "bitch1", content: "biiiitch1"},
    {title: "bitch2", content: "biiiitch2"},
    {title: "bitch3", content: "biiiitch3"}
];


class Root extends React.Component {

    render () {

        return (
        <div>
            <Clock />


            <Tabs panels={PanelsBitch}/>

        </div>
        )

    }




}





document.addEventListener("DOMContentLoaded", () => {

    ReactDOM.render(<Root />, document.getElementById("main"))

})


