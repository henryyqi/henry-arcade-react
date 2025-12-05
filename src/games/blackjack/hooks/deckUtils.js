// pure functions for deck management in blackjack

export function createDeck() {
    const deck = new Deck();
    deck.shuffle();
    return deck.cards;
}

export function dealCard(deck) {
    return deck.pop();
}

export class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

export class Deck {
    
    constructor() {
        this.cards = [];
        const suits = ['♥', '♦', '♠', '♣'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const values = {
            '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
            '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': 11
        };
        for (let suit of suits) {
            for (let rank of ranks) {
                this.cards.push(new Card(suit, rank, values[rank]));
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal() {
        return this.cards.pop();
    }
}