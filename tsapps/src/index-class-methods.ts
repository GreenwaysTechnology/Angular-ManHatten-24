//methods
class ProductService {

    //methods
    findAll(): string {
        return "findAll"
    }

    save(name: string): string {
        return "saved"
    }
}
let productService = new ProductService()
console.log(productService.findAll())
console.log(productService.save("product"))
