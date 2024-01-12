$(function(){
$('.boite').hide();
$("button.afficher").click(function(){$(".boite").show();});
$("button.masquer").click(function(){
      $(".boite").hide();
});
});