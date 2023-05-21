function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("Mobilenet", modelLoaded);
}

function modelLoaded(){
  console.log("Model Loaded!");
}

function draw(){
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResults);
}

var previous_result = "";

function gotResults(error, results){
  if(error){
    console.error(error);
  }
    else{
    if((results[0].confidence > 5) && (previous_result != result[0].label))  {
      console.log(results);
      previous_result = results[0].label;
      var synth = new speechSynthesis;
      speak_data = "Object Dettected is -" + result[0].label;
      var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
    }
    }
}




