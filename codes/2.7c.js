var o={},x=5;
Object.defineProperty(o,'dd',{ // dataDescriptor
   configurable: false,   // may be changed or deleted? required. default:false
   enumerable: false,    // shows up in for...in, Object.keys()...? required.    
   default:false
   writable: false,          // can be changed with = ? optional. default: false
   value: 100,               // the value. optional. default: undefined
});
Object.defineProperty(o,'ad',{  // accessorDescriptor
   configurable: false,    // may be changed or deleted? required. default:false
   enumerable: false,     // shows up in for...in, Object.keys()...? required. 
   default:false,
   get: ()=>x,
   set: (p)=>{x+=p;}
});
console.log(o);  // {dd: 100}
o.ad=10; console.log(o.ad,x);  //15 15
