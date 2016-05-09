$(document).ready(function(){
  codeGenerator = new SecretCode('input','output');
    $(codeGenerator.input).on('keyup', codeGenerator.encode);
});


