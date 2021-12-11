$("#js-rotating").Morphext({
animation: "pulse",
separator: ",",
speed: 2000,
complete: function() {}
});

document.getElementById("year").innerHTML=new Date().getFullYear();
