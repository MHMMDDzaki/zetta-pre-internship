const songs = [
  {
    id: 1,
    title: "Michizure",
    artist: "Hoshimachi Suisei",
    genre: "Pop, Rock",
    duration: "3:14",
  },
  {
    id: 2,
    title: "Telepathy",
    artist: "YOASOBI",
    genre: "Pop, Electronic",
    duration: "3:15",
  },
  {
    id: 3,
    title: "Jackpot Sad Girl",
    artist: "Nightcord at 25",
    genre: "Electronica, Vocaloid",
    duration: "3:04",
  },
  {
    id: 4,
    title: "DSCF",
    artist: "Nightcord at 25",
    genre: "Electronica, Vocaloid",
    duration: "4:28",
  },
  {
    id: 5,
    title: "Parasol Cider",
    artist: "More More Jump!",
    genre: "Pop, Anime",
    duration: "3:33",
  },
  {
    id: 6,
    title: "Heart Forecast!",
    artist: "More More Jump!",
    genre: "Pop, Anime",
    duration: "3:22",
  },
  {
    id: 7,
    title: "Roki",
    artist: "Leo need",
    genre: "Rock, Vocaloid",
    duration: "3:48",
  },
  {
    id: 8,
    title: "Stella",
    artist: "Leo need",
    genre: "Rock, Vocaloid",
    duration: "5:23",
  },
  {
    id: 9,
    title: "Gurenge",
    artist: "LiSA",
    genre: "Rock, Anime",
    duration: "3:58",
  },
  {
    id: 10,
    title: "Homura",
    artist: "LiSA",
    genre: "Rock, Anime",
    duration: "4:35",
  },
  {
    id: 11,
    title: "Bath Time Planetarium",
    artist: "HACHI",
    genre: "Pop, Electronic",
    duration: "4:19",
  },
  {
    id: 12,
    title: "Twilight Line",
    artist: "HACHI",
    genre: "Pop, Electronic",
    duration: "4:09",
  },
  {
    id: 13,
    title: "Shakunetsu Nite Junjo",
    artist: "Hoshimachi Suisei",
    genre: "Pop, Rock",
    duration: "3:49",
  },
  {
    id: 14,
    title: "Soiree",
    artist: "Hoshimachi Suisei",
    genre: "Pop, Electronic",
    duration: "3:48",
  },
  {
    id: 15,
    title: "Stellar stellar",
    artist: "Hoshimachi Suisei",
    genre: "Pop, Electronic",
    duration: "5:02",
  },
  {
    id: 16,
    title: "Ano Yume wo Nazotte",
    artist: "YOASOBI",
    genre: "Pop, Rock",
    duration: "4:01",
  },
  {
    id: 17,
    title: "Yoru ni Kakeru",
    artist: "YOASOBI",
    genre: "Electronica, Pop",
    duration: "4:23",
  },
  {
    id: 18,
    title: "Rex Incognito",
    artist: "Yu Peng Chen",
    genre: "Instrumental, Orchestra",
    duration: "21:34",
  },
  {
    id: 19,
    title: "Duel In The Mist",
    artist: "Yu Peng Chen",
    genre: "Instrumental, Orchestra",
    duration: "10:47",
  },
  {
    id: 20,
    title: "Kitsune Mask",
    artist: "Yu Peng Chen",
    genre: "Instrumental, Orchestra",
    duration: "12:55",
  },
];

function filterByArtist(musicArray, artistName) {
  // clean the input using toLowerCase to lowercase string and split it and turn it to array using split
  const sanitizedInput = artistName.toLowerCase().split(" ")

  // filter array that has the name
  return musicArray.filter((item) => {
    // clean each artist name from every whitespace
    const sanitizedArtist = item.artist.toLowerCase().replace(/\s+/g, "");

    // make sure the input is contained on each word
    return sanitizedInput.every((word) => sanitizedArtist.includes(word));
  });
}

function filterByGenre(musicArray, genre) {
 // clean input genre name from every whitespace
  const sanitizedGenre = genre.toLowerCase().replace(/\s+/g, "");

  // filter array that has the name
  return musicArray.filter((item) => {
   // clean each genre name from every whitespace
    const sanitizedItemGenre = item.genre.toLowerCase().replace(/\s+/g, "");
    // make sure the input is contained on each word
    return sanitizedItemGenre.includes(sanitizedGenre);
  });
}

function convertDurationToSeconds(duration) {
  // destructuring into minutes and second using split and change it's value from array to number
  const [minutes, seconds] = duration.split(":").map(Number);
  return minutes * 60 + seconds;
}

// initialization for debugging song that not go into playlist 
const notPlaylist = [];

function createRandomPlaylist(songsArray) {
 // initialization playlist that soon filled with songs
  const playlist = [];
  // initialization total duration of the playlist
  let playlistDuration = 0;

  // initialization of Set objects so each song is unique
  const addedSongs = new Set();

  // shuffle song by swapping it with the following element if math.random value positive
  const shuffledSongs = [...songsArray].sort(() => Math.random() - 0.5);

  // iterates song from the shuffled song
  for (const song of shuffledSongs) {
    // check the id of the current song if it's already added or not
    if (!addedSongs.has(song.id)) {
      // convert song duration to second using function above
      const songDurationInSeconds = convertDurationToSeconds(song.duration);
      // check the playlist song did not exceed the time limit of 1 hour
      if (playlistDuration + songDurationInSeconds < 60 * 60) {
        // store the song to playlist
        playlist.push(song);
        // store the duration of the song to total duration of the playlist
        playlistDuration += songDurationInSeconds;
        addedSongs.add(song.id);
      } else {
        // push the song that is not inputted to the notplaylist
        notPlaylist.push(song);
        // Stop adding songs if the playlist duration exceeds the limit
        // break;
      }
    }
  }
  // calculates total duration in minutes and second
  const totalDurationMinutes = Math.floor(playlistDuration / 60);
  const totalDurationSeconds = playlistDuration % 60;

  // format it to mm:ss
  const formattedTotalDuration = `${totalDurationMinutes}:${totalDurationSeconds
    .toString() // convert it to string
    .padStart(2, "0")}`; // specify the total duration of second, 2 represent for minimum length of the string
  
  // return the value as object that have attribute playlist and total duration
  return {
    playlist,
    totalDuration: formattedTotalDuration,
  };
}

// console.log(filterByArtist(songs, ""));
// console.log(filterByGenre(songs, "pop, rock"));
// const randomPlaylistInfo = createRandomPlaylist(songs);
// console.log("------------------------------------------------------------")
// console.log("Weeb Playlist")
// console.table(randomPlaylistInfo.playlist);
// console.log("Total Duration: " + randomPlaylistInfo.totalDuration);
// console.log("------------------------------------------------------------")
// console.log("Songs that are not added in the playlist")
// console.table(notPlaylist);