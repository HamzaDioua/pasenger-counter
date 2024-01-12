function moyenne(){
    var DS1=document.getElementById('DS1');
    var m1=parseInt(DS1.value);
    var DS2=document.getElementById('DS2');
    var m2=parseInt(DS2.value);
    var DS3=document.getElementById('DS3');
    var m3=parseInt(DS3.value);
    var moyenne=0;
    moyenne=(m1+m2+m2)/3;
    if (moyenne>=0) {alert('validee');}
    else {alert('non validee');}

    document.getElementById('myn').value=moyenne;
}

function test(){
	alert('test')
}