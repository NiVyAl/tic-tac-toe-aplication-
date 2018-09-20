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

var cheesman = function(text, player) {
    if (player == 1) {
        h1.innerHTML = text + " <span class='cheesman color-" + player + "' > X</span>";
    } else if (player == 2) {
        h1.innerHTML = text + " <span class='cheesman color-" + player + "' >O</span>";
    }
}     

var hod = function(adress, num){
    
    if (mas[num] == 0) {

        if (player == 1){
            adress.innerHTML = 'x';
            //h1.innerHTML = 'Ход игрока 2';
            cheesman('Ход игрока', 2);
            player1.classList.remove('h2-active');
            player2.classList.add('h2-active');
            adress.classList.add('color-1')
            player = 2;
            mas[num] = 3;
            
            
        } else {
            adress.innerHTML = 'O';
            player2.classList.remove('h2-active');
            player1.classList.add('h2-active');
            //h1.innerHTML = 'Ход игрока 1';
            cheesman('Ход игрока', 1);
            adress.classList.add('color-2');
            player = 1;
            mas[num] = 5;
            
            
        }
        
        isWin();
    } 
        
}

var isWin = function(){
    
    for (var i = 0; i < 9; i = i+3) {
        if (mas[i] + mas[i + 1] + mas[i + 2] == 9) {
        winCongratulations(1);
        } else if ((mas[i] + mas[i + 1] + mas[i + 2] == 15)){
            winCongratulations(2);
        }    
    };
    
    for (var i = 0; i < 3; i++) {
        if (mas[i] + mas[i + 3] + mas[i + 6] == 9) {
        winCongratulations(1);
        } else if ((mas[i] + mas[i + 3] + mas[i + 6] == 15)){
            winCongratulations(2);
        }    
    };
    
    if (mas[0] + mas[4] + mas[8] == 9) {
        winCongratulations(1);
    }; 
    if (mas[0] + mas[4] + mas[8] == 15) {
        winCongratulations(2);
    }; 
    
    if (mas[2] + mas[4] + mas[6] == 9){
        winCongratulations(1);
    }; 
    if (mas[2] + mas[4] + mas[6] == 15){
        winCongratulations(2);
    };    
}


for (var i=0; i< td.length; i++){
    clickControl(td[i], i);
}

var restart = function() {
    window.location.reload();
}

var winCongratulations = function(winer) {
    if (winer == 1) {
        h1.innerHTML = "Победил игрок <span class='cheesman color-" + winer + "' >X</span>";
    } else if (winer == 2) {
        h1.innerHTML = "Победил игрок <span class='cheesman color-" + winer + "' >O</span>";
    }
    h1.classList.add("win-message");
    document.querySelector("table").classList.add("end-math");
}