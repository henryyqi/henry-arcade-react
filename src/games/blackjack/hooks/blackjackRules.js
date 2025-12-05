export function calculateHandValue(hand) {
    let value = 0;
    let aces = 0;

    for (let card of hand) {
        value += card.value;
        if (card.rank === 'A') aces += 1;
    }

    while (value > 21 && aces > 0) {
        value -= 10; // Count Ace as 1 instead of 11
        aces -= 1;
    }

    return value;
}