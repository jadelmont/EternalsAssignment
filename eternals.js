const eternals = [
    {
        char_name: "Thena",
        skills: ["flight", "strength", "pyrokinesis"],
        pic: "images/thena.png"
    },
    {
        char_name: "Ikaris",
        skills: ["speed", "telepathy", "sword"],
        pic: "images/ikaris.png"
    },
    {
        char_name: "Sersi",
        skills: ["matter manipulation", "empathy", "immortality"],
        pic: "images/sersi.png"
    },
    {
        char_name: "Kingo",
        skills: ["energy projection", "martial Arts", "immortality"],
        pic: "images/kingo.png"
    },
    {
        char_name: "Phastos",
        skills: ["technopathy", "engineering", "intellect"],
        pic: "images/phastos.png"
    }
];


let charactersDisplayed = false;


function displayCharacters() {
    const charactersDiv = document.querySelector('#characters');

    if (charactersDisplayed) {
        charactersDiv.innerHTML = ''; 
        charactersDisplayed = false; 
    } else {
        charactersDiv.innerHTML = ''; 

        eternals.forEach(character => {
            const characterElement = document.createElement('div');

            const charName = document.createElement('p');
            charName.textContent = `Name: ${character.char_name}`;
            characterElement.appendChild(charName);

            const charSkills = document.createElement('p');
            charSkills.textContent = `Skills: ${character.skills.join(', ')}`;
            characterElement.appendChild(charSkills);

            const charImage = document.createElement('img');
            charImage.src = character.pic;
            charImage.alt = character.char_name;
            characterElement.appendChild(charImage);

            charactersDiv.appendChild(characterElement);
        });

        charactersDisplayed = true;
    }
}


function findCharacters() {
    const attributeInput = document.querySelector('#attributeInput').value;
    const resultsDiv = document.querySelector('#results');
    resultsDiv.innerHTML = ''; 

    eternals.forEach(character => {
        const foundSkill = character.skills.find(skill => skill === attributeInput); 
        if (foundSkill) {
            const resultElement = document.createElement('div');

            const resultName = document.createElement('p');
            resultName.textContent = `${character.char_name} has the skill: ${foundSkill}`;
            resultElement.appendChild(resultName);

            const resultImage = document.createElement('img');
            resultImage.src = character.pic;
            resultImage.alt = character.char_name;
            resultElement.appendChild(resultImage);

            resultsDiv.appendChild(resultElement);
        }
    });

    if (resultsDiv.innerHTML === '') {
        resultsDiv.textContent = `No characters found with the skill: ${attributeInput}`;
    }
}


document.querySelector('#displayCharactersButton').addEventListener('click', displayCharacters);
document.querySelector('#findCharactersButton').addEventListener('click', findCharacters);
