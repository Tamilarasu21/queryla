// dynamic year for footer
document.getElementById("year").innerHTML=new Date().getFullYear();

//text animator for homepage
$("#js-rotating").Morphext({
animation: "pulse",
separator: ",",
speed: 2000,
complete: function() {}
});
