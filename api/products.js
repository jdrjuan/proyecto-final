import config from '../config.js';
// import Model from '../models/products-mem.js';
// import Model from '../models/products-fs.js';
// import Model from '../models/products-mongodb.js';
import Model from '../models/products.js';

// const model = new Model();
// const model = Model.get('MEM');
// const model = Model.get('FILE');
// const model = Model.get('MONGODB');
const model = Model.get(config.PERSISTENCE_TYPE);

///////////////////////////////////////////////////////////////////////////////
//                                API Get All                                //
///////////////////////////////////////////////////////////////////////////////`

const getProducts = async () => await model.readProducts();


///////////////////////////////////////////////////////////////////////////////
//                                API Get One                                //
///////////////////////////////////////////////////////////////////////////////`

const getProduct = async id => {
    const product = await model.readProduct(id);
    return product;
};


////////////////////////////////////////////////////////////////////////////////
//                                 API Create                                 //
////////////////////////////////////////////////////////////////////////////////`

const createProduct = async product => {
    const createdProduct = await model.createProduct(product);
    return createdProduct;
};


////////////////////////////////////////////////////////////////////////////////
//                                 API Update                                 //
////////////////////////////////////////////////////////////////////////////////`

const updateProduct = async (id, product) => {
    const updatedProduct = await model.updateProduct(id, product);
    return updatedProduct;
};


////////////////////////////////////////////////////////////////////////////////
//                                 API Delete                                 //
////////////////////////////////////////////////////////////////////////////////`

const deleteProduct = async id => {
    const removedProduct = await model.deleteProduct(id);
    return removedProduct;
};


// await createProduct({ name: 'Laptop HP Pavilion', brand: 'HP', cost: 1599, stock: 5, category: 'computadoras', image: '/img/products/apple-iphone-11-pro-max.jpg', description: 'Potente laptop HP Pavilion para trabajo y entretenimiento, con diseño elegante y rendimiento excepcional.' })
// await createProduct({ name: 'Smartphone Galaxy S21', brand: 'Samsung', cost: 1299, stock: 8, category: 'smartphones', image: '/img/products/apple-iphone-12.jpg', description: 'El Galaxy S21 de Samsung: tecnología innovadora, cámara avanzada y diseño sofisticado para una experiencia móvil superior.' });
// await createProduct({ name: 'Cámara Mirrorless EOS R6', brand: 'Canon', cost: 2499, stock: 4, category: 'cámaras', image: '/img/products/camara-canon.jpg', description: 'Captura momentos inolvidables con la cámara Mirrorless EOS R6 de Canon, ofreciendo calidad profesional y versatilidad.' });
// await createProduct({ name: 'Smart TV LG', brand: 'LG', cost: 899, stock: 10, category: 'tecnología', image: '/img/products/televisor-lg.jpg', description: 'Disfruta de imágenes nítidas y colores vibrantes con la Smart TV LG. Perfecta para entretenimiento en casa.' });
// await createProduct({ name: 'Auriculares Inalámbricos Sony', brand: 'Sony', cost: 199, stock: 15, category: 'audio', image: '/img/products/auriculares-sony.jpg', description: 'Sumérgete en la música con estos auriculares inalámbricos Sony de alta calidad y sonido envolvente.' });
// await createProduct({ name: 'Drone DJI Phantom 4', brand: 'DJI', cost: 1299, stock: 3, category: 'tecnología', image: '/img/products/drone-dji.jpg', description: 'Explora el cielo con el Drone DJI Phantom 4. Captura vistas impresionantes desde el aire con su potente cámara.' });
// await createProduct({ name: 'Lavarropas DH EcoClean', brand: 'DH', cost: 499, stock: 7, category: 'electrodomésticos', image: '/img/products/lavarropas-dh.jpg', description: 'Lavarropas DH EcoClean con tecnología de lavado eficiente y diseño moderno. Cuida tu ropa y el medio ambiente.' });
// await createProduct({ name: 'Modem Motorola Turbo', brand: 'Motorola', cost: 79, stock: 20, category: 'tecnología', image: '/img/products/modem-motorola.jpg', description: 'Conéctate a la velocidad de la luz con el Modem Motorola Turbo. Navegación rápida y estable para tus dispositivos.' });
// await createProduct({ name: 'Notebook Lenovo ThinkPad', brand: 'Lenovo', cost: 1299, stock: 12, category: 'computadoras', image: '/img/products/notebook-lenovo.jpg', description: 'Potencia y rendimiento en cada tarea con la Notebook Lenovo ThinkPad. Diseño elegante y duradero para profesionales.' });
// await createProduct({ name: 'Chromecast Google 4K', brand: 'Google', cost: 49, stock: 25, category: 'tecnología', image: '/img/products/chromecast-google.jpg', description: 'Transmite contenido en 4K a tu televisor con el Chromecast Google. Conectividad fácil y calidad de imagen impresionante.' });
// await createProduct({ name: 'DJI Mavic 2 Pro Drone', brand: 'DJI', cost: 1599, stock: 5, category: 'tecnología', image: '/img/products/dji-mavic-2-pro.jpg', description: 'Explora el mundo desde las alturas con el DJI Mavic 2 Pro Drone. Cámara de alta resolución y vuelo estable para capturas asombrosas.' });
// await createProduct({ name: 'Google Nest Mini', brand: 'Google', cost: 39, stock: 30, category: 'tecnología', image: '/img/products/google-nest-mini.jpg', description: 'Controla tu hogar inteligente con el Google Nest Mini. Compacto pero potente, con asistente de voz integrado.' });
// await createProduct({ name: 'Motorola Moto E7', brand: 'Motorola', cost: 149, stock: 18, category: 'smartphones', image: '/img/products/motorola-moto-e7.jpg', description: 'Disfruta de un rendimiento confiable con el Motorola Moto E7. Pantalla vibrante y cámara versátil para tus necesidades diarias.' });
// await createProduct({ name: 'Parlante JBL Charge 4', brand: 'JBL', cost: 129, stock: 22, category: 'audio', image: '/img/products/parlante-jbl.jpg', description: 'Lleva la fiesta a todas partes con el Parlante JBL Charge 4. Sonido potente y resistente al agua para tus aventuras.' });
// await createProduct({ name: 'Samsung Galaxy S21 Plus 5G', brand: 'Samsung', cost: 1499, stock: 6, category: 'smartphones', image: '/img/products/samsung-galaxy-s21-plus-5g.jpg', description: 'Experimenta el poder del 5G con el Samsung Galaxy S21 Plus. Pantalla impresionante y rendimiento excepcional en tus manos.' });
// await createProduct({ name: 'Samsung TU7000 TV', brand: 'Samsung', cost: 599, stock: 9, category: 'tecnología', image: '/img/products/samsung-tu7000.jpg', description: 'Sumérgete en la experiencia cinematográfica con la Samsung TU7000 TV. Imágenes nítidas y colores vibrantes para tus momentos de entretenimiento.' });
// await createProduct({ name: 'Sony PlayStation 5', brand: 'Sony', cost: 499, stock: 4, category: 'juegos y consolas', image: '/img/products/sony-playstation-5.jpg', description: 'Sumérgete en el mundo del juego con la Sony PlayStation 5. Potencia y realismo para una experiencia de juego inigualable.' });


export default {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};
