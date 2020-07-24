import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./loader";
import useLocaation from "./useLocaation";

const App = () => {
    const [lat, errorMessage] = useLocaation()
    let content;
    if (errorMessage) {
        content = <Loader message={errorMessage}/>
    } else if (lat) {
        content = <SeasonDisplay lat={lat}/>
    } else {
        content = <Loader message="Please accept location request"/>
    }

    return <div className="border red">{content}</div>
}


ReactDom.render(
    <App />,
    document.querySelector('#root')
);