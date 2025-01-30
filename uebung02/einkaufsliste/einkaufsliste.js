function AddListItem1() {
    let list1 = document.getElementById("list1"); 
    let newListItem1 = document.createElement("li"); 
    let input1 = document.getElementById("input1").value; 
    let newListItemText1 = document.createTextNode(input1); 
    newListItem1.appendChild(newListItemText1); 
    list1.appendChild(newListItem1);
}

function AddListItem2() {
    let list2 = document.getElementById("list2"); 
    let newListItem2 = document.createElement("li"); 
    let input2 = document.getElementById("input2").value; 
    let newListItemText2 = document.createTextNode(input2); 
    newListItem2.appendChild(newListItemText2); 
    list2.appendChild(newListItem2);
}

function AddListItem3() {
    let list3 = document.getElementById("list3"); 
    let newListItem3 = document.createElement("li"); 
    let input3 = document.getElementById("input3").value; 
    let newListItemText3 = document.createTextNode(input3); 
    newListItem3.appendChild(newListItemText3); 
    list3.appendChild(newListItem3);
}

function onPageLoaded() {
    document.getElementById("listBtn1").addEventListener("click", AddListItem1);
    document.getElementById("listBtn2").addEventListener("click", AddListItem2);
    document.getElementById("listBtn3").addEventListener("click", AddListItem3);
}

window.addEventListener("load", onPageLoaded);