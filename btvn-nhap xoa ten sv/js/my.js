let nameStudent = ['Nguyen Van A', 'Nguyen Van B', 'Nguyen Van C'];

function showlist() {
    let html = '';
    for (i = 0; i < nameStudent.length; i++) {
        html = html + '<tr>';
        html = html + '<td>';
        html = html + (i + 1);
        html = html + '</td>';
        html = html + '<td>';
        html = html + nameStudent[i];
        html = html + '</td>';
        html = html + '<td>';
        html = html + '<button id="i" type="button" onclick="delete1(this.id)">Xoa</button>';
        html = html + '</td>';
        html = html + '</tr>';
    }
    document.getElementById('name').innerHTML = html;
}

showlist();

function add() {
    nameStudent.unshift(document.getElementById('display').value);
    showlist();
}

function delete1(id) {
nameStudent.splice(id,1);
    showlist();
}
