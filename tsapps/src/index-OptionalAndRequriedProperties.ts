
//class as type
class Product {
    id: number
    name?: string
    qty?: number
    price?: number
    inStock?: boolean
}

//literal object
let product:Product = {
    id: 1,
    name: 'Phone',
    qty: "100",
    price: 10000,
    inStock: true
}
console.log(`id ${product.id}`)
console.log(`name ${product.name}`)
console.log(`qty ${product.qty}`)
console.log(`price ${product.price}`)
console.log(`inStock ${product.inStock}`)

let newProduct:Product = {
    id: 1,
    name: 'Phone',
    inStock: true
}

