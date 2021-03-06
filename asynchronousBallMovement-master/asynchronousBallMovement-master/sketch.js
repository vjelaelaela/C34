var b, position, database;

function setup(){
    createCanvas(500,500);
    database=firebase.database()
    b = createSprite(250,250,10,10);
    b.shapeColor = "red";

    var bPosition=database.ref('ball/position')
    bPosition.on("value", readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        x:position.x+x,
        y:position.y+y
    })
    
}

function readPosition(data){
position=data.val()
b.x=position.x
b.y=position.y
}