
async function connectToApi() {
    let currentEntry = sessionStorage.getItem('pokemonEntry');
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentEntry}`);
    const pokemon = await response.json();
    sessionStorage.setItem("pokemonId", pokemon.id);
    document.getElementById("pokemonNumber").textContent = `NÚMERO #${pokemon.id}`;
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
    document.getElementById("weight").textContent = `${calcMeasure(pokemon.weight)} kg`; 
    document.getElementById("height").textContent = `${calcMeasure(pokemon.height)} m`; 
    document.getElementById("hp").textContent = pokemon.stats[0].base_stat;
    document.getElementById("atk").textContent = pokemon.stats[1].base_stat;
    document.getElementById("def").textContent = pokemon.stats[2].base_stat;
    document.getElementById("sp-atk").textContent = pokemon.stats[3].base_stat;
    document.getElementById("sp-def").textContent = pokemon.stats[4].base_stat;
    document.getElementById("spe").textContent = pokemon.stats[5].base_stat;
    let totalStats = 255;
    document.getElementById("hp-bar").style.width = `${(parseInt(pokemon.stats[0].base_stat) / totalStats)*100}%`;
    document.getElementById("atk-bar").style.width = `${(parseInt(pokemon.stats[1].base_stat) / totalStats)*100}%`;
    document.getElementById("def-bar").style.width = `${(parseInt(pokemon.stats[2].base_stat) / totalStats)*100}%`;
    document.getElementById("sp-atk-bar").style.width = `${(parseInt(pokemon.stats[3].base_stat) / totalStats)*100}%`;
    document.getElementById("sp-def-bar").style.width = `${(parseInt(pokemon.stats[4].base_stat) / totalStats)*100}%`;
    document.getElementById("spe-bar").style.width = `${(parseInt(pokemon.stats[5].base_stat) / totalStats)*100}%`;
    setMoves(pokemon.moves);
    setAbilities(pokemon.abilities);
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

function calcMeasure(measure){
    let result = (measure * 0.10).toFixed(1);
    return result;
}

function setMoves(list){
    for (let i = 0; i < list.length; i++) {
        createMove(list[i])
    }
}

function createMove(element) {
    var ul = document.getElementById("moveList");
    var li = document.createElement("li");
    var text = document.createElement("h3");
    text.textContent = (`${element.move.name}`.replace("-"," ")).toUpperCase();
    li.appendChild(text);
    ul.appendChild(li);
}

function setAbilities(list){
    for (let i = 0; i < list.length; i++) {
        createAbility(list[i])
    }
}

function createAbility(element){
    var ul = document.getElementById("abilityList");
    var li = document.createElement("li");
    var text = document.createElement("h3");
    text.textContent = (`${element.ability.name}`.replace("-"," ")).toUpperCase();
    li.appendChild(text);
    ul.appendChild(li);
}


function goToPast(){
    sessionStorage.setItem('pokemonEntry', sessionStorage.getItem("pokemonId")-1);
    location.reload();
}

function goToNext(){
    sessionStorage.setItem('pokemonEntry', `${parseInt(sessionStorage.getItem("pokemonId"))+1}`);
    location.reload();
}