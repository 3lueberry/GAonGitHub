"use strict";

const deck = {
  suits: "Spade Heart Diamond Club".split(" ").reverse(),
  ranks: "234567890JQKA".split(""),
  createDeck() {
    this.ranks[8] = "10";
    this.cards = [];
    for (let i = 0; i < this.ranks.length; i++)
      for (let j = 0; j < this.suits.length; j++)
        this.cards.push(`${this.ranks[i]} of ${this.suits[j]}`);
  },
  shuffle() {
    this.shuffledDeck = [...this.cards];
    let iCard = this.cards.length;
    while (iCard > 0) {
      let randomCard = Math.floor(Math.random() * iCard);
      iCard--;
      [this.shuffledDeck[iCard], this.shuffledDeck[randomCard]] = [
        this.shuffledDeck[randomCard],
        this.shuffledDeck[iCard],
      ];
    }
  },
  draw2() {
    const topCard = deck.shuffledDeck[0];
    const botCard = deck.shuffledDeck[deck.shuffledDeck.length - 1];
    console.log(`Top Card: ${topCard}`);
    console.log(`Bottom Card: ${botCard}`);

    if (this.cards.indexOf(topCard) > this.cards.indexOf(botCard))
      this.winner(topCard);
    else this.winner(botCard);
  },
  winner(card) {
    let loser;
    this.shuffledDeck.indexOf(card) === 0
      ? (loser = this.shuffledDeck[this.cards.length - 1])
      : (loser = this.shuffledDeck[0]);
    console.log(`${card} is higher than ${loser}.`);
  },
};

console.log(deck.suits);
console.log(deck.ranks);
deck.createDeck();
console.log(deck.cards);
deck.shuffle();
console.log(deck.shuffledDeck);
console.log(`${deck.cards[0]}`);
deck.draw2();
