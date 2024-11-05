
//if we create a variabl
function Checkvar(){
    var av=10;
    if (true) {
        var av=0;

        console.log(av);
    }
    console.log(av);
}


function CheckLet() {
    let ab=0;

    if (true) {
        let ab =1;
    console.log(ab);
    }

    console.log(ab);
}

Checkvar();
console.log("after var")
CheckLet();

console.log("after let ");

for (let index = 0; index < 10; index++) {

    console.log(index);


}
//console.log(index);



console.log("after let");



const names =[];
names[0]="eren";
names[1]="levi";

console.log(names);
//names="destriying the hardest";
//console.log(names);

var names1=[];

names1[0]="erenbro";
console.log(names1);
names1="array destroyed";


console.log(names1);