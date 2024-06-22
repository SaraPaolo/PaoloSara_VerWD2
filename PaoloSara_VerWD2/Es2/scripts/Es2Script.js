let url = "https://jsonplaceholder.typicode.com/comments"
let label = document.getElementById("label")
fetchComments(url)

async function fetchComments (url) {
    let risp = await fetch(url)
    let rispJson = await risp.json()
    verificaMail(rispJson)
}

function verificaMail(rispJson){
    let label = document.getElementById("label")
    console.log(rispJson.length)
    let email = ""
    let p 
    for(let i = 0; i < rispJson.length; i++){
        email = rispJson[i].email
        if(email.search(".com") > 0){
            p = document.createElement("p")
            p.textContent = "Commento numero: "+ i + " Email: " + email
            label.appendChild(p)
        }
        console.log(email.search(".com"))

    }
}
