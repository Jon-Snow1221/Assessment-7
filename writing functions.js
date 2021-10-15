

function hasUniqueChars(str) {
    for(let i = 0; i < str.length; i++){
       const el = str[i];
       if(str.indexOf(el) !== str.lastIndexOf(el)){
          return false;
       };
    };
    return true;
 };

 console.log(hasUniqueChars('Apple'));