function image_load() {
  var c = event.currentTarget;
  var x = c.src;
  //console.log(x);
  document.getElementById("bigImage").src = x;
	
};
document.querySelector("#q").addEventListener('click',image_load);
document.querySelector("#w").addEventListener('click',image_load);
document.querySelector("#e").addEventListener('click',image_load);
document.querySelector("#a").addEventListener('click',image_load);
document.querySelector("#s").addEventListener('click',image_load);