const saveBtn = document.getElementById("save-btn")

saveBtn.addEventListener("click", function() {
    let userEmail = document.getElementById("email")
    userEmailValue = userEmail.value
    console.log(userEmailValue)
    userEmail.value = ''

})