import React from "react";
import GameBoard from "./components/GameBoard";
import data from "./cardData";
import "./styles.css";

export default function App() {
  const cardArr = [];
  for (let c of data) {
    for (let i = 0; i < data.length; i++) {
      let newCard = { ...c };
      cardArr.push(newCard);
    }
  }

  const startNewGame = () => {
    for (let i = 0; i < cardArr.length; i++) {
      let randInd = Math.floor(Math.random() * cardArr.length);
      if (i !== randInd) [cardArr[i], cardArr[randInd]] = [cardArr[randInd], cardArr[i]];
      cardArr[i].id = i;
    }
    console.log(cardArr);
    return [...cardArr];
  };

  return (
    <div className="App">
      <header>
        <h1>Memory Game</h1>
        <nav>
          <a href="#instructions">Instructions</a>
          <a href="#game-board">Game</a>
        </nav>
      </header>

      <main>
        <h2 id="instructions">Instructions</h2>
        <p>
          Concentration, also known as Match Match, Memory, Pelmanism, Shinkei-suijaku, Pexeso or
          simply Pairs, is a card game in which all of the cards are laid face down on a surface and
          two cards are flipped face up over each turn. The object of the game is to turn over pairs
          of matching cards.
        </p>

        <div id="message"></div>
        <div id="game-board" className="board">
          <GameBoard game={startNewGame()} />
        </div>
      </main>

      <footer className="clearfix">
        <p className="copyright">COPYRIGHT 2017</p>
        <p className="message">
          Created with &hearts; by <span className="name">GA</span>
        </p>
      </footer>
    </div>
  );
}
