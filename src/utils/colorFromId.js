
export default function colorFromId(id) {
    id = id % 10;
    switch (id) {
        case 0: return '102, 255, 102'
        case 2: return '0, 255, 255'
        case 3: return '51, 153, 255'
        case 4: return '153, 204, 255'
        case 5: return '153, 153, 255'
        case 6: return '255, 255, 51'
        case 7: return '255, 153, 102'
        case 8: return '153, 102, 204'
        case 9: return '255, 102, 102'
        default: return '102, 255, 102'
    }
}