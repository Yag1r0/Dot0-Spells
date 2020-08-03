var enemy = {
    name: "enemy",
    health: 2000,
    damage: 50,
    silenced: false,
    alive: true,
    hovered: false
}

var aly = {
    name: "aly",
    health: 1000
}

var abaddon = {
    name: "abaddon",
    health: 1500,
    mana: 627,
    damage: Math.floor(Math.random() * (103 - 93) ) + 93,
    hitcount: 0,
    attackspeed: 0.96,
    alive: true,
    hitSound: new Audio('sounds/attack1.mp3'), //ubaciti drugi saund random

    basicattack: function(){
        this.damage = Math.floor(Math.random() * (103 - 93) ) + 93;
        enemy.health -= this.damage;
        document.querySelector('.enemy p').innerHTML = enemy.health;
        this.hitSound.play();
        if(enemy.health <= 0){
            enemy.alive = false;
            let stejt = document.querySelector("p");
            stejt.innerHTML = 'dead';
            // document.querySelector('.enemy').classList.add('dead');
            document.querySelector('.enemy').style.cssText = "background-color: red;"; // moze i ovaj i ovaj iznad, ovaj je inline
            
        }
        return enemy.health;
        

    },
    mistcoil: function(){
        this.damage = 150;
        enemy.health -= this.damage;
        
    },

    curseofavernus: function(){
        return ++this.hitcount;

    },
    mistcoil: function(){
        
    }

}

function consolala(e){
    e.preventDefault();
    console.log(enemy.health);
    console.log(abaddon.damage);
    console.log("enemy alive: " + enemy.alive);
}

function pokushaj(e){
    e.preventDefault();
    abaddon.basicattack();
}

const makalj = document.getElementById("basicAttack");

makalj.addEventListener("click", consolala, false);
makalj.addEventListener("click", pokushaj, false );



$( document ).ready(function() {
    $("#contents>div:nth-child(1)").after("<div id='mistCoil' class='mistCoil spellZ'><img src='imgs/mistCoil.png'></div>");


    
});

$("#enemy").hover(
    function () {
      $(this).addClass('aggroHover');
      
    }, 
    function () {
      $(this).removeClass("aggroHover");
      

    }
  );

  $( "#enemy" ).mouseover(function() {
    enemy.hovered = true;
    console.log(enemy.hovered);
  });
  $( "#enemy" ).mouseout(function() {
    enemy.hovered = false;
    console.log(enemy.hovered);


  });
//keypress i hover triggeruju udarac npraa
$(document).keyup(function (e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 65 && enemy.hovered) { //Enter keycode
        e.preventDefault();
        abaddon.basicattack(e);
    }
}); 





// console.log(abaddon);

