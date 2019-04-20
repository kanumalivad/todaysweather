import React from 'react';
import './week-day.scss';

class WeekDay extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.icon);
        return (
            <div className={this.props.isActive ? 'day-wrap--active' : 'day-wrap'} onClick={this.props.onClick}>
                <span className={this.props.isActive ? 'day--active' : 'day'}>{this.props.day}</span>
                <img src={this.props.icon} className="day-icon"/>
                <div className={this.props.isActive ? 'date-wrap--active' : 'date-wrap'}>
                    <span className="day-date">{this.props.temprature}</span>
                    <span className="day-celcius">&#8451;</span>
                </div>
            </div>
        );
    }
}

export default WeekDay;