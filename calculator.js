var input = document.getElementById("history");
var output = document.getElementById("result");

function del(){
   document.getElementById("del");
   var len = input.value.length;
   input.value(input).value.substring(0, len-1);
}

function SetFocusOnInput(){
   input.focus();
}
function SetOperators(value){
   var val = value.value;
   input.value+=val;
   if(val == 'C'){
       input.value = "";
   }
}

function SetOperands(value){
   var val = value.value;
   input.value+=val;
   if(val == 'C'){
       input.value = "";
   }
}

function GetChar(char){
   var code = (char.keyCode ? char.keyCode : char.which);
   if(code == 13){
       result();
   }
   if (code == 90 || code == 67){
       input.value = eval(input.value);
   }
}

function Compute(){
   input.value = eval(input.value);
}

function verification(input){
   var ch = input.value.replace(/[^\d/*+-]/g, '');
   if(pos != -1){
       if((ch.length-pos)>2){
           ch = ch.slice(0, -1);
       }
   }
}