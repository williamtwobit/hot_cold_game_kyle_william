import React from 'react';

export default function GuessForm() {
    return (
        <form>
            <input type="text" name="userGuess" id="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required=""/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess" styles="opacity: 1;"/>
        </form>
    );
}