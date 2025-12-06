function whatIsInAName(collection, source) {

   const sourceKeys = Object.keys(source);

   return collection.filter(function (obj) {

     return sourceKeys.every(function (key) {

       return obj[key] === source[key];
     });
   });
}


console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))