import { getProductsForCategory } from "./getProductsForCategory";

const categories = {
    inClothes: ["tops", "womens-dresses", "mens-shirts"],
    inAccessories: ["mens-watches", "womens-watches", "womens-bags", "womens-jewellery", "sunglasses"],
    inFurnitureHome: ["home-decoration", "furniture", "lighting"],
    inElectronics: ["smartphones", "laptops", "automotive"],
    allCategories: ["tops", "womens-dresses", "mens-shirts","mens-watches", "womens-watches", "womens-bags", "womens-jewellery", "sunglasses","home-decoration", "furniture", "lighting","smartphones", "laptops", "automotive"]
}

export default async function getSelectedCategory(category, loadingTrue, loadingFalse) {
    let arrProducts;
    switch(category) {
        case 'all':
            arrProducts = await getProductsForCategory(categories.allCategories ,loadingTrue, loadingFalse);
            break;
        case 'clothes':
            arrProducts = await getProductsForCategory(categories.inClothes, loadingTrue, loadingFalse)
            break;
        case 'accessories':
            arrProducts = await getProductsForCategory(categories.inAccessories, loadingTrue, loadingFalse)
            break;
        case 'furnitureHome':
            arrProducts = await getProductsForCategory(categories.inFurnitureHome, loadingTrue, loadingFalse)
            break;
        case 'electronics':
            arrProducts = await getProductsForCategory(categories.inElectronics, loadingTrue, loadingFalse)
            break;

    }
    return arrProducts;
}