import React from 'react';

const WeatherDetails: React.FC = (props: any) => {

    if (!props.location.city) {
      return  (<div className="card">
            No Data
        </div>)
    }

    return (
        <div className="card">
        <div className="card-header">
            <h4 className="card-title">{props.location.city} <span>,{props.location.region}</span></h4>
            <p className="card-text">{props.location.country}</p>
                <span className="card-link"> Wind speed: {props.current_observation.wind.speed}</span>
        </div>
            
        <div className="card-body">
            <h5>Forcast</h5>
            <br/>
            <div className="card-columns">
                {
                    props.forecasts.map((ele :any) => {                        
                        return (
                            <div key={ele.date} className="card bg-light">
                                <div className="card-body text-center">
                                    <h5 className="card-text">{ele.day}</h5>
                                    <p className="card-text">Low: {ele.low}</p>
                                    <p className="card-text">High: {ele.high}</p>
                                    <p className="card-text">Climate: {ele.text}</p>
                                </div>
                            </div>
                        )
                    })
                    
                }
            </div>
        </div>
            <div className="card-footer">
                <p className="card-text">Humidity : {props.current_observation.atmosphere.humidity}</p>
                <p className="card-text">Visibility : {props.current_observation.atmosphere.visibility}</p>
                <p className="card-text">Pressure: {props.current_observation.atmosphere.pressure}</p>
            </div>

    </div>
    );
}
export default WeatherDetails;
