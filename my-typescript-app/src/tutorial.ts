/* // Union type
let tax: number | string = 10
tax = 100
tax = '$10'

let requestStatus: 'pending' | 'success' | 'error' = 'pending'
requestStatus = 'success'
// requestStatus = 'random';

// any type
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = 123
notSure = false

console.log(notSure) */

/* const books = ['1984', 'Brave New World', 'Farenheit 451']

let foundBook: string | undefined

for (let book of books) {
  if (book === '1983') {
    foundBook = book
    foundBook = foundBook.toUpperCase()
    break
  }
}

console.log(foundBook?.length) */

// discount = true;   // This will cause typescript error

// orderStatus = 'cancelled' // Error: Type '"cancelled"' is not assignable to type '"processing" | "shipped" | "delivered"'.

// typescript arrays and object
// prices.push('hello') // this will cause typescript error

// let randomValues: [] = ['hello']   // this will cause error

// colors.push(false)

// objects in typescript
/* let car: { brand: string; year: number } = { brand: 'Toyota', year: 1978 }

car.brand = 'ford'
// car.color = 'blue'; // causing error

// benefits of defining an object shape
let book = { title: 'book', cost: 20 }
let pen = { title: 'pen', cost: 10 }
let noteBook = { title: 'noteBook' }

// let items:{title:string; cost:number}[] = [book, pen, noteBook]    // we cannot add noteBook to items array as the shape is different
let items: { title: string; cost: number }[] = [book, pen]

let items2: { title: string; cost?: number }[] = [book, pen, noteBook] // setting up an optional property;

// items2[2].cost = 30
// items2[0].cost = 25
// console.log(items2[2].cost)
// console.log(items2[2])
// console.log(itemms2)

// setting up readonly properties for objects
let items3: { readonly title: string; cost?: number }[] = [book, pen, noteBook] // setting up an optional property; */

// items3[0].title = 'new Book';    // typescript error;

let bike: { brand: string; year: number } = { brand: 'yamaha', year: 2010 }

let laptop: { brand: string; year: number } = { brand: 'lenovo', year: 2024 }

// laptop.year = 'new'
