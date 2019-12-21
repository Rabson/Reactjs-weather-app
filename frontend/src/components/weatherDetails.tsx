import React from 'react';

const WeatherDetails: React.FC = (props: any) => {

    return (
        <div>
            {/* <div className="container" > */}
                <div className="jumbotron">
                {props.length ?
                
                    (<div>
                        <h2>{props.data.query.results.channel.item.title}</h2>
                        <h2>{props.data.query.results.channel.item.description}</h2>
                    </div>)
                    : <div>No data</div>
                }
                </div> 

                <div id="forecast" className="row">
                </div>
            {/* </div> */}
        </div>
    );
}

export default WeatherDetails;