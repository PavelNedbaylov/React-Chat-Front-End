export default function durationToTime(duration) {
    const h = parseInt(duration / 60)
    const m = parseInt(duration % 60 / 60)
    const s = parseInt(duration % 60 % 60)
    return (h && h + ':') + m + ':' + ('0'+s).slice(-2)
}