var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true,
    hasfourlegs: false
}
var plants={
    walking:false,
    eating: false,
    leaves: true,
    root: true,
    color_green: true
}
var eagle1= Object.create(bird);
console.log("eagle1",eagle1);

console.log("eagle1 has wings:", eagle1.hasWings);
console.log("eagle1 can fly:", eagle1.canFly);
console.log("eagle1 has feathers:", eagle1.hasFeathers);
console.log("eagle1 has four legs:", eagle1.hasfourlegs);

var parrot= Object.create(bird);
console.log("parrot can fly:", parrot.canFly);

var apple= Object.create(plants);
console.log("Apple plant has root:",apple.root);
console.log("Apple plant has leaves:",apple.leaves);
console.log("Apple plant walking:",apple.walking);
console.log("Apple plant leaves color is green:",apple.color_green);

apple.eating=true;

console.log("Apple plant eating:",apple.eating);