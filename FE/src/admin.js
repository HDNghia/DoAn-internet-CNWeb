
//get data
// var tr = document.createElement("tr");
// var img = document.createElement("img");
// var item = [0, 1, 2, 3, 4, 5, 6];

// for (var j = 0; j < 7; j++) {
//     var td = document.createElement("td");
//     td.append(item[j]);
//     tr.append(td);
// }
// $(".order").append(tr);
fetch('http://localhost:8080/api/v1/users')
    .then(data => {
        return data.json()
    })
    .then(data => {
        console.log("check get data: ", data);
        for (var i = 0; i < data.data.length; i++) {
            var remove = document.createElement("input");
            var edit = document.createElement("input");
            var a = document.createElement("a");
            a.setAttribute("href", `updateOrder.html`)

            remove.setAttribute("type", "button")
            remove.setAttribute("value", "Delete")
            remove.setAttribute("class", "btn btn-danger m-1")
            remove.setAttribute("onclick", `deleteOrder(${data.data[i].id})`)

            edit.setAttribute("type", "button")
            edit.setAttribute("value", "Update")
            edit.setAttribute("class", "btn btn-success ")
            edit.setAttribute("onclick", `EditOrder(${data.data[i].id})`)
            a.append(edit);



            var table = document.getElementsByClassName("order");
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");
            var td6 = document.createElement("td");
            var td7 = document.createElement("td");
            var td8 = document.createElement("td");
            var td9 = document.createElement("td");
            var td10 = document.createElement("td");
            var td11 = document.createElement("td");


            td1.append(data.data[i].food)
            td2.append(data.data[i].price)
            td3.append(data.data[i].qty)
            td4.append(data.data[i].total)
            td5.append(data.data[i].order_date)
            td6.append(data.data[i].status)
            td7.append(data.data[i].customer_name)
            td8.append(data.data[i].customer_contact)
            td9.append(data.data[i].customer_email)
            td10.append(data.data[i].customer_address)
            td11.append(a)
            td11.append(remove)

            tr.append(td1)
            tr.append(td2)
            tr.append(td3)
            tr.append(td4)
            tr.append(td5)
            tr.append(td6)
            tr.append(td7)
            tr.append(td8)
            tr.append(td9)
            tr.append(td10)
            tr.append(td11)

            $(".order").append(tr);
        }

    })


//update order
function EditOrder(id) {
    localStorage.setItem("id", id);
}

//delete data
function deleteOrder(id) {
    var option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch('http://localhost:8080/api/v1/delete-user' + '/' + id, option)
        .then(data => {
            return data.json()
        })
        .then(data => {
            console.log('check data', data)
            location.reload();
        })

}

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    // call function
    changeBtn();
});

function changeBtn() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}


