
let cousines = [{
    'name': 'Griechscher Bauernsalat', 'ingredients': [
        { 'name': ' Salatgurke', 'amount': 1 },
        { 'name': ' Paprikaschotin', 'amount': 1 },
        { 'name': ' g Tomate(n)', 'amount': 125 },
        { 'name': ' Zwiebel(n)', 'amount': 2 },
        { 'name': ' g Schafskäse(n)', 'amount': 200 },
        { 'name': ' Glas Oliven(ca. 1000g), schwarze', 'amount': 1 },
        { 'name': ' Salz und Pfeffer', 'amount': '' },
        { 'name': ' Zitrone(n)', 'amount': 1 },
        { 'name': ' ml Olivenöl', 'amount': 125 },
        { 'name': ' Oregano', 'amount': '' }

    ]
},
{
    'name': 'Französische Coissants', 'ingredients': [
        { 'name': ' gr Frische Hefe', 'amount': 20 },
        { 'name': ' gr Zucker', 'amount': 15 },
        { 'name': ' gr Salz', 'amount': 15 },
        { 'name': ' gr geschmolze Butter', 'amount': 40 },
        { 'name': ' Eigelb ( zum bepinseln)', 'amount': 1 },
        { 'name': ' ml Wasser', 'amount': 120 },
        { 'name': ' ml Milch', 'amount': 120 },
        { 'name': ' gr Mehl (Typ 45)', 'amount': 500 },
        { 'name': ' gr Butter (gutes, keine Margarine)', 'amount': 260 },
        { 'name': ' Zartbitterschokolade', 'amount': '' }

    ]
},
{
    'name': 'Rumänische Bohnensuppe', 'ingredients': [


        { 'name': ' Salatgurke', 'amount': 1 },
        { 'name': ' Salz und Pfeffer', 'amount': '' },
        { 'name': ' Paprikaschotin', 'amount': 1 },
        { 'name': ' g Tomate(n)', 'amount': 125 },
        { 'name': ' ml Olivenöl', 'amount': 125 },
        { 'name': ' Zwiebel(n)', 'amount': 2 },
        { 'name': ' Glas Oliven(ca. 1000g), schwarze', 'amount': 1 },
        { 'name': ' Zitrone(n)', 'amount': 1 },
        { 'name': ' Oregano', 'amount': '' }

    ]
}
];

function loadRecipe(id) { //Warum Id in der Klammer, auf was bezieht sich id?
    document.getElementById('headline').innerHTML = cousines[id].name; // warum id?
    document.getElementById('setPortionsId').setAttribute('onclick', 'calculatePortions('+ id +')')
    hideMenu();
    for (i = 0; i < 10; i++) {
        document.getElementById(i).innerHTML = '<span id="amount' + i +'">' + cousines[id].ingredients[i].amount + '</span>' + cousines[id].ingredients[i].name;
    }
}

function calculatePortions(id) {
    let portions = +document.getElementById('portions').value;
    for (i=0; i < 10; i++){
        document.getElementById('amount'+ i).innerHTML = cousines[id].ingredients[i].amount * portions;
    
    }
}

// Mobile Menu Show and Hide functions
function showMenu() {

    document.getElementById('menu').classList.add('show-overlay-menu');
}

function hideMenu() {
    document.getElementById('menu').classList.remove('show-overlay-menu');
}
// End of Mobile Menu Show and Hide functions