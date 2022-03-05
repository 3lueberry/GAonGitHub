"use strict";

class Pet {
  constructor(owner = "Me", name = "Shiro") {
    (this.owner = owner), (this.name = name);
  }
  walk() {
    console.log("walka walka");
  }
}

const myPet = new Pet("Blueberry", "Kuro");
console.log(myPet);

class Dog extends Pet {
  constructor(owner, name, price = 20) {
    super(owner, name);
    this.price = price;
  }
  bark() {
    console.log("bark");
  }
  chaseTail() {
    console.log("oh boy oh boy oh boy");
  }
  getPrice() {
    return this.price;
  }
}

const myDog = new Dog("Blueberry", "Jyul", 20);
console.log(myDog);
myDog.bark();
myDog.chaseTail();
myDog.walk();
console.log(myDog.price);

myDog.price = 30;
console.log(myDog.price);

class Cat extends Pet {
  constructor(owner, name, price = 10) {
    super(owner, name);
    this.price = price;
  }
  purr() {
    console.log("purrrrrrr");
  }
  clean() {
    console.log("licky licky");
  }
  getPrice() {
    return this.price;
  }
  walk() {
    console.log("strut strut");
  }
}

const myCat = new Cat("Blueberry", "Meow", 10);
console.log(myCat);
myCat.purr();
myCat.clean();
myCat.walk();
console.log(myCat.price);
myDog.price = 20;
console.log(myDog.price);

///////////////////////////////////
///// Stretch
///////////////////////////////////

class Card {
  constructor(suit, rank) {
    const faceCards = ["J", "Q", "K"];
    (this.suit = suit), (this.rank = rank);
    if (rank === "A") this.value = 11;
    else if (faceCards.indexOf(rank) === -1) this.value = parseInt(rank);
    else this.value = 10;
    this.faceUp = false;
  }
}

const deck = {
  suits: "Spade Heart Diamond Club".split(" "),
  ranks: "A234567890JQK".split(""),
  createDeck() {
    this.ranks[9] = "10";
    this.cards = [];
    for (let i = 0; i < this.suits.length; i++)
      for (let j = 0; j < this.ranks.length; j++)
        this.cards.push(new Card(this.suits[i], this.ranks[j]));
  },
  shuffle() {
    let iCard = this.cards.length;
    while (iCard > 0) {
      let randomCard = Math.floor(Math.random() * iCard);
      iCard--;
      [this.cards[iCard], this.cards[randomCard]] = [
        this.cards[randomCard],
        this.cards[iCard],
      ];
    }
  },
  draw2() {
    const topCard = deck.cards[0];
    const botCard = deck.cards[deck.cards.length - 1];
    console.log(`Top Card: ${topCard.rank} of ${topCard.suit}`);
    console.log(`Bottom Card: ${botCard.rank} of ${botCard.suit}`);

    if (topCard.value === botCard.value) {
      if (
        this.ranks.indexOf(topCard.rank) === this.ranks.indexOf(botCard.ranks)
      )
        if (this.suits.indexOf(topCard.suit) < this.suits.indexOf(botCard.suit))
          this.winner(topCard);
        else this.winner(botCard);
      else if (
        this.ranks.indexOf(topCard.rank) > this.ranks.indexOf(botCard.ranks)
      )
        this.winner(topCard);
      else this.winner(botCard);
    } else if (topCard.value > botCard.value) this.winner(topCard);
    else this.winner(botCard);
  },
  winner(card) {
    let loser;
    this.cards.indexOf(card) === 0
      ? (loser = this.cards[this.cards.length - 1])
      : (loser = this.cards[0]);
    console.log(
      `${card.rank} of ${card.suit} is higher than ${loser.rank} of ${loser.suit}.`
    );
  },
};
console.log(deck.suits);
console.log(deck.ranks);
deck.createDeck();
console.log(deck.cards);
deck.shuffle();
console.log(deck.cards);
console.log(`${deck.cards[0].rank} of ${deck.cards[0].suit}`);
deck.draw2();
