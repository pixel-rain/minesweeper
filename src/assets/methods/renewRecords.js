import storageAvailable from '../storageAvailable'

export default function renewRecords() {
    if (storageAvailable('localStorage')) {
        this.recordEasy = localStorage.getItem('recordEasy') ? localStorage.getItem('recordEasy') : '---';
        this.recordIntermediate = localStorage.getItem('recordIntermediate') ? localStorage.getItem('recordIntermediate') : '---';
        this.recordAdvanced = localStorage.getItem('recordAdvanced') ? localStorage.getItem('recordAdvanced') : '---';
    }
}
