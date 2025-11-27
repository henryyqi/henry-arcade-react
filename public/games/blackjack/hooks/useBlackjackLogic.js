import { useState } from 'react';
import { createDeck, dealCard, calculateHandValue } from '../utils/blackjackUtils';

export function useBlackjackLogic(onEnd) {
    const [deck, setDeck] = useState(createDeck());         // Initialize a new deck
    const [playerHand, setPlayerHand] = useState([]);       // Player's cards
    const [dealerHand, setDealerHand] = useState([]);       // Dealer's cards
    const [isPlayerTurn, setIsPlayerTurn] = useState(true); // Track whose turn it is
    const [gameOver, setGameOver] = useState(false);        // Track if the game is over
    const [result, setResult] = useState(null);             // Game result

    const startGame = () => {
        const newDeck = createDeck();
        const playerHand = [dealCard(newDeck), dealCard(newDeck)];
        const dealerHand = [dealCard(newDeck), dealCard(newDeck)];
        
        // Update states (deck, hands, turn, game over, result)
        setDeck(newDeck);
        setPlayerHand(playerHand);
        setDealerHand(dealerHand);
        setIsPlayerTurn(true);
        setGameOver(false);
        setResult(null);
    };
    
    const playerHit = () => {
        if (!isPlayerTurn || gameOver) return;
        const newDeck = [...deck];                      // Copy the current deck
        const newCard = dealCard(newDeck);              // Deal a new card
        const newPlayerHand = [...playerHand, newCard]; // Add card to player's hand
        setDeck(newDeck);                           // Update the deck
        setPlayerHand(newPlayerHand);               // Update player's hand

        if (calculateHandValue(newPlayerHand) > 21) {
            endGame('dealer'); // Player busts
        }
    };

    const playerStand = () => {
        if (!isPlayerTurn || gameOver) return;
        setIsPlayerTurn(false);
        dealerTurn();
    };

    const dealerTurn = () => {
        let newDeck = [...deck];
        let newDealerHand = [...dealerHand];

        while (calculateHandValue(newDealerHand) < 17) {
            const newCard = dealCard(newDeck);
            newDealerHand.push(newCard);
            newDeck = [...newDeck];
        }

        setDeck(newDeck);
        setDealerHand(newDealerHand);
        determineWinner(newDealerHand);
    };

    const determineWinner = (finalDealerHand) => {
        const playerValue = calculateHandValue(playerHand);
        const dealerValue = calculateHandValue(finalDealerHand);

        if (dealerValue > 21 || playerValue > dealerValue) {
            endGame('player');
        } else if (playerValue < dealerValue) {
            endGame('dealer');
        } else {
            endGame('push');
        }
    };
    
    const endGame = (winner) => {
        setGameOver(true);
        setResult(winner);
        if (onEnd) onEnd(winner);
    };

    return {
        playerHand,
        dealerHand,
        isPlayerTurn,
        gameOver,
        result,
        startGame,
        playerHit,
        playerStand
    };
}