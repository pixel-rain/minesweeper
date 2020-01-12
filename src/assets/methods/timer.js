export default function timer() {
    this.interval = setInterval(() => {
        if (!document.hidden && !this.timeStop) { //to stop the timer when the tab is hidden
            this.time++;   
        }
        if (this.time === 999) {
            this.timeStop = true;
        }
        }, 1000);
}
