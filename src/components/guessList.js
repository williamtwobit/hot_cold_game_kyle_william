import React from 'react';

export default function GuessList(props) {

    
    const listItems= props.list.map((item, index)=>{
       return <li key={index}>{item}</li>
    });

    return (
        <ul id="guessList" className="guessBox clearfix">{listItems}</ul>
    );
}

GuessList.defaultProps = {
    list: []
}