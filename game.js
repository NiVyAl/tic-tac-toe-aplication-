var td = document.querySelectorAll('td');
var player = 1;
var h1 = document.querySelector('h1');
var player1 = document.querySelector('.player-1');
var player2 = document.querySelector('.player-2');

var mas = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var clickControl = function(control, num){
    
    control.addEventListener('click', function() {
                                hod(control, num);
                             })
    }
    

var hod = function(adress, num){
    
    if (mas[num] == 0) {

        if (player == 1){
            adress.innerHTML = 'x';
            h1.innerHTML = 'Ход игрока 2';
            player1.classList.remove('h2-active');
            player2.classList.add('h2-active');
            adress.classList.add('color-1')
            player = 2;
            mas[num] = 3;
        } else {
            adress.innerHTML = 'O';
            player2.classList.remove('h2-active');
            player1.classList.add('h2-active');
            h1.innerHTML = 'Ход игрока 1';
            adress.classList.add('color-2');
            player = 1;
            mas[num] = 5;
        }

    } 
    
    if (isWin() == 1) {
        alert('Победил игрок 1');
    } else if (isWin() == 2){
        alert('Победил игрок 2');
    };
        
}

var isWin = function(){
    if (mas[0] + mas[1] + mas[2] == 9) {
        var winer = 1;
        return winer;
    } else if ((mas[0] + mas[1] + mas[2] == 15)){
        var winer = 2;
        return winer;
    }
}


for (var i=0; i< td.length; i++){
    clickControl(td[i], i);
    
}

