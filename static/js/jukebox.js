/**
 * Retro Audio Jukebox & Chiptune Track Selector.
 */
class AudioJukebox {
    constructor() {
        this.tracks = [
            { id: 1, title: "8-Bit Anthem 🇮🇳", tempo: 120 },
            { id: 2, title: "Synthwave Sunset 🌅", tempo: 110 },
            { id: 3, title: "Pixel Parade 🎮", tempo: 130 }
        ];
        this.currentTrackIndex = 0;
    }

    selectTrack(index) {
        if (index >= 0 && index < this.tracks.length) {
            this.currentTrackIndex = index;
        }
        return this.tracks[this.currentTrackIndex];
    }
}
const jukebox = new AudioJukebox();
