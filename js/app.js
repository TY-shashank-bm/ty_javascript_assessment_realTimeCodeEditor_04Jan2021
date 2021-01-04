function addCode() {
  var html = document.getElementById("html");
  // var css = document.getElementById("css");
  // var js = document.getElementById("js");
  var code = document.getElementById("output").contentWindow.document;

  onclick = function () {
      var htmlCode=html.value;
    code.write(
    //   
    htmlCode
      //html.value +"<style>" +css.value +"</style>" +"<script>" +js.value +"</script>"
    );
  };
}
addCode();