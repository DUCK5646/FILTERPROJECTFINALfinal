let facemesh;
let video;
let predictions = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  facemesh = ml5.facemesh(video, modelReady);

  facemesh.on("predict", results => {
    predictions = results;
  });
  video.hide();
}

function modelReady() {
  console.log("Model ready!");
}

function draw() {
  image(video, 0, 0, width, height);
    if (predictions.length > 0) {
    textSize(300)
   text('🎩',predictions[0].annotations.midwayBetweenEyes[0][0]-150,predictions[0].annotations.midwayBetweenEyes[0][1]-100);
       text('🕶️',predictions[0].annotations.midwayBetweenEyes[0][0]-150,predictions[0].annotations.midwayBetweenEyes[0][1]+100);

    }
  // drawKeypoints();
  printAnnotations();
}
function printAnnotations(){
  if (predictions.length > 0) {
    console.log(Object.keys(predictions[0].annotations))

    const midEyes = predictions[0].annotations.midwayBetweenEyes[0];
    let x =  predictions[0].annotations.midwayBetweenEyes[0][0];
    let y =  predictions[0].annotations.midwayBetweenEyes[0][1];
    console.log(midEyes)
  }
}
// function drawKeypoints() {
//   for (let i = 0; i < predictions.length; i += 1) {
//     const keypoints = predictions[i].scaledMesh;
//     // Draw facial keypoints.
//     for (let j = 0; j < keypoints.length; j += 1) {
//       const [x, y] = keypoints[j];
//       fill(0, 255, 0);
//       ellipse(x, y, 5, 5);

//     }
//   }
// }
