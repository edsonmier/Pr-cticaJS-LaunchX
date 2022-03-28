
async function connectToApi() {
    let currentEntry = sessionStorage.getItem('pokemonEntry');
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentEntry}`);
    const pokemon = await response.json();
    document.getElementById("pokemonNumber").textContent = `Número #${pokemon.id}`;
    document.getElementById("pokemonName").textContent = `${pokemon.name.toUpperCase()}`;
    document.getElementById("pokemonSprite").src = `${pokemon.sprites.other.home.front_default}`;
    document.getElementById("firstType").textContent = `${pokemon.types[0].type.name.toUpperCase()}`;
    setType(`${pokemon.types[0].type.name.toLowerCase()}`, "firstType-box-space", "firstType");
    if (pokemon.types.length > 1) {
        document.getElementById("secondType-box").style.display = 'flex';
        document.getElementById("secondType").textContent = `${pokemon.types[1].type.name.toUpperCase()}`;
        setType(`${pokemon.types[1].type.name.toLowerCase()}`, "secondType-box-space", "secondType");
    } else {
        document.getElementById("secondType-box").style.display = 'none';
    }
    document.getElementById("weight").textContent = `${calcWeight(pokemon.weight)} kg`; 
    document.getElementById("height").textContent = `${calcWeight(pokemon.height)} m`; 
}

connectToApi();

function setType(type, typeBox, index){
    if (type == "normal") {
        document.getElementById(typeBox).style.backgroundColor = "#9A9DA1";
        document.getElementById(index).textContent = "normal".toUpperCase();
    } else if (type == "bug"){
        document.getElementById(typeBox).style.backgroundColor = "#9DC130";
        document.getElementById(index).textContent = "bicho".toUpperCase();
    } else if (type == "dark"){
        document.getElementById(typeBox).style.backgroundColor = "#5F606D";
        document.getElementById(index).textContent = "siniestro".toUpperCase();
    } else if (type == "dragon"){
        document.getElementById(typeBox).style.backgroundColor = "#0773C7";
        document.getElementById(index).textContent = "dragon".toUpperCase();
    } else if (type == "electric"){
        document.getElementById(typeBox).style.backgroundColor = "#EDD53F";
        document.getElementById(index).textContent = "eléctrico".toUpperCase();
    } else if (type == "fairy"){
        document.getElementById(typeBox).style.backgroundColor = "#EF97E6";
        document.getElementById(index).textContent = "hada".toUpperCase();
    } else if (type == "fighting"){
        document.getElementById(typeBox).style.backgroundColor = "#D94256";
        document.getElementById(index).textContent = "lucha".toUpperCase();
    } else if (type == "fire"){
        document.getElementById(typeBox).style.backgroundColor = "#F8A54F";
        document.getElementById(index).textContent = "fuego".toUpperCase();
    } else if (type == "flying"){
        document.getElementById(typeBox).style.backgroundColor = "#9BB4E8";
        document.getElementById(index).textContent = "volador".toUpperCase();
    } else if (type == "ghost"){
        document.getElementById(typeBox).style.backgroundColor = "#6970C5";
        document.getElementById(index).textContent = "fantasma".toUpperCase();
    } else if (type == "grass"){
        document.getElementById(typeBox).style.backgroundColor = "#5DBE62";
        document.getElementById(index).textContent = "planta".toUpperCase();
    } else if (type == "ground"){
        document.getElementById(typeBox).style.backgroundColor = "#D78555";
        document.getElementById(index).textContent = "tierra".toUpperCase();
    } else if (type == "ice"){
        document.getElementById(typeBox).style.backgroundColor = "#7ED4C9";
        document.getElementById(index).textContent = "hielo".toUpperCase();
    } else if (type == "poison"){
        document.getElementById(typeBox).style.backgroundColor = "#B563CE";
        document.getElementById(index).textContent = "veneno".toUpperCase();
    } else if (type == "psychic"){
        document.getElementById(typeBox).style.backgroundColor = "#F87C7A";
        document.getElementById(index).textContent = "psíquico".toUpperCase();
    } else if (type == "rock"){
        document.getElementById(typeBox).style.backgroundColor = "#CEC18C";
        document.getElementById(index).textContent = "roca".toUpperCase();
    } else if (type == "steel"){
        document.getElementById(typeBox).style.backgroundColor = "#5596A4";
        document.getElementById(index).textContent = "acero".toUpperCase();
    } else if (type == "water"){
        document.getElementById(typeBox).style.backgroundColor = "#559EDF";
        document.getElementById(index).textContent = "agua".toUpperCase();
    }
}

function calcWeight(weight){
    let result = weight * 0.10;
    return result;
}