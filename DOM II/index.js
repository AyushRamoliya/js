document.querySelector("form").addEventListener("submit" , Todo)

function Todo(){
    event.preventDefault()
    let name = document.getElementById("task").value;
    let id = document.getElementById("priority").value;

    let tr = document.createElement("tr")
    let td1 = document.createElement("td")

    td1.innerHTML = name

    let td2 = document.createElement("td")

    td2.innerHTML =  id
    let td3 = document.createElement("td")
    td3.innerHTML = "DELETE"
    tr.append(td1 , td2 , td3)

    if(id === "High"){
        td2.style.backgroundColor = "red"
        td2.style.color = "white"
    }
    else{
        td2.style.backgroundColor = "green"
        td2.style.color = "white"
    }

    document.querySelector("tbody").append(tr)
}