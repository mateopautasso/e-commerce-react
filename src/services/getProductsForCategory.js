const getProductsForCategory = async (page, limit, category, changeLoader) => {
    let skip = 0;
    if(page > 1) {
        skip = limit * (page - 1);
    }
    let products = {
        productList: [],
        total: 0
    };

    try {
        changeLoader(true);
        let request;
        let response;
        if(category === 'all') {
            request = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
        } else {
            request = await fetch(`https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`);
        }
        response = await request.json();
        products.productList = [...response.products];
        products.total = response.total;
    } 
    catch (error) {
        console.log(error);
        alert("Error en la respuesta proporcionada por la base de datos, por favor seleccione otra categoría")
        return products;
    }
    finally {
        changeLoader(false)
        console.log("Petición finalizada");
    }
    return products;
}
export default getProductsForCategory;