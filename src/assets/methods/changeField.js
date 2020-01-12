export default function changeField(size = this.size) {
    this.time = 0;
    this.timeStop = true;
    this.isWon = false;
    this.isLost = false;
    this.showRecords = false;
    this.buttonText = "Records & Tips";
    this.makeField(size);
}
