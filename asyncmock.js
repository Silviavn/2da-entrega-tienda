const misProductos = [
    { id: "1", nombre: "Perfume de princesa bella", detalle:"Contamos con este perfume con aroma floral inspirado en la primavera, suave, perfecto para nuestras princesas",precio:7000 , img: "https://res.cloudinary.com/dmicwl879/image/upload/v1688707267/proyecto-react-peluqueria/e70875a87f40e0fbfd9635d3308d4688_sp6pao.jpg", idCat: "1" },
    { id: "2", nombre: "Perfume de blanca nieves", detalle:"Contamos con este perfume con aroma citrico tales como naranja, pomelo y limon, aroma sutil para nuestras princesas", precio: 5000, img: "https://res.cloudinary.com/dmicwl879/image/upload/v1688707266/proyecto-react-peluqueria/permuj_rh3qvp.jpg", idCat: "1" },
    { id: "3", nombre: "Perfume musti", detalle:"Contamos con nuestro perfume de lujo ideal para nuestros bebes recien nacidos, un aroma suave e hipoalergenico totalmente seguro para su uso", precio: 8000, img: "https://res.cloudinary.com/dmicwl879/image/upload/v1688707159/proyecto-react-peluqueria/15814391094118_pdjy88.jpg", idCat: "1" },
    { id: "4", nombre: "Desenredante de cabello niña", detalle:"Nuestro producto asegura facilidad al peinar el cabello de nuestras niñas evitando que peinarlas sea un sufrimiento, brinda nutrientes a su cabello", precio: 5000, img: "https://res.cloudinary.com/dmicwl879/image/upload/v1688706933/proyecto-react-peluqueria/desni%C3%B1a_ospypl.jpg", idCat: "1" },
    { id: "5", nombre: "Cepillo dental de princesa", detalle:"Nuestro cepillo de dientes les protege sus encias y brinda proteccion dental de nuestras pequeñas", precio: 4000 , img: "https://res.cloudinary.com/dmicwl879/image/upload/v1689226211/file_rmnliw.webp", idCat: "1" },
    { id: "6", nombre: "Cepillo de cabello", detalle:"Con estos bellos accesorios podrás lucir como tu personaje favorito de My Little Pony. Nota: Las fotos y colores del producto son referenciales, pueden variar.", precio: 3000, img: "https://res.cloudinary.com/dmicwl879/image/upload/v1689226209/images_1_xyyopu.jpg", idCat: "1" },
    { id: "7", nombre: "Cremas corporales de princesa", detalle:"Nuestras cremas de princesas brindaran total nutricion corporal para nuestras pequeñas brindando vitaminas necesarias y total humectacion de su piel.", precio: 16000, img: "https://res.cloudinary.com/dmicwl879/image/upload/v1689226205/images_iqjr8b.jpg", idCat: "1" },
    { id: "8", nombre: "Pinches", detalle:"Nuestros hermosos pinches y decoraciones para tu niña son totalmente exclusivos de nuestra tienda", precio: 9000, img: "https://res.cloudinary.com/dmicwl879/image/upload/v1689226351/500_eyg237.webp", idCat: "1" },
    { id: "9", nombre: "Perfume de Cars", detalle:"Nuestro perfume de cars le brindara a tu hijo un aroma fresco, rico y suave.", precio: 10000, img: "https://res.cloudinary.com/dmicwl879/image/upload/v1688707162/proyecto-react-peluqueria/per_lyv4q6.png", idCat: "2" },
    { id: "10", nombre: "Perfume de los vengadores", detalle:"Nuestro perfume les brindara un rico aroma a pino, sutil y fresco", precio: 13000, img: "https://res.cloudinary.com/dmicwl879/image/upload/v1688707155/proyecto-react-peluqueria/perfume-nino-battle-field-83222_pg8og8.png", idCat: "2" },
    { id: "11", nombre: "Desenredante de cabello niño", detalle:"Nuestro producto asegura que su pequeño no sufra al peinarse su cabello ni tironearlo", precio: 5000, img: "https://res.cloudinary.com/dmicwl879/image/upload/v1688706929/proyecto-react-peluqueria/des_jghut7.jpg", idCat: "2" },
    { id: "12", nombre: "Pasta dental de leon", detalle:"Nuestra pasta de dientes le asegura total proteccion  bacteriana a nuestros niños", precio: 5000, img: "https://res.cloudinary.com/dmicwl879/image/upload/v1689226655/descarga_mtkebm.jpg", idCat: "2" },
    { id: "13", nombre: "Cepillo dental de spiderman", detalle:"Nuestros cepillo de dientes acegura que su pequeño tenga total proteccion y limpieza dental", precio: 2000, img: "https://res.cloudinary.com/dmicwl879/image/upload/v1689226588/descarga_mzz7vj.jpg", idCat: "2" },
    { id: "14", nombre: "Perfume del capitan america", detalle:"Nuestro perfume le da un ollor unico a su pequeño con aroma citricos pero sumamente suave y agradable", precio: 4000, img: "https://res.cloudinary.com/dmicwl879/image/upload/v1689226780/descarga_e6e7od.jpg", idCat: "2" },
    { id: "15", nombre: "Perfume de Mickey", detalle:"Nuestro perfume asefura a su pequeño con un aroma unico e inigualable entre nuestras exquisitas mezclas de aroma citrico y dulce", precio: 19000, img: "https://res.cloudinary.com/dmicwl879/image/upload/v1689226838/51nzPKXUuVL._AC_UL330_SR330_330__yark3v.jpg", idCat: "2" },
    { id: "16", nombre: "Perfume babe", detalle:"Nuestro perfume asegura que nuestro bebe tenga un olor bastante rico e inocente", precio: 20000, img: "https://res.cloudinary.com/dmicwl879/image/upload/v1689226935/15814386872247_hf6iaz.jpg", idCat: "2" },

]

export const getProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(misProductos)
        }, 100)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una nueva función que retorna toda la categoría:

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}