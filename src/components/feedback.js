import React from 'react';

export default function Feedback(props) {
    return (
        <h2 id="feedback">{props.feedback}</h2>
    );
}

Feedback.defaultProps={
    feedback: 'Make Your Guess, Asshole!'
};