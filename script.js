
let cousines = [{
    'name': 'Griechscher Bauernsalat',
    'description': `Gurke waschen und ungeschält in dünne Scheiben oder Stücke schneiden. Paprika waschen, entkernen und in
    dünne Streifen schneiden.Tomaten waschen und achteln. Zwiebel schälen und in feine Ringe schneiden. Schafskäse würfeln und mit
    Oregano bestreuen. Oliven abgießen und mit Gurke, Paprika, Tomaten, Zwiebeln und Schafskäse in eine Schüssel
    geben. Olivenöl, Zitronensaft, Salz und Pfeffer zu einer Sauce verrühren und über den Salat gießen. Umrühren.` ,
     'ingredients': [
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
    'name': 'Rumänische Bohnensuppe mit Schinken', 'ingredients': [
        { 'name': ' kg Bohnen mit großem Korn', 'amount': 1 },
        { 'name': ' Salz und Pfeffer', 'amount': '' },
        { 'name': ' kg geräucherte Rippen', 'amount': 1 },
        { 'name': ' große getrocknete Zwiebel', 'amount': 1 },
        { 'name': ' Karotte', 'amount': 1 },
        { 'name': ' Dose Tomatenwürfel', 'amount': 1 },
        { 'name': ' Esslöffel Tomatenmark', 'amount': 3 },
        { 'name': ' Lorbeerblätter, Pfeffer, Salz', 'amount': '' },
        { 'name': ' Öl', 'amount': '' },
        { 'name': ' Thymian und getrockneter Dill', 'amount': '' }
    ]
},
{
    'name': 'Wok-Gemüse mit Kokossosse und Erdnüssen', 'ingredients': [
        { 'name': ' TL Reisessig', 'amount': 2 },
        { 'name': ' TL Sesamöl', 'amount': 2 },
        { 'name': ' TL Sojasauce', 'amount': 4 },
        { 'name': ' TL Hoisin-Sauce', 'amount': 1 },
        { 'name': ' TL Rohrzucker', 'amount': 2 },
        { 'name': ' TL Knoblauchpulver', 'amount': 2 },
        { 'name': ' TL Ingwer, gemahlen', 'amount': 2 },
        { 'name': ' Gramm asiatische Ramen-Nudeln (oder andere asiatische Nudeln)', 'amount': 500 },
        { 'name': ' TL Olivenöl', 'amount': 2 },
        { 'name': ' Knoblauchzehe, geschnitten', 'amount': 1 },
        { 'name': ' TL Ingwer, gemahlen', 'amount': 1 },
        { 'name': ' Gramm Shiitake-Pilze, in Scheiben geschnitten', 'amount': 90 },
        { 'name': ' kleiner Brokoli, in Röschen geschnitten', 'amount': 1 },
        { 'name': ' Möhre, in feine Streifen geschnitten', 'amount': 1 },
        { 'name': ' TL Koriander, gehackt', 'amount': 1 }
    ]
}
];

function init(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id') || 0;

    loadRecipe(id);
}

// ++++++++++ New Cleaner and efficient code +++++++++++++ //
function loadRecipe(id) {
    

    let recipe = cousines[id];
    let portions = +document.getElementById('portions').value;
    let myHTMLCode = '';

    document.getElementById('headline').innerHTML = cousines[id].name;
    document.getElementById('headline-img').setAttribute('src', './img/' + id + '.jpg');
    document.getElementById('setPortionsId').setAttribute('onclick', 'loadRecipe(' + id + ')');
    document.getElementById('table').innerHTML = '';

    for (let i = 0; i < recipe.ingredients.length; i++) {
        if (recipe.ingredients[i].amount != '') {
            myHTMLCode +=  `<tr><td>${recipe.ingredients[i].amount * portions} ${recipe.ingredients[i].name}</td></tr>`;
        } else {
            myHTMLCode += `<tr><td>${recipe.ingredients[i].amount} ${recipe.ingredients[i].name}</td></tr>`;
        }
    }

    document.getElementById('table').insertAdjacentHTML('beforeEnd', myHTMLCode); // Insert into table
}


// Mobile Menu Show and Hide functions
function showMenu() {

    document.getElementById('menu').classList.add('show-overlay-menu');
}

function hideMenu() {
    document.getElementById('menu').classList.remove('show-overlay-menu');
}
// End of Mobile Menu Show and Hide functions