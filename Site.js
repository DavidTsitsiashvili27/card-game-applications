// Sample data

const data = [
    ['./resourses/ace_of_clubs.png', './resourses/ace_of_diamonds.png', "./resourses/ace_of_hearts.png", "./resourses/ace_of_spades.png"],
    ['./resourses/jack_of_clubs2.png', "./resourses/jack_of_diamonds2.png", "./resourses/jack_of_hearts2.png", "./resourses/jack_of_spades2.png"],
    ['./resourses/king_of_clubs2.png', "./resourses/king_of_diamonds2.png", "./resourses/king_of_hearts2.png", "./resourses/king_of_spades2.png"],
    ['./resourses/queen_of_clubs2.png', "./resourses/queen_of_diamonds2.png", "./resourses/queen_of_hearts2.png", "./resourses/queen_of_spades2.png"],
];

function generateResponsiveTable(data) {
    const table = document.getElementById('dynamicTable');
    
    data.forEach((row, rowIndex) => {
        row.forEach((cellContent) => {
            console.log(cellContent);
            const cell = document.createElement('div');
            const newElement = document.createElement('img');
            newElement.setAttribute('class', "grid-table-cell");
            newElement.setAttribute('src', cellContent);
            cell.appendChild(newElement);
            table.appendChild(cell);
        });
    });
}

