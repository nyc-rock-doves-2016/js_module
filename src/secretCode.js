var SecretCode = function(input, output){
  this.input = $('#' + input)
  this.output = $('#' + output)
}

SecretCode.prototype.encode = function(){
  codeGenerator.output.text( codeGenerator.input.val() );
}