var today = new Date().toLocaleDateString('en-GB', {
    day : 'numeric',
    month : 'short',
    year : 'numeric'
}).split(' ').join('-');
console.log(today); // 19-Jul-2017
