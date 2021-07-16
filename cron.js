"use strict" /*Esta diretiva diz para o browser ignorar qualquer "erro" do js*/

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; //Quantos miléssimos valem 1 segundo
var cron;

function start(){
    cron = setInterval(() => { timer(); }, tempo);
}

function pause(){
    clearInterval(cron); //A função clearInterval para uma função e entre paranteses você fixa a função que deseja parar
}

function stop(){
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    document.getElementById('counter').innerText = '00:00:00';

}

function timer(){

    ss++;
    if(ss == 60){
        ss = 0;
        mm++;
        
        if(mm == 60){
            mm = 0;
            hh++;
        }
    }


    var format = (hh < 10 ? '0' + hh : hh   ) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter').innerText = format;
}