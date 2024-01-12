function aujourd(){
var maintenant=new Date();
j = maintenant.getDate();
m = maintenant.getMounth();
an = maintenant.getFullYear();
h = maintenant.getHours();
min = maintenant.getMinutes();
sec = maintenant.getSeconds();
document.write("<h1>Date et heure</h1><hr>");
document.write("Nous sommes le "+j+" / "+m+" / "+an+".<br>");
document.write("il est "+h+"Heures"+min+"minutes "+sec+"secondes.<br>");
}