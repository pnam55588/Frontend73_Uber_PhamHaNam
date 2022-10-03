let selector
let loaiXe
let soKm
let tgCho
let tien

function tinhtoan(){

    selector = document.getElementsByName("selector")
    for(var i = 0; i < selector.length; i++){
        if(selector[i].checked){
            loaiXe= selector[i].value;
        }
    }
    soKm = document.getElementById("soKm").value
    tgCho = document.getElementById("tgCho").value
    switch (loaiXe) {
        case "Uber X":
            if(soKm <=1){
                tien = 8000 + tgCho*2000
            }else
            if(soKm<=20){
                tien = 8000 + (soKm-1)*12000 + tgCho*2000
            }else{
                tien = 8000 + 19*12000 + (soKm-20)*10000 + tgCho*2000
            }
            break;
            
        case "Uber SUV":
            if(soKm <=1){
                tien = 9000 + tgCho*3000
            }else
            if(soKm<=20){
                tien = 9000 + (soKm-1)*14000 + tgCho*3000
            }else{
                tien = 9000 + 19*14000 + (soKm-20)*12000 + tgCho*3000
            }
            break;
        case "Uber Black":
            if(soKm <=1){
                tien = 10000 + tgCho*4000
            }else
            if(soKm<=20){
                tien = 10000 + (soKm-1)*16000 + tgCho*4000
            }else{
                tien = 10000 + 19*16000 + (soKm-20)*14000 + tgCho*4000
            }
            break;
        default:
            break;
    }
}
function tinhtien(){
    tinhtoan()
    if(!loaiXe || !soKm|| !tgCho){
        alert("yêu cầu user nhập thông tin")
    }else{
        document.getElementById("xuatTien").innerText = tien
        document.getElementById("divThanhTien").style.display = "block"

    }
}

let modal = document.getElementById("myModal")
function inHD(){
    tinhtoan()
    modal.style.display = "block"
    let table = document.getElementById("cthd")
    // console.log(table)
    let dongia1
    let dongia2
    let dongia3
    let giacho
    if(loaiXe == "Uber X"){
        dongia1 = 8000
        dongia2 = 12000
        dongia3 = 10000
        giacho = 2000
    }else
    if(loaiXe == "Uber SUV"){
        dongia1 = 9000
        dongia2 = 14000
        dongia3 = 12000
        giacho = 3000
    }else
    if(loaiXe == "Uber Black"){
        dongia1 = 10000
        dongia2 = 16000
        dongia3 = 14000
        giacho = 4000
    }

    if(soKm<=1){
        table.innerHTML = `
            <tr>
                <th scope="row">${loaiXe}</th>
                <td>${soKm}</td>
                <td>${dongia1}</td>
                <td>${tien}</td>
            </tr>
            <tr style="background-color: rgb(147, 219, 147);">
                <th scope="row">Total</th>
                <td></td>
                <td></td>
                <td>${tien}</td>
            </tr>

        
        `
    }else
    if(soKm<=20){
        table.innerHTML = `
            <tr>
                <th scope="row">${loaiXe}</th>
                <td>1</td>
                <td>${dongia1}</td>
                <td>${dongia1}</td>
            </tr>
            <tr>
                <th scope="row">${loaiXe}</th>
                <td>${soKm-1}</td>
                <td>${dongia2}</td>
                <td>${dongia2*(soKm-1)}</td>
            </tr>
            <tr>
                <th scope="row">Thời gian chờ</th>
                <td>${tgCho}phút</td>
                <td>${giacho}</td>
                <td>${tgCho*giacho}</td>
            </tr>
            <tr style="background-color: rgb(147, 219, 147);">
                <th scope="row">Total</th>
                <td></td>
                <td></td>
                <td>${tien}</td>
            </tr>
        `
    }else{
        table.innerHTML = `
            <tr>
                <th scope="row">${loaiXe}</th>
                <td>1</td>
                <td>${dongia1}</td>
                <td>${dongia1}</td>
            </tr>
            <tr>
                <th scope="row">${loaiXe}</th>
                <td>19</td>
                <td>${dongia2}</td>
                <td>${dongia2*19}</td>
            </tr>
            <tr>
                <th scope="row">${loaiXe}</th>
                <td>${soKm-20}</td>
                <td>${dongia3}</td>
                <td>${dongia3*(soKm-20)}</td>
            </tr>
            <tr>
                <th scope="row">Thời gian chờ</th>
                <td>${tgCho} phút</td>
                <td>${giacho}</td>
                <td>${tgCho*giacho}</td>
            </tr>
            <tr style="background-color: rgb(147, 219, 147);">
                <th scope="row">Total</th>
                <td></td>
                <td></td>
                <td>${tien}</td>
            </tr>
        `
    }
}
function closeModal(){
    modal.style.display = "none"
}

