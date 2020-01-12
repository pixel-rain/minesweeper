export default function riskyBunch(i) {
    const bombsNumber = Number(this.field[i].content); //clicking on a bomb be made impossible with gameover
    const vicinity = this.calculateVicinity(i);
    let numMarked = 0;
    for (let vIndex of vicinity) {
        if (this.field[vIndex].marked) numMarked++;
    }
    if (numMarked === bombsNumber) {
        for (let vIndex of vicinity) {
        this.discloseCell(vIndex, true)
        }
    }
}
