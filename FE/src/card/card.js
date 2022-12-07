// import 'regenerator-runtime/runtime';
// import axios from 'axios';
for (var i = 0; i < localStorage.length; i++) {

    //add-card
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
    item[0] = i;
    item[1] = img;
    item[2] = x.substring(x.indexOf(",") + 1, x.lastIndexOf(",") - 1)
    item[3] = x.substring(x.lastIndexOf(",") + 1, x.length)
    item[4] = 1
    item[5] = x.substring(x.lastIndexOf(",") + 1, x.length)
    item[6] = remove;
    for (var j = 0; j < 7; j++) {
        var td = document.createElement("td");
        td.append(item[j]);
        tr.append(td);
    }
    $(".order").append(tr);

    function del(i) {
        localStorage.removeItem(localStorage.key(i));
        location.reload();
    }

    //delete card
    function ClearAll() {
        localStorage.clear();
        location.reload();
    }

    //agree order

}

$(".agreeOrder").click(function () {
    var Name = $(".name").val();
    var address = $(".address").val();
    var phone = $(".phone").val();
    var email = $(".email").val();
    var name_product = [];
    for (var i = 0; i < localStorage.length; i++) {
        var x = localStorage.getItem(localStorage.key(i));
        name_product = name_product + " " + x.substring(x.indexOf(",") + 1, x.lastIndexOf(",") - 1)
    }
    console.log('check name product: ', name_product)
    console.log(Name, address, phone, email)
    getText()
})

// async function getText() {
//     let x = await axios.get("http://localhost:8080/api/v1/users");
//     alert('nghia')
//     console.log(x);
// }