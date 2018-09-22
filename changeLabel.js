var currentPlayer = 1; // хранится текущего игрока (игрок 1 - X)
var positions = document.querySelectorAll('.position-input');
var positionsVisual = document.querySelectorAll('label');
var title = document.querySelector('h1');

for (var i=0; i < positions.length; i++) {
    positions[i].addEventListener('click', function() {
        computCurrentPosition();    
    })
}

var computCurrentPosition = function() { // вычисляем чей ход сейчас
    classChange(title, 1);
    
    for (var i = 0; i < positions.length; i++) {
        if (positions[i].checked == 0) {
            classChange(positionsVisual[i], 0);
        }
    }
    //console.log(currentPlayer);
}

var classChange = function(patient, isChangeCurrent) {
    if (currentPlayer == 1) {
        currentPlayer = 1 + isChangeCurrent;
            console.log(patient + ' if ' + currentPlayer);
        patient.classList.remove('player-1')
    } else {
        currentPlayer = 2 - isChangeCurrent;
            console.log(patient + ' else ' + currentPlayer);
        patient.classList.remove('player-2')
    }
    patient.classList.add('player-' + currentPlayer);
}