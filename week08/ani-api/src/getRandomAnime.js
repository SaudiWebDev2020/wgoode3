export default function getRandomAnime() {
    const titles = [
        "Boku no Hero Academia", 
        "Cowboy Bebop", 
        "Katanagatari", 
        "FLCL", 
        "Demon Slayer", 
        "Fate/Zero", 
        "Detective Conan", 
        "Mahou Shoujo Madoka★Magica", 
        "Monster", 
        "Ginga Eiyuu Densetsu", 
        "Lucky☆Star", 
        "Jojo's Bizarre Adventure",
        "Heartcatch Precure!"
    ];
    return titles[Math.floor(Math.random() * titles.length)];
}
