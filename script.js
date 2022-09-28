//let name = document.getElementById('name')
//let surname = document.getElementById('surname')
//let phoneNumber = document.getElementById('phoneNumber')
let addBtn = document.getElementById("addNumber");
let phoneList = document.getElementById("phoneList");

addBtn.addEventListener("click", function () {
  let nameValue = document.getElementById("name").value;
  let surnameValue = document.getElementById("surname").value;
  let phoneNumberValue = document.getElementById("phoneNumber").value;

  let tr = document.createElement("TR");

  let tdName = document.createElement("TD");
  let tdContentName = document.createTextNode(nameValue);
  tdName.appendChild(tdContentName);
  tr.appendChild(tdName);

  let tdSurname = document.createElement("TD");
  let tdContentSurname = document.createTextNode(surnameValue);
  tdSurname.appendChild(tdContentSurname);
  tr.appendChild(tdSurname);

  let tdPhoneNumber = document.createElement("TD");
  let tdContentPhoneNumber = document.createTextNode(phoneNumberValue);
  tdPhoneNumber.appendChild(tdContentPhoneNumber);
  tr.appendChild(tdPhoneNumber);

  phoneList.appendChild(tr);

  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("phoneNumber").value = "";
});
