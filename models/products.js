import config, { PERSISTENCE_TYPES } from '../config.js';
import ProductModelMem from './products-mem.js';
import ProductModelFS from './products-fs.js';
import ProductModelMongoDB from './products-mongodb.js';
import MongoDB from '../services/DB/MongoDB.js';

class ProductModel {
    static get (type) {
        console.log(`##### Persistencia -> ${config.PERSISTENCE_TYPE} #####`);
        switch (type) {
            case PERSISTENCE_TYPES.TYPE_MEMORY:
                return new ProductModelMem();
            case PERSISTENCE_TYPES.TYPE_FILE:
                return new ProductModelFS();
            case PERSISTENCE_TYPES.TYPE_MONGODB:
                MongoDB.connectDB();
                return new ProductModelMongoDB();
            default:
                return new ProductModelMem();
        }
    }
}

export default ProductModel;
