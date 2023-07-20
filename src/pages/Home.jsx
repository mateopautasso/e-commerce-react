import CardProduct from '../components/CardProduct';
import getProductsForCategory from '../services/getProductsForCategory';
import Pagination from '../components/Pagination';
import MovePages from '../components/MovePages';
import { Loader } from '../components/styled-components/StyledComponents';
import { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { HomeContext } from '../context/HomeContext';
import { loadTotalPages } from "../app/paginationSlice/paginationSlice"

const HomeMainContainer = styled.main`
  width: 100%;
  height: 90%;
  padding: ${(props)=>props.theme.paddingLaterales};
  padding-top: 100px;
`;
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 40px;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 40px!important;
`


function Home() {
  
  const { isLoading, changeLoader, listOfProducts, loadProducts, loadTotalProducts } = useContext(HomeContext);

  const dispatch = useDispatch();
  const { category } = useSelector(store => store.category);
  const { limitPages, page } = useSelector(store => store.pagination);

  useEffect(()=>{
    
    (async()=>{
      let response = await getProductsForCategory(page, limitPages, category, changeLoader);

      loadProducts(response.productList);
      loadTotalProducts(response.total);

      dispatch(loadTotalPages({
        totalProducts: response.total, 
        limit: limitPages}
      ))
    })()
    
  }, [category, page, limitPages]);

  return (
      <HomeMainContainer>
        <Pagination />
        <ProductsContainer>
          {isLoading ? (
            <Loader />
          ) : (
            listOfProducts.map((product) => (
              <CardProduct
                key={product.id}
                id={product.id}
                stock={product.stock}
                description={product.description}
                src={product.images[0] || product.images[1]}
                title={product.title}
                price={product.price}
              />
            ))
          )}
        </ProductsContainer>
        <MovePages />
      </HomeMainContainer>  
  )
}

export default Home;