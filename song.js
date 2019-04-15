/*
Modification Log
Description                     Date Modified       Author                  Comments
Assignment # 1 - Datatypes      14-Apr-2019         Kaustav Debnath         Favorite Song Attributes
*/

var AddFavoriteSong = function(title, recordedYear, releaseYear, duration, history, personnel){
    // this sets the title in the constructor
    this.title = title;
    // this sets the recordedYear in the constructor
    this.recordedYear = recordedYear;
    // this sets the releaseYear in the constructor
    this.releaseYear = releaseYear;
    // this sets the song duration in the constructor
    this.duration = duration;
    // this sets the history of the song in the constructor
    this.history = history;
    // this sets the personnel in the constructor
    this.personnel = personnel;
    // this.awards = awards;
    this.displayDetails = function(){
        console.log("Song Title - "+ this.title);
        console.log("Recorded Year - "+ this.recordedYear);
        console.log("Release Year - "+ this.releaseYear);
        console.log("Duration - "+ this.duration);
        console.log("History of Song - "+ this.history);
        if(this.personnel.length > 0){
            console.log("Artistes - ")
            this.personnel.forEach(function(entry) {
                console.log("\n"+entry);
            });
        }
        
        // console.log("Awards - "+this.awards);
    }
}
// awards awarded to the song
var awards = {
    US:["BillBoard Hot 100","Mainstream Rock Billboard"],
    UK: ["Rock and Metal","Singles"],
    AU:"ARIA",
    NL:"Single Top 100"
}
// instantiating my favorite song by calling the template function
var myFavoriteSong = new AddFavoriteSong(
    "Sweet Child o' Mine",
    1987,
    1988,
    "5 mins 56 seconds",
    "Slash has been quoted as having an initial disdain for the song due to its roots as simply a \"string skipping\" exercise and a joke at the time.", 
    ["W. Axl Rose","Slash","Izzy Stradlin","Duff \"Rose\" McKagan", "Steven Adler"]
    
    );
// this displays all the attributes of the song
myFavoriteSong.displayDetails();
// additional boolean attribute set here
myFavoriteSong.isAwarded = true;
// awards object attribute set here
myFavoriteSong.awards = awards;
// checks if this song is awarded and then displays the awards won in UK
console.log(myFavoriteSong.isAwarded ? ("Awards won by this song in UK - "+myFavoriteSong.awards.UK):"This song is not awarded");
