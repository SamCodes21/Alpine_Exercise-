alert("utilities.js loaded");
function randomName() {
  return {
    names: [
        "Jake",
        "Noah",
        "Robert",
        "Sean",
        "Gerald",
        "Katie",
        "Logan",
        "Josh",
        "Magnus",
        "Mandy",
    ], 
    newName: "",

    selectName () {
        const randomIndex = Math.floor(Math.random() * this.names.length);
        this.newName = this.names[randomIndex];
        alert(this.newName);
    }
  };  
}
