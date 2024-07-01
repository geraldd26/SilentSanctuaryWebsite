document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    
    const music = [
        {
            id: 1,
            title: "Rebound",
            singer: "Silent Sanctuary",
            song: "Silent Sanctuary - Rebound (Official Lyric Video).mp3"
        },
        {
            id: 2,
            title: "Sandali Lang",
            singer: "Silent Sanctuary",
            song: "Silent Sanctuary - Sandali Lang (Official Lyric Video).mp3"
        },
        {
            id: 3,
            title: "Ikaw Lamang",
            singer: "Silent Sanctuary",
            song: "Silent Sanctuary - Ikaw Lamang (Official Lyric Video) copy.mp3"
        }
    ];

    console.log("Music array:", music);

    for (let i = 0; i < music.length; i++) {
        console.log(`Adding song: ${music[i].title}`);
        document.getElementById('song-list').innerHTML +=
        `<tr>
            <td>${music[i].id}</td>
            <td>${music[i].title}</td>
            <td>${music[i].singer}</td>
        </tr>`;
    }

    console.log("Finished populating song list.");
});