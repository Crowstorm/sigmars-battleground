export const setNumberOfDice = (value) => {
    return {
        type: 'SET_NUMBER_OF_DICE',
        value
    }
}

export const rollTheDice = () => {
    return function (dispatch, getState) {
        let numberOfDice = getState().dice.numberOfDice;
        let rolledDice = [];
        let one = 0, two = 0, three = 0, four = 0, five = 0, six = 0;
        for (let i = 0; i < numberOfDice; i++) {
            rolledDice.push(singleDiceRoll());
        };
        rolledDice.forEach((dice) => {
            switch (dice) {
                case 1:
                    one++;
                    break;
                case 2:
                    two++;
                    break;
                case 3:
                    three++;
                    break;
                case 4:
                    four++;
                    break;
                case 5:
                    five++;
                    break;
                case 6:
                    six++;
                    break;
            }
        })
        dispatch({
            type: 'ROLLED_DICE',
            rolledDice,
            one,
            two,
            three,
            four,
            five,
            six
        })

    }
}

export const rerollDice = (diceValue) => {
    return function (dispatch, getState) {
        let value = diceValue;
        let rolledDice = getState().dice.rolledDice;
        rolledDice = rolledDice.filter(dice => dice > value);
        console.log(rolledDice);

        let diceToReroll = getState().dice.numberOfDice - rolledDice.length;
        console.log(diceToReroll);

        let one = 0, two = 0, three = 0, four = 0, five = 0, six = 0;
        for (let i = 0; i < diceToReroll; i++) {
            rolledDice.push(singleDiceRoll());
        };

        rolledDice.forEach((dice) => {
            switch (dice) {
                case 1:
                    one++;
                    break;
                case 2:
                    two++;
                    break;
                case 3:
                    three++;
                    break;
                case 4:
                    four++;
                    break;
                case 5:
                    five++;
                    break;
                case 6:
                    six++;
                    break;
            }
        })
        dispatch({
            type: 'ROLLED_DICE',
            rolledDice,
            one,
            two,
            three,
            four,
            five,
            six
        })
    }
}

const singleDiceRoll = () => {
    return Math.floor(Math.random() * 6 + 1);
}