class Artist {
constructor(name,age,genre,label){
    // you will need to decide the the data types will be
    this.name = name;
    this.age - age;
    this.genre = genre
    this.label = label;
    this.albums = [];
    this.songs = []
    this.image = ''
    this.instagram = null;
 }
addAlbum(album) {
    this.albums.push(album)
    console.log(`This is another ${album} for ${this.name}`)
}
addSong(song){
    this.songs.push(song)
    console.log(`This is another ${song} for ${this.name}`)

}

addImage(imageLink) {
    this.image = imageLink;
}
addIG(ursename) {
    this.instagram = username;
}

}





// this is an instance of the artist class
const drake = new Artist('Drake', '33', 'hip hop', 'cash money records');
const Hozier = new Artist('Hozier', '99', 'rock', 'cash money records');
//const carlCox = new Artist('Carl Cox',)

// look up an artist
// find 2 albums and aa those albums
//find 2 songs and add those songs
// find an image and copy the image url, add image
// find their IG username and add username

const rihanna = new Artist('rihanna', '32', 'r&b', 'cash money records')

rihanna.addAlbum("Good girls gone bad");
rihanna.addAlbum("Loud")
rihanna

// addName(name){
//     this.name.push('Rihanna')
//     console.log(`This is  ${this.name}`)

// }
// addAlbum(album) {
//     this.albums.push("Good Girls Gone Bad")
//     this.albums.push("Loud")

//     console.log(`This is another ${album}`)
// }
