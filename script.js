function cycleWords() {
  var words = [
      "Hello! My name is Matthew",
      "你好！ 我叫张智谦",
      "안영하십니다! 저는 매튜입니다",
      "¡Hola! Me llamo Mateo"
  ],
  i = 0;
  setInterval(function(){
      $('#words').fadeOut(function(){
          $(this).html(words[i = (i + 1) % words.length]).fadeIn();
      });
  }, 3000);
}

$(document).ready(function() {
  cycleWords();
});
