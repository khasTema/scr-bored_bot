

document.querySelector('button').addEventListener('click', function(){
    fetch('https://www.boredapi.com/api/activity/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('activity').textContent = data.activity
            document.querySelector('div').classList.add('yes')
            document.querySelector('h1').textContent = "๐ Not anymore!"
            document.querySelector('h4').textContent ="Maybe something elese?๐คจ"

        })
})