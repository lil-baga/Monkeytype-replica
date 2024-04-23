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
        document.getElementById('message').placeholder = '"Beri Aku 1000 Orang Tua, Niscaya akan Kucabut Semeru dari Akarnya, Beri Aku 10 Pemuda, Niscaya akan Kuguncang Dunia." -Bung Karno'
    });
}