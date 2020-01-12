export default function calculateVicinity(i) {
    let vicinity;
    const leftIndexes = this.size === "small" ? [0, 9, 18, 27, 36, 45, 54, 63, 72] : this.size === "medium" ? 
            [0, 16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240] : 
            [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450];
    const rightIndexes = this.size === "small" ? [8, 17, 26, 35, 44, 53, 62, 71, 80] : this.size === "medium" ?
            [15, 31, 47, 63, 79, 95, 111, 127, 143, 159, 175, 191, 207, 223, 239, 255] : 
            [29, 59, 89, 119, 149, 179, 209, 239, 269, 299, 329, 359, 389, 419, 449, 479];
    const limit = this.size === "small" ? 9 : this.size === "medium" ? 16 : 30;
    const filterLimit = this.size === "small" ? 80 : this.size === "medium" ? 255 : 479;
    if (leftIndexes.includes(i)) {
        vicinity = [i + 1, i - limit + 1, i - limit, i + limit, i + limit + 1];  
    }
    else if (rightIndexes.includes(i)) {
        vicinity = [i - 1, i - limit, i - limit - 1, i + limit - 1, i + limit];  
    }
    else {
        vicinity = [i - 1, i + 1, i - limit + 1, i - limit, i - limit - 1, i + limit - 1, i + limit, i + limit + 1];  
    }
    vicinity = vicinity.filter(vIndex => vIndex >= 0 && vIndex <= filterLimit);
    return vicinity;   
}
