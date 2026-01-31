function randomName (arg) {
    const randomIndex = Math.floor(Math.random() * arg.length)

    return arg[randomIndex];
}

const names = ["Jake", "Robert", "Sean", "Gerald", "Katie", "Logan", "Josh", "Magnus", "Mandy", "Janice" ];

const selectedName = getRandomName(names);