const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0])
avengers.splice(0, 0, "IRONMAN")
console.log(avengers)
console.log(avengers.length)


/*const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer")
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length -1])*/

/*const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop()
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[rickAndMortyCharacters.length -1])*/

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1, 1)
console.log(rickAndMortyCharacters)

