function setup()
{

c1=createCanvas(280,280)
c1.center();
background("white");
synth= window.speechSynthesis
c1.mouseReleased(classifyCanvas)

}

function classifyCanvas(){

mymodel.classify(c1,gotResult)


}


function Erase(){

background("white")


}


function preload(){

mymodel=ml5.imageClassifier('DoodleNet')


}

function draw(){

strokeWeight(13)
stroke("black")
if(mouseIsPressed){

line(pmouseX,pmouseY,mouseX,mouseY)


}


}

function gotResult(error,results)
{
if(error){
console.log(error);
}
else{
console.log(results);
document.getElementById("object_name").innerHTML="Object name is "+results[0].label;
document.getElementById("Accuracy").innerHTML="Confidence : "+Math.round(results[0].confidence*100)+"%"
saythis=new SpeechSynthesisUtterance(results[0].label);
synth.speak(saythis);


}

}