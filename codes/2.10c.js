<!DOCTYPE html> 
<html><head></head><body>
   <input id="myButton" type="button" value="HI" 
              onclick="alert(this.value)"/>
<script>
 document.getElementById("myButton").onclick =  
    function(){//no arrow function;overrides the above
        alert(""+this.value+this.value);
    }
</script></body></html>
