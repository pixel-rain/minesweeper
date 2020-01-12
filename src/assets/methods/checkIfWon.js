import storageAvailable from '../storageAvailable'

export default function checkIfWon(size) {
    if (this.isWon) return;
    const mineAmount = size === "small" ? 10 : size === "medium" ? 40 : 99;
    let numHidden = 0;
    for (let cell of this.field) {
        if (cell.hidden) numHidden++;
    }
    if (numHidden === mineAmount) {
        if (storageAvailable('localStorage')) {
        const request = size === "small" ? "recordEasy" : size === "medium" ? "recordIntermediate" : "recordAdvanced";
        const currentRecord = localStorage.getItem(request);
        if (currentRecord) {
            if (!isNaN(currentRecord) && Number(currentRecord) > this.time) {
            localStorage.setItem(request, this.time);
            }
        }
        else {
            localStorage.setItem(request, this.time);
        }
        }
        this.renewRecords();
        this.isWon = true;
        this.mines = 0;
        this.timeStop = true;
        for (let cell of this.field) {
        if (cell.hidden && !cell.marked) {
            cell.marked = true;
        }
        }      
    }      
}
