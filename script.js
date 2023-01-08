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
    var table=document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1=newRow.insertCell(0);
        cell1.innerHTML=data.productCode;
    cell2=newRow.insertCell(1);
        cell2.innerHTML=data.product;
    cell3=newRow.insertCell(2);
        cell3.innerHTML=data.qty;
    cell4=newRow.insertCell(3);
        cell4.innerHTML=data.perPrice;
}

// Editar la data
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("productCode").value=selectedRow.cells[0].innerHTML;
    document.getElementById("product").value=selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value=selectedRow.cells[2].innerHTML;
    document.getElementById("perPrice").value=selectedRow.cells[3].innerHTML;
}















