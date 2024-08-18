// Sample data
const data = [
    ["Name", "Age", "Profession"],
    ["John Doe", 30, "Developer"],
    ["Jane Smith", 25, "Designer"],
    ["Sam Brown", 35, "Manager"],
    ["Alice Green", 28, "Engineer"],
    ["Bob White", 40, "Architect"]
];

function generateResponsiveTable(data) {
    const table = document.getElementById('dynamicTable');
    
    data.forEach((row, rowIndex) => {
        row.forEach((cellContent) => {
            const cell = document.createElement('div');
            cell.className = rowIndex === 0 ? 'grid-table-header' : 'grid-table-cell';
            cell.innerText = cellContent;
            table.appendChild(cell);
        });
    });
}

generateResponsiveTable(data);