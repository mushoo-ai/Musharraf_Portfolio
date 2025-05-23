try {
    throw new ReferenceError();
}catch(err){
    console.log(err);
    console.log("There was waas a Reference Error");
}
console.log("My Program does not stop");