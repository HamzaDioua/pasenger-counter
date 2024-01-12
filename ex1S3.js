function eval(){
var sans_tax = document.getElementById('prix_sans_tax');
var pretax = parseInt(sans_tax.value);
var tax=0;

if (pretax<200){
    tax = pretax + (pretax*0.1);
}
else {
    tax =pretax+(pretax*0.2);
}
document.getElementById('prix_tax')=tax;
}
