export default function discloseCell(index, hiddenOnly) {
  if (this.isLost || this.isWon) return;
  if (this.time === 0) { //start the timer
      this.timeStop = false;
  }
  if (this.field[index].hidden) {
    if (!this.field[index].marked) {
      this.clicked = true; //to briefly change the face emoticon
      setTimeout(() => this.clicked = false, 200);
      this.field[index].hidden = false;
      if (this.field[index].content === "") {
        let vicinity = this.calculateVicinity(index);
        while (vicinity.length !== 0) {
          vicinity.forEach(vIndex => this.field[vIndex].hidden = this.field[vIndex].marked ? true : false);
          vicinity = vicinity.filter(vIndex => this.field[vIndex].content === "");
          let temp = [];
          vicinity.forEach(vIndex => temp.push(this.calculateVicinity(vIndex)));
          vicinity = temp.reduce((acc, val) => acc.concat(val), []).filter(vIndex => this.field[vIndex].hidden);
          vicinity = [...new Set(vicinity)]; //remove duplicates
        }
      }
      else if (this.field[index].content === "💣") {
        this.isLost = true;
        this.timeStop = true;
        this.$forceUpdate(); //to change the field colors and show all the mines
      }
    }
  }
  else if (hiddenOnly !== true) {
    this.riskyBunch(index);
  }
}
