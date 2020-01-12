export default function changeRecordsVisibility() {
    this.showRecords = this.showRecords ? false : true;
    this.timeStop = (this.timeStop && this.time !== 0 && !this.isWon && !this.isLost) ? false : true;
    this.buttonText = this.showRecords ? "Back to Game" : "Records & Tips";
  }
