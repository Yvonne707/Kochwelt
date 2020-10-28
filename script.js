let cousines = ['Grichscher Bauernsalat', 'Französische Coissants', 'Rumänische Bohnensuppe'];


//loadRecipe(2);

loadRecipe(id) {
    document.getElementById('headline').innerHTML = cousines[id];
}

function show(){
    let portions = +document.getElementById('portions').value;
    let tomatos = 125 * portions;
    document.getElementById('tomatos').innerHTML = tomatos;
}   