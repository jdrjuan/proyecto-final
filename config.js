const PERSISTENCE_TYPES = {
    TYPE_MEMORY: 'MEMORY',
    TYPE_FILE: 'FILE',
    TYPE_MONGODB: 'MONGODB',
};

const config = {
    PORT: 8080,
    PERSISTENCE_TYPE: PERSISTENCE_TYPES.TYPE_MONGODB,
    // MONGODB_CONNECTION_STR: 'mongodb://127.0.0.1/ecommerce',
    MONGODB_CONNECTION_STR: 'mongodb+srv://juanromeroclases:Abc123@cluster0.ipwtjrp.mongodb.net/ecommerce?retryWrites=true&w=majority',
    MONGODB_CONNECTION_TIMEOUT: 2000,   // Valor bajo para TESTING
};

export {PERSISTENCE_TYPES, config as default};
