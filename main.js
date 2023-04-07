Webcam.set({
    width: 350,
    height: 300,
    image_format: ' png ',
    png_quality: 90
})

camera = document.getElementById("camera");

Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src="+ data_uri+" >";
    })
}

console.log("ML5 VERSION IS ",ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KcBpSdwKS/model.json", modelLoded)

function modelLoded(){
    console.log("teacheable machine model is loded")
}