class ProductService {

    //methods
    public findAll(): string {
        return "findAll"
    }

    public save(name: string): string {
        return "saved"
    }
}

let productService = new ProductService()
console.log(productService.findAll())
console.log(productService.save("product"))
