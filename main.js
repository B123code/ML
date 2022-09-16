Webcam.attach("#cam");
camera = document.getElementById("cam");

Webcam.set({
    width: 350,
    height: 120,
    image_format: 'png',
    png_quality: 90
});

function take() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="capture" src="'+data_uri+'"/>'
    });
    img=document.getElementById("capture");
    classifier.classify(img, gotresult);
}
console.log("ML 5 version: ", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KBd9JSd05/model.json", modelloaded);

function modelloaded() {
    console.log("model loaded");
}

function gotresult(error, results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result-obj").innerHTML=results[0].label;
        document.getElementById("result-acc").innerHTML=results[0].confidence.toFixed(3);
    }
}