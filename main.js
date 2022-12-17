var drugs = [];

function addDrug() {
    event.preventDefault();
    let newDrug = {
        "medName": document.getElementById("mname").value,
        "medQuant": document.getElementById("mquant").value,
        "medClasse": document.getElementById("mclasse").value,
    }
    resetForm();
    drugs.push(newDrug);
    renderTable();
}

function removeDrug(index){
    drugs.splice(index,1);
    renderTable();
}

function renderTable(){
    let table = document.getElementById("dataTable");
    table.innerHTML =  `             <tr>
    <th>ID</th>
    <th>Medicmanto</th>
    <th>Quantidade</th>
    <th>Classe do medicamento</th>
    <th>Remover</th>

</tr>`;

    console.log(drugs.length);

    for(let i = 1; i < drugs.length; i++)
    {

        
        table.innerHTML = table.innerHTML  +  `<tr>
        <td>${i}</td>
        <td>${drugs[i].medName}</td>
        <td>${drugs[i].medQuant}</td>
        <td>${drugs[i].medClasse}</td>
        <td><img src="remove.png" width="25px" height="25px" onclick="removeDrug(${i})"></td>
    </tr>`
    }
}

function resetForm(){
    document.getElementById("mname").value = "";
    document.getElementById("mquant").value = "";
    document.getElementById("mclasse").value = "";
    }

renderTable();