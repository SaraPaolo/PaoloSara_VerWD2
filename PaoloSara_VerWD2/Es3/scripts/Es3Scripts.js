let url =  "https://jsonplaceholder.typicode.com/users"
let label = document.getElementById("label")

fetchViewUsers(url)

async function fetchViewUsers (url) {
    let risp = await fetch(url)
    let rispJson = await risp.json()
    let nomeU
    let usernameU
    let websiteU
    let zipcodeU
    console.log(rispJson.length)
    for(let i = rispJson.length - 1; i >= 0; i--){
        nomeU = document.createElement("p")
        usernameU = document.createElement("p")
        websiteU = document.createElement("p")
        zipcodeU = document.createElement("p")

        nomeU.textContent = "Nome: "+ rispJson[i].name
        label.appendChild(nomeU)
        usernameU.textContent = "Username: "+ rispJson[i].username
        nomeU.appendChild(usernameU)
        websiteU.textContent = "Sito Web: "+ rispJson[i].website
        usernameU.appendChild(websiteU)
        zipcodeU.textContent = "Zip: "+ rispJson[i].address.zipcode
        websiteU.appendChild(zipcodeU)

        let user = {
            nome : rispJson[i].name + rispJson[i].address.zipcode.split("-")[0],
            cognome : rispJson[i].username + rispJson[i].address.zipcode.split("-")[1],
            età : rispJson[i].address.zipcode.split("-")[0] + rispJson[i].address.zipcode.split("-")[1]
        }

    }

}
