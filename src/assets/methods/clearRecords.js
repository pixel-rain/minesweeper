import storageAvailable from '../storageAvailable'
export default function clearRecords() {
    if (storageAvailable('localStorage')) {
        localStorage.removeItem('recordEasy');
        localStorage.removeItem('recordIntermediate');
        localStorage.removeItem('recordAdvanced');
    }
    this.recordEasy = "---";
    this.recordIntermediate = "---";
    this.recordAdvanced = "---";
}
