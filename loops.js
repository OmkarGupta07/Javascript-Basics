let arr=[ {name:"eren",type:1} , 
{name:"levi",type:2},
{name:"mikasa",type:3},
{name:"armin",type:4}    ]



// arr.forEach((val) => {
// console.log(val.name,val.type)
// })


const books = [
    { title: 'Book 1', author: 'Author A', pages: 200 },
    { title: 'Book 2', author: 'Author B', pages: 350 },
    { title: 'Book 3', author: 'Author C', pages: 150 },
    { title: 'Book 4', author: 'Author D', pages: 280 },
    { title: 'Book 5', author: 'Author E', pages: 180 }
];



function filterbooks(page){
var bc= books.filter((item) => item.pages<page);
console.log(bc);
}
filterbooks(300)
const transactions = [
    { type: "credit", amount: 100 },
    { type: "debit", amount: 50 },
    { type: "credit", amount: 75 },
    { type: "debit", amount: 25 }
];


let data=transactions.reduce((acc,cur)=> {
    if(cur.type=="credit")
        return acc+cur.amount 
    else 
       return acc-cur.amount
},0)

console.log(data);