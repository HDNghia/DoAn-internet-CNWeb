
var total_price = 0;

var stt = 1;
for (var i = 0; i < localStorage.length; i++) {
    //add-card
    if (localStorage.key(i) == "loginUser" || localStorage.key(i) == "id" || localStorage.key(i) == "loginAdmin") { }
    else {

        var tr = document.createElement("tr");
        var img = document.createElement("img");
        var remove = document.createElement("input");
        remove.setAttribute("type", "button")
        remove.setAttribute("value", "Xóa")
        remove.setAttribute("class", "btn btn-danger m-2 delete")
        remove.setAttribute("onclick", `del(${i})`)
        var x = localStorage.getItem(localStorage.key(i));
        var anh = ".." + x.substring(x.indexOf("i") - 1, x.indexOf(","));
        img.setAttribute("src", anh);
        var item = [0, 1, 2, 3, 4, 5, 6];
        item[0] = stt;
        item[1] = img;
        item[2] = x.substring(x.indexOf(",") + 1, x.lastIndexOf(","))
        item[3] = x.substring(x.lastIndexOf(",") + 1, x.length)
        item[4] = 1
        item[5] = x.substring(x.lastIndexOf(",") + 1, x.length)
        item[6] = remove;
        for (var j = 0; j < 7; j++) {
            var td = document.createElement("td");
            td.append(item[j]);
            tr.append(td);
        }
        total_price = total_price + parseInt(x.substring(x.lastIndexOf(",") + 2, x.length))
        stt = stt + 1;
        $(".order").append(tr);

        function del(i) {
            localStorage.removeItem(localStorage.key(i));
            location.reload();
        }

        //delete card
        function ClearAll() {
            if (localStorage.getItem("loginUser") == "true") {
                localStorage.clear();
                localStorage.setItem("loginUser", true);
                location.reload();
            }
            else {
                localStorage.clear();
                location.reload();

            }
        }
    }
}
$(".total").append(total_price);

//get data
// fetch('http://localhost:8080/api/v1/users')
//     .then(data => {
//         return data.json()
//     })
//     .then(data => {
//         console.log("check get data: ", data);
//         for (var i = 0; i < data.data.length; i++) {
//             console.log(data.data[i].id);

//         }
//     })

//post data
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
    return response.json();
}

//delete data
// function deleteOrder(id) {
//     var option = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };
//     fetch('http://localhost:8080/api/v1/delete-user' + '/' + id, option)
//         .then(function (response) {
//             response.json();
//         })
//         .then(callback);
// }
//Update data
// async function putData(url = '', data = {}) {
//     const response = await fetch(url, {
//         method: 'PUT',
//         mode: 'cors',
//         cache: 'no-cache',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         redirect: 'follow',
//         referrerPolicy: 'no-referrer',
//         body: JSON.stringify(data)
//     })
//     return response.json();
// }
// putData('http://localhost:8080/api/v1/update-user', {
//     "food": "update",
//     "price": 19,
//     "qty": 1,
//     "total": 123,
//     "order_date": "ng",
//     "status": "delivery",
//     "customer_name": "nghia",
//     "customer_contact": 123,
//     "customer_email": "nghia@",
//     "customer_address": "lvh",
//     "id": 7
// })


$(".agreeOrder").click(function () {

    if (localStorage.getItem("loginUser") == "true") {

        var data = {
            food: "",
            price: "",
            qty: "",
            total: "",
            order_date: "",
            status: "",
            customer_name: "",
            customer_contact: "",
            customer_email: "",
            customer_address: ""
        }
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        data.customer_name = $(".name").val();
        data.customer_address = $(".address").val();
        data.customer_contact = $(".phone").val();
        data.customer_email = $(".email").val();
        var name_product = [];
        var price_product = 0;

        for (var i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) == "loginUser" || localStorage.key(i) == "id" || localStorage.key(i) == "loginAdmin") { }
            else {
                var x = localStorage.getItem(localStorage.key(i));
                name_product = name_product + " " + x.substring(x.indexOf(",") + 1, x.lastIndexOf(","))
                price_product = price_product + parseInt(x.substring(x.lastIndexOf(",") + 2, x.length))
            }
        }
        data.food = name_product;
        data.status = "Ordered";
        data.order_date = today;
        data.price = price_product;
        data.qty = "1";
        data.total = price_product;
        console.log('check data from card: ', data)
        console.log('check name product: ', name_product)
        console.log('check price: ', price_product)
        let isValid = true;
        let arrInput = ['customer_name', 'customer_contact', 'customer_email', 'customer_address']
        for (let i = 0; i < arrInput.length; i++) {
            // alert("nghia")
            console.log('check inside loop', data[arrInput[i]], arrInput[i])
            if (!data[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                return;
            }
        }
        // var div = document.createElement("div");
        // div.setAttribute("class", "alert alert-success");
        // div.append("order success")
        // $(".alert1").append(div);
        postData('http://localhost:8080/api/v1/create-user', data)
            .then(data => {
                console.log(data);
            })
        // <a href="../../index.html#features">features</a>
        alert("Order success")
        window.location.replace("../index.html");
    }
    else {
        window.location.replace("../login.html");
    }

})