noseX = 0;
noseY = 0;

function preload()
{
  image_nose = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8WAeB3ytiNH5HbWgjw-c7hs8H83d_3FINdJfHN8oiWbOnJFEcyNpq2MCwTTeRDPA6uII&usqp=CAU')
}

function setup()
{
   canvas = createCanvas(300, 300);
   canvas.center();

   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
   console.log("model has oaded");
}

function gotPoses(results)
{
    if(results.length > 0)
   {console.log("nosex =" + results[0].pose.nose.x);
      noseX = results[0].pose.nose.x-15;
      noseY = results[0].pose.nose.y-0;
   }
}

function draw()
{
   image(video, 0, 0, 300, 300);
   console.log("image");
   image(image_nose, noseX, noseY, 30, 20);
}

function take_snapshot()
{
    save('image.png');
}