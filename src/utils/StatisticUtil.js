const generateObject = (minutiae, date) => {
    let character = {};
    let soma = 0;
    for (const finger in minutiae) {
        const element = minutiae[finger];
        if(element.characters != null){
            
            element.characters.forEach(char => {
                character[`${char}`] = character[`${char}`] == null ? 1 : character[`${char}`] + 1;
                soma++;
            });
        }
    }

    return {date, characters: character, soma};
}

module.exports = {
    generateObject
}