$(function() {
  $(`.c-humberger_sp`).click(function() {
    var modalMenu = $(this).find(`.c-headerMenu__sp`);
    if (modalMenu.hasClass(`modalOpen`)) {
      modalMenu.removeClass(`modalOpen`);
    } else {
      modalMenu.addClass(`modalOpen`);
    }
  });

  $(`.p-index-faqList__item`).click(function() {
    var $answer = $(this).find(`.answer`);
    if ($answer.hasClass(`open`)) {
      $answer.removeClass(`open`);
      $answer.slideUp(2000);
      $(this).find(`span`).text(`+`);
    } else {
      $answer.addClass(`open`);
      $answer.slideDown(2000);
      $(this).find(`span`).text(`-`);
    }
  });
});