// export const getAllProduct = async (loadingTrue, loadingFalse) => {
//     let products = [];
//     try {
//         loadingTrue()
//         const request = await fetch("https://dummyjson.com/products");
//         const response = await request.json();
//         const listProducts = response.products;
//         products = [...listProducts];
//         return products;
//     } catch (error) {
//         console.log(error);
//         return [];
//     } finally {
//         loadingFalse()
//         console.log("Petición finalizada");
//     }
// }

export const getProductsForCategory = async (arrayOfCategories, loadingTrue, loadingFalse) => {
    let products = [];
    try {
        loadingTrue()
        for(let i of arrayOfCategories) {
            const request = await fetch(`https://dummyjson.com/products/category/${i}`);
            const response = await request.json();
            const listProducts = response.products;
            products = [...products,...listProducts];
        }
    } catch (error) {
        console.log(error);
        alert("Error en la respuesta proporcionada por la base de datos, por favor seleccione otra categoría")
        return [];
    } finally {
        loadingFalse()
        console.log("Petición finalizada");
    }
    return products;
}