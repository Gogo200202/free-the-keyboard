javascript:(function(){
  allowCopyAndPaste = function(e){
  e.stopImmediatePropagation();
  return true;
  };
  document.addEventListener('keydown', allowCopyAndPaste, true);
  document.addEventListener('keypress', allowCopyAndPaste, true);
  document.addEventListener('keyup', allowCopyAndPaste, true);
    document.addEventListener('copy', allowCopyAndPaste, true);
  document.addEventListener('paste', allowCopyAndPaste, true);
})(); 
