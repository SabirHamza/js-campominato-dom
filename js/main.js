const generate = document.getElementById('generate');

generate.addEventListener(
    "click",
    function(){
        
        const grid = document.getElementById('grid');
        
        let quantity;
        
        grid.innerHTML="";
        
        const difficulty = document.getElementById("select").value;

        if (difficulty == 1) {

            quantity = 100;
        }else if (difficulty == 2) {

            quantity = 80;
        }else if (difficulty == 3) {

            quantity = 40;
        }

        let square;

        for(let i = 0; i < quantity; i++) {
            
            grid.append(generatesquare(square, i, quantity));
        }
    }
)

function generatesquare (square, i, quantity) {
    
    square = document.createElement("div");
            
    if (quantity == 100) {

        square.classList.add("square")
    }else if (quantity == 80) {

        square.classList.add("square-medium")
    }else if (quantity == 40) {

        square.classList.add("square-big")
    }
            
    square.innerHTML = i + 1;

    square.addEventListener(
        "click",
        function(){
            
            if (includes (quantity, i)) {

                this.classList.add("bomb");
            }else{

                this.classList.toggle("active");
            }
        } 
    )
    
    return square;
}

function includes (quantity, number) {

    const bombearray = [];
        
    while (bombearray.length < 16) {
            
        const randomnumber = Math.floor(Math.random() * quantity) + 1;
            
        if(!bombearray.includes(randomnumber)) {
                
            bombearray.push(randomnumber);
        }
    }

    if (bombearray.includes(number)) {
        
        return true;
    }
}