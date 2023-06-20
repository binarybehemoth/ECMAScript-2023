   // 1. Use encodeURI when you want a working URL.
   console.log(encodeURI("http://www.google.com/a file with spaces.html"));
   //http://www.google.com/a%20file%20with%20spaces.html

   // 2. Use encodeURIComponent when you want to encode 
   // a URL parameter.
   var param1 = encodeURIComponent("http://example.com/?a=12&b=55");
   url = "http://domain.com/?param1=" + param1 + "&param2=99";
   console.log(url);
   /* http://domain.com/?param1=http%3A%2F%2Fexample.
       com%2F%3Fa%3D12%26b%3D55&param2=99 */
   
   console.log(decodeURIComponent(url));
// http://domain.com/?param1=http://example.com/?
// a=12&b= 55&param2=99 
