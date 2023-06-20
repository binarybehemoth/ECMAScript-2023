   var n = 50;
   var c =  (n>1000 )?"thousands"
              :(n>100  )?"hundreds"
              :(n>10   )?"tens"
              :"a few";
   console.log(c);   // tens
