
class ProductModelMem {

    products = [];

    lastProductId = 0;
    getNextProductId () {
        return String(++this.lastProductId);
    }


    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - C: Create                              //
    ////////////////////////////////////////////////////////////////////////////////`

    createProduct (product) {
        product.id = this.getNextProductId();
        this.products.push(product);
        return product;
    };


    ///////////////////////////////////////////////////////////////////////////////
    //                               CRUD: R: Read                               //
    ///////////////////////////////////////////////////////////////////////////////

    readProducts () {
        return this.products;
    }

    readProduct (id) {
        return this.products.find(prod => prod.id === id) || {};
    }


    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - U: Update                              //
    ////////////////////////////////////////////////////////////////////////////////`

    updateProduct(id, product) {
        let index = this.products.findIndex(prod => prod.id === id);
        // Si no se encontró
        if (index === -1) {
            return {};
        }
        this.products[index] = product;
        return product;
    };


    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - D: Delete                              //
    ////////////////////////////////////////////////////////////////////////////////`

    deleteProduct (id) {
        let index = this.products.findIndex(prod => prod.id === id);
        // Si no se encontró
        if (index === -1) {
            return {};
        }
        const removedProduct = this.products.splice(index, 1)[0];
        return removedProduct;
    };

}

export default ProductModelMem;
