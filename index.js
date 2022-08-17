let calc_buttons = document.getElementsByClassName("col-lg-3")
let result = document.getElementsByClassName("showed").item(0)
let buttonsArr = [...calc_buttons]

buttonsArr.forEach((button) => {
    result.innerHTML = " "
    button.addEventListener("click", (e) => {
        if (!e.target.classList.contains("getAnswer") && !e.target.classList.contains("clear")) {
            result.style.color = "white"
            let clicked = e.target.innerHTML
            result.innerHTML += clicked
        }else if(e.target.classList.contains("getAnswer") && result.innerHTML != " " && !Number.isNaN(eval(result.innerHTML))) {
            result.style.color = "white"
            result.innerHTML = eval(result.innerHTML)
        }else if (e.target.classList.contains("clear")) {
            result.innerHTML = " "
        }
    })
})
