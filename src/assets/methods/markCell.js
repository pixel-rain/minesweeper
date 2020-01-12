export default function markCell(index) {
    if (this.isLost || this.isWon) return;
    if (this.field[index].hidden) {
        this.mines = (!this.field[index].marked && !this.field[index].questioned) ? this.mines - 1 : this.field[index].marked ? this.mines + 1 : this.mines;
        this.field[index].marked = (!this.field[index].marked && !this.field[index].questioned) ? true : false;
        this.field[index].questioned = (this.field[index].marked || this.field[index].questioned) ? false : true;
    }
    else {
        this.riskyBunch(index);
    }
}
