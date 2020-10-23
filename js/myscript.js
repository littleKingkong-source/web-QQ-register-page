var i=1;
setInterval(function(){
    i++;
    if(i>3){
        i=1;
    }
    document.getElementById('myimg').src="images/"+i+".jpg";
},2000);