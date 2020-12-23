Webcam.set({
    image_format:"jpeg",
    jpeg_quality: 90,
    width:450,
    height:400
})

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapShot(){
    Webcam.snap(function (qwerty){
        document.getElementById("result").innerHTML = "<img id='capturedImage' src = "+ qwerty + ">";
    })
}

console.log(ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bzKSbTiDF/", d);

function d(){
    console.log("loaded!!")
}