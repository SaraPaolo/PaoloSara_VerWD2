let btn = document.getElementById("send")
let p = document.getElementById("ris")
let n
btn.addEventListener("click", function () {
    n = document.getElementById("in").value
    primo(n).then(res => p.textContent = res).catch(res => p.textContent = res)
})

function primo(n) {
    return new Promise((resolve, reject) => {
        if (n < 1) {
            reject(new Error("Numero deve essere maggiore di 1"))
        } else {
            let ris
            let count = 0;
            for (let i = 2; i < n; i++) {
                ris = (n / i) % 2
                if (ris == 0) {
                    resolve("NUMERO NON PRIMO")
                }
            }
            resolve("NUMERO PRIMO")
        }

    })

}



