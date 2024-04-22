var buttons = document.querySelectorAll('button')

function showEnglish(){
    document.getElementById('language-icon').addEventListener('click', function(){

        document.getElementById('mode-text').innerText = 'english'
        document.getElementById('language-icon').onclick = showIndonesia()
        document.getElementById('message').placeholder = '"Now I Am Become Death, the Destroyer of Worlds." -Oppenheimer'
    });
}

function showIndonesia(){
    document.getElementById('language-icon').addEventListener('click', function(){

        document.getElementById('mode-text').innerText = 'indonesian'
        document.getElementById('language-icon').onclick = showEnglish()
        document.getElementById('message').placeholder = '"Beri aku 1000 orang tua, niscaya akan kucabut semeru dari akarnya, beri aku 10 pemuda, niscaya akan kuguncang dunia." -Bung Karno'
    });
}