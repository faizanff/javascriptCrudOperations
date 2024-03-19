let data = [
    {id: 1, name: "Faizan", last: "Ahmed", rollNo: "20"},
    {id: 2, name: "Faizan", last: "Ahmed", rollNo: "20"}

]

function readAll(){
        localStorage.setItem("object", JSON.stringify(data));
        var tabledata = document.querySelector(".data_table");

        var object = localStorage.getItem('object');
        var objectdata = JSON.parse(object);
        var elements = "";

        objectdata.map(record => (
            elements += `<tr>
                <td>${record.name}</td>
                <td>${record.last}</td>
                <td>${record.rollNo}</td>
                <td>
                    <button class = "btn btn-success add-btn" onclick = {edit(${record.id})}>Update</button>
                    <button class = "btn btn-danger add-btn" onclick = {delet(${record.id})}>Delete</button>
                </td>
            </tr>`
        ))

        tabledata.innerHTML = elements;
}

function delet(id){
    data = data.filter(rec => rec.id !== id);
    readAll();
}

function create(){
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";
}

function add(){
    var name = document.querySelector(".name").value;
    var last = document.querySelector(".last").value;
    var rollNo = document.querySelector(".rollNo").value;

    var newobj = {id: 3, name: name, last: last, rollNo: rollNo};
    data.push(newobj);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";
    document.querySelector(".create_form").style.display = "none";

    readAll();
}

function edit(id){
    document.querySelector('.update_form').style.display = "block";
    var obj = data.find(rec => rec.id === id);
    document.querySelector('.uname').value = obj.name;
    document.querySelector('.ulast').value = obj.last;
    document.querySelector('.urollNo').value = obj.rollNo;
    document.querySelector('.id').value = obj.id;
}

function update(){
    var id = parseInt(document.querySelector('.id').value);
    var name =  document.querySelector('.uname').value;
    var last = document.querySelector('.ulast').value;
    var rollNo = document.querySelector('.urollNo').value;

    var index = data.findIndex(rec => rec.id === id);
    data[index] = {id, name, last, rollNo};
    document.querySelector('.update_form').style.display = "none";

    readAll();
}
