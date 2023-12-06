const saveBtn1 = document.getElementById("save-btn-1")
const sendEmail = (email) => {
    return function(){
        let userEmail = document.getElementById(email)
        userEmailValue = userEmail.value 
        if (userEmailValue != '' && userEmailValue.includes('@')) {
            userEmail.disabled = true
        
            let url = 'https://api.sheety.co/422c6dc56b1a35b0628f40ffe7706c75/test/sheet1';
            let body = {
                sheet1: {
                'email': userEmailValue
                }
            }
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: new Headers({'Content-Type': 'application/json'})
            })
            .then((response) => response.json())
            userEmail.value = ''
        }
        else{
            alert('Please enter a valid email address')
        }
    }
    
}
const saveBtn2 = document.getElementById("save-btn-2")

saveBtn1.addEventListener("click", sendEmail('email1'))
saveBtn2.addEventListener("click", sendEmail('email2'));

