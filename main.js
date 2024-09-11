let t=document.querySelector('.title');
t.style.color = 'white';
t.style.backgroundColor = 'blue';



let p = document.getElementById('paragraph')
p.style.fontWeight = 'bold';
p.classList.add('paragraph-style');


document.querySelector('img').src = 'img1.png';



const ul = document.querySelector('#list');
for (let i = 1; i <= 3; i++) {
    let li = document.createElement('li');
    li.textContent = `list ${i}`;
    li.style.color = "green";
    li.style.border = "2px solid blue";
    li.style.display = "inline-block";
    li.style.padding = "10px";
    ul.appendChild(li);
}

const tableContainer = document.getElementById('table-container');
let table = document.createElement('table');
table.classList.add('table-style');
for (let row = 0; row < 2; row++) {
    let tr = document.createElement('tr');
    for (let col = 0; col < 3; col++) {
        let cell = document.createElement(row === 0 ? 'th' : 'td');
        cell.textContent = row === 0 ? `Header ${col}` : `Cell ${row + 1}-${col + 1}`;
        tr.appendChild(cell);
    }
    table.appendChild(tr);
}
tableContainer.appendChild(table);
