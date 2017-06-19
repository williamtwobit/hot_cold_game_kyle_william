import React from 'react';
import Header from './header';
import Feedback from './feedback';
import GuessForm from './guessForm';
import GuessCount from './guessCount';
import GuessList from './guessList';


export default class Game extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Header />
        <section className="game">
          <Feedback />
          <GuessForm />
          <GuessCount />
          <GuessList />
        </section>
      </div>
    );
  };

};