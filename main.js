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
}
console.log("ML 5 version: ", ml5.version)