var fgimage=null;
var bgimage=null;
var newimage=null;
var threshold=200;
function upload_fg(){
  var cc1=document.getElementById("c1");
  var ffile1=document.getElementById("file1");
  fgimage=new SimpleImage(ffile1);
  fgimage.drawTo(cc1);
}
function upload_bg(){
  var cc2=document.getElementById("c2");
  var ffile2=document.getElementById("file2");
  bgimage=new SimpleImage(ffile2);
  bgimage.drawTo(cc2);
}
function make_composite(){
  if(fgimage==null || !fgimage.complete()){
    alert("not done loading");
  }
  if(bgimage==null || !bgimage.complete()){
    alert("not done loading");
  }
  newimage=new SimpleImage(fgimage.getWidth(),fgimage.getHeight());
  for(var pixel of fgimage.values()){
    var newpixel=newimage.getPixel(pixel.getX(),pixel.getY());
    var bgpixel=bgimage.getPixel(pixel.getX(),pixel.getY());
    if(pixel.getGreen()>threshold){
      newpixel.setAllFrom(bgpixel);
    }
    else{
      newpixel.setAllFrom(pixel);
    }
  }
  var cc1=document.getElementById("c1");
  var cc2=document.getElementById("c2");
  ctx1=cc1.getContext("2d");
  ctx2=cc2.getContext("2d");
  ctx1.clearRect(0,0,cc1.width,cc1.height);
  ctx2.clearRect(0,0,cc2.width,cc2.height);
  newimage.drawTo(cc1);
}
function clearall(){
  var cc1=document.getElementById("c1");
  var cc2=document.getElementById("c2");
  ctx1=cc1.getContext("2d");
  ctx2=cc2.getContext("2d");
  ctx1.clearRect(0,0,cc1.width,cc1.height);
  ctx2.clearRect(0,0,cc2.width,cc2.height);
}