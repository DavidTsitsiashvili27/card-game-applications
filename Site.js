// Sample data

const data = [
    './resourses/ace_of_clubs.png', './resourses/ace_of_diamonds.png', "./resourses/ace_of_hearts.png", "./resourses/ace_of_spades.png",
    './resourses/jack_of_clubs2.png', "./resourses/jack_of_diamonds2.png", "./resourses/jack_of_hearts2.png", "./resourses/jack_of_spades2.png",
    './resourses/king_of_clubs2.png', "./resourses/king_of_diamonds2.png", "./resourses/king_of_hearts2.png", "./resourses/king_of_spades2.png",
    './resourses/queen_of_clubs2.png', "./resourses/queen_of_diamonds2.png", "./resourses/queen_of_hearts2.png", "./resourses/queen_of_spades2.png",
    './resourses/ace_of_clubs.png', './resourses/ace_of_diamonds.png', "./resourses/ace_of_hearts.png", "./resourses/ace_of_spades.png",
    './resourses/jack_of_clubs2.png', "./resourses/jack_of_diamonds2.png", "./resourses/jack_of_hearts2.png", "./resourses/jack_of_spades2.png",
    './resourses/king_of_clubs2.png', "./resourses/king_of_diamonds2.png", "./resourses/king_of_hearts2.png", "./resourses/king_of_spades2.png",
    './resourses/queen_of_clubs2.png', "./resourses/queen_of_diamonds2.png", "./resourses/queen_of_hearts2.png", "./resourses/queen_of_spades2.png"
];


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateResponsiveTable(data) {

    shuffle(data);
    const row = data.length;
    const table = document.getElementById('dynamicTable');
    
    for(let i=0;i<row-1;i++) 
    {
        const cell = document.createElement('div');
        const newElement = document.createElement('img');
        const cellContent = data[i];
        newElement.setAttribute('class', "grid-table-cell");
        newElement.setAttribute('src', cellContent);
        cell.appendChild(newElement);
        table.appendChild(cell);
    };
    console.log(cellContent)
};


