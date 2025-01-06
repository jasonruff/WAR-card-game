//Defining card class to make card creation uniform
class Card {
    constructor(suit, number) {
        this.suit = suit;
        this.number = number;
    }
    getCardValue() {
    
        switch(this.number){
            case 14:
                return 'Ace';
                
            case 13:
                return 'King';
                
            case 12:
                return 'Queen';
                
            case 11:
                return 'Jack';
   
            default:
                return  this.number;
        }
    }

    getCardName(){
        return `${this.getCardValue()} of ${this.suit}`;
    }
}

//creating test cases of the above code to confirm we can create a new card and test our getCardValue and getCardName methods

//const testCard = new Card('Hearts', 7);
//console.log(testCard.getCardName());
//console.log(testCard.getCardValue());


// Deck class will manage the creation of the cards, the randomization (shuffling) of the cards, and splitting the deck into two piles of 26 cards 
class Deck {
   constructor(){
       this.cards = []
       this.createDeck();
    }

    createDeck(){
        const suits = ['Diamonds', 'Hearts', 'Spades', 'Clubs'];

        for(let suit of suits){
            for(let number = 2; number <= 14; number++){
                this.cards.push(new Card (suit,number));
            }
        }
    }

    shuffle(){
        for (let i= this.cards.length-1; i>0; i--){
            const j = Math.floor(Math.random() *(i +1));
            [this.cards[i], this.cards[j]] = [this.cards[j] , this.cards[i]];
        }
    }
    
}

//Building the Player class here that will give each player their shuffled deck of 26 cards 
// and the method to call the first element at position 0 and then remove it from the array shift()

class Player {
    constructor (playerDeck){
        this.playerDeck = playerDeck
    }
    playTopCard(){
        return this.playerDeck.shift();
    }
}

class Game {
    constructor(){
    this.player1score = 0;
    this.player2score = 0;
    this.newDeck = new Deck()
    this.newDeck.createDeck()
    this.newDeck.shuffle()
    this.player1 = new Player(this.newDeck.cards.slice(0,26))
    this.player2 = new Player(this.newDeck.cards.slice(26,52))

    }
        
playRound() {
    for(let i = 0; i < 26; i++){
        let player1UpCard = this.player1.playTopCard();
        let player2UpCard = this.player2.playTopCard();
         console.log(`\nRound ${i+1}:`);
                
         if (player1UpCard.number > player2UpCard.number) {
             this.player1score++;
             console.log(`${player1UpCard.getCardName()} beats ${player2UpCard.getCardName()} Player 1 wins the round!`);
         } else if(player2UpCard.number > player1UpCard.number){
             this.player2score++;
             console.log(`${player2UpCard.getCardName()} beats ${player1UpCard.getCardName()} Player 2 wins the round!`);
         } else {
              console.log(`${player1UpCard.getCardName()} is equal to ${player2UpCard.getCardName()} No points for either of you!`);
         }
         console.log(`The Current Score is Player 1: ${this.player1score} | Player 2: ${this.player2score}`);
     } 
        
 // Once the game has ended we need to create a "Final Score board" and declares the winner!

 console.log("\nGame Over!");
 console.log(`Final Score:`);
 console.log(`Player 1: ${this.player1score} points`);
 console.log(`Player 2: ${this.player2score} points`);   
           if (this.player1score > this.player2score) {
                console.log("\nPlayer 1 wins the game!");
            } else if (this.player2score > this.player1score) {
                console.log("\nPlayer 2 wins the game!");
            } else {
                console.log("\nIt's a tie game!");
            }
        }


}

let newGame = new Game();
newGame.playRound()




// //            === Practicing Test Casess ===


// //Create test cases for creating our deck. Based on how I wrote our suits array we would expect 2 of Clubs in position 0 and Ace of Clubs in the last position
// // Test all deck functionality: creation, shuffling, and dealing
// const gameDeck = new Deck();

// // Test initial deck creation
// console.log("Initial deck:");
// console.log("First card:", gameDeck.cards[0].getCardName());  // Should show "2 of Diamonds"
// console.log("Last card:", gameDeck.cards[gameDeck.cards.length - 1].getCardName()); // Should show "Ace of Clubs"

// // Test shuffling
// console.log("\nBefore shuffle, first three cards:");
// console.log(gameDeck.cards[0].getCardName());
// console.log(gameDeck.cards[1].getCardName());
// console.log(gameDeck.cards[2].getCardName());

// gameDeck.shuffle(); // Now shuffle the deck

// console.log("\nAfter shuffle, first three cards:");
// console.log(gameDeck.cards[0].getCardName());
// console.log(gameDeck.cards[1].getCardName());
// console.log(gameDeck.cards[2].getCardName());

// // Test dealing
// console.log("\nDealing cards:");
// const hands = gameDeck.dealCards();
// console.log("Player 1's first card:", hands.player1Cards[0].getCardName());
// console.log("Player 2's first card:", hands.player2Cards[0].getCardName());

// console.log("\n===== PLAYER CLASS TESTS =====");
// // Create a new deck and deal cards for player tests
// const testDeck = new Deck();
// testDeck.shuffle();
// const dealtCards = testDeck.dealCards();

// // Create a player with their cards
// const player1 = new Player(dealtCards.player1Cards);

// // Test 1: Check if player received correct number of cards
// console.log("Test 1 - Player deck size:", player1.playerDeck.length);

// // Test 2: Play three cards and check results
// console.log("\nTest 2 - Playing three cards:");
// console.log("First card played:", player1.playTopCard().getCardName());
// console.log("Second card played:", player1.playTopCard().getCardName());
// console.log("Third card played:", player1.playTopCard().getCardName());

// // Test 3: Check remaining deck size after playing cards
// console.log("\nTest 3 - Remaining deck size:", player1.playerDeck.length);





