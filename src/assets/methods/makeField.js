export default function makeField(size) {
    this.renewRecords();
    const mineIndexes = [];
    const rndLimit = size === "small" ? 81 : size === "medium" ? 256 : 480;
    let mineAmount = size === "small" ? 10 : size === "medium" ? 40 : 99;
    this.mines = mineAmount;
    while (mineAmount !== 0) {
        let roll = Math.floor((Math.random() * rndLimit));
        if (!mineIndexes.includes(roll)) {
            mineAmount--;
            mineIndexes.push(roll);
        }
    }

    const field = [];
    const iLimit = size === "small" ? 9 : 16;
    const jLimit = size === "small" ? 9 : size === "medium" ? 16 : 30;
    let placeCounter = 0;
    for (let i = 0; i < iLimit; i++) {
        let row = [];
        for (let j = 0; j < jLimit; j++) {
            row.push(mineIndexes.includes(placeCounter) ? '💣' : '');
            placeCounter++;
        }
        field.push(row);
    }

    for (let i = 0; i < iLimit; i++) {
        for (let j = 0; j < jLimit; j++) {
            let neighbors = 0;
            if (i - 1 >= 0 && j - 1 >= 0 && field[i - 1][j - 1] === "💣") neighbors++;
            if (i + 1 < iLimit && j - 1 >= 0 && field[i + 1][j - 1] === "💣") neighbors++;
            if (i - 1 >= 0 && j + 1 < jLimit && field[i - 1][j + 1] === "💣") neighbors++;
            if (i - 1 >= 0 && field[i - 1][j] === "💣") neighbors++;
            if (i + 1 < iLimit && field[i + 1][j] === "💣") neighbors++;
            if (j - 1 >= 0 && field[i][j - 1] === "💣") neighbors++;
            if (j + 1 < jLimit && field[i][j + 1] === "💣") neighbors++;
            if (i + 1 < iLimit && j + 1 < jLimit && field[i + 1][j + 1] === "💣") neighbors++;
            if (neighbors > 0 && field[i][j] !== '💣') field[i][j] = neighbors;
        }
    }

    let temp = field.reduce((acc, val) => acc.concat(val), []);
    this.field = temp.map(val => {return {content: val, hidden: true, marked: false, questioned: false}});      
}
