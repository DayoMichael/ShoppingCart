function generateRan(){
    var max = 20;
    var random = [];
    for(var i = 0;i<max ; i++){
        var temp = Math.floor(Math.random()*max);
        if(random.indexOf(temp) == -1){
            random.push(temp);
        }
        else
         i--;
    }
    console.log(random)
}

generateRan();