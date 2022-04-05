// Character list. Each house has a name and a code
const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
];
  
// Return an array of characters belonging to a house
const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
        return ["Robert", "Stannis", "Renly"];
        case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
        default:
        return []; // Empty array
    }
};

function fillList() {
    var select = document.getElementById('house')
    houses.forEach(house => {
        var option = document.createElement('option')
        option.value = house.code
        option.appendChild(document.createTextNode(house.name))
        select.appendChild(option)
    });
}

function changeInSelect() {
    var select = document.getElementById('house')
    var characters = getCharacters(select.value)
    var list = document.getElementById('characters')
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    characters.forEach(character => {
        var listElem = document.createElement('li')
        listElem.appendChild(document.createTextNode(character))
        list.appendChild(listElem)
    });
}

fillList()