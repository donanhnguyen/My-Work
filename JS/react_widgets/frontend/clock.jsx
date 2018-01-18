import React from 'react';

class Clock extends React.Component {


    constructor (props) {
        super(props);
        this.state = { time: new Date() };

        this.tick = this.tick.bind(this);
    }

    tick () {
        this.setState({time: new Date() });
    }


    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000);
    
    }
    
    componentWillUnmount() {
        this.intervalId.clearInterval();
    }


    render () {
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();
    
        hours = (hours < 10) ? `0${hours}` : hours;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        seconds = (seconds < 10) ? `0${seconds}` : seconds;

        return (
            <div className="clock-fuck">
                <h1>This is yo clock Biiiitch: </h1>
                    <span>
                        {hours}:{minutes}:{seconds} PDT
                    </span>
                <p> {this.state.time.toDateString()} </p>
            </div>
        );



    }










}

export default Clock;