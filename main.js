Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
 Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_img' src="+data_uri+">";
    });
}
prediction1=""
prediction2=""

function speaking(){
    synth=window.speechSynthesis;
    speak="the first prediction is"+prediction1+"and the second prediction is"+prediction2;
    utterthis=new SpeechSynthesisUtterance(speak);
    synth.speak(utterthis);
}
console.log("ml5 version is",ml5.version)
our_modle=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/q8QjmcqaI/model.json",model_loaded)
function model_loaded(){
    console.log("model is successfully loaded");
    
}