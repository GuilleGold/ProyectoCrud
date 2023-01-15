var selectedRow = null

function onFormSubmit(e){
    event.preventDefault();
        var formData =readFormData();
        if(selectedRow==null){
            insertNewRecord(formData);
        }
        else{
            updateRecord(formData);
        }
        resetForm();

}
// Recuperar la info
function readFormData(){
    var formData={};
    formData["productCode"]=document.getElementById("productCode").value;
    formData["product"]=document.getElementById("product").value;
    formData["qty"]=document.getElementById("qty").value;
    formData["perPrice"]=document.getElementById("perPrice").value;
    return formData;
}
// Insertar la data
function insertNewRecord(data){
    localStorage.setItem("formData", JSON.stringify(data));
    var table=document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1=newRow.insertCell(0);
        cell1.innerHTML=data.productCode;
    cell2=newRow.insertCell(1);
        cell2.innerHTML=data.product;
    cell3=newRow.insertCell(2);
        cell3.innerHTML=data.qty;
    cell4=newRow.insertCell(3);
        cell4.innerHTML=data.perPrice;
    cell4=newRow.insertCell(4);
        cell4.innerHTML=`<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

// Editar la data
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("productCode").value=selectedRow.cells[0].innerHTML;
    document.getElementById("product").value=selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value=selectedRow.cells[2].innerHTML;
    document.getElementById("perPrice").value=selectedRow.cells[3].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.productCode;
    selectedRow.cells[1].innerHTML=formData.product;
    selectedRow.cells[2].innerHTML=formData.qty;
    selectedRow.cells[3].innerHTML=formData.perPrice;
}

// Eliminar Data
function onDelete(td){
    if(confirm('Realmente deseas eliminar los cambios?')){
        row=td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}
// Reiniciar data
function resetForm(){
    document.getElementById("productCode").value='';
    document.getElementById("product").value='';
    document.getElementById("qty").value='';
    document.getElementById("perPrice").value='';
    selectedRow=null;
}

// Cargar la página
document.body.onload = function() {
    retrieveData();
};

// Recuperar datos del localStorage
function retrieveData() {
    var data = JSON.parse(localStorage.getItem("formData"));
    if (data) {
        document.getElementById("productCode").value = data.productCode;
        document.getElementById("product").value = data.product;
        document.getElementById("qty").value = data.qty;
        document.getElementById("perPrice").value = data.perPrice;
    }
}

// Actualizar datos en el localStorage
function updateData(formData) {
    localStorage.setItem("formData", JSON.stringify(formData));
}

// Borrar datos del localStorage
function deleteData() {
    localStorage.removeItem("formData");
}














