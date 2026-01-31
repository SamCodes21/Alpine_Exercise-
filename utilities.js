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
        this.newName = this.names[
          Math.floor(Math.Random() * this.names.length)
        ];
        alert(this.newName);
    }
  };  
}
