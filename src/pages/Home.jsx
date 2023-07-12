import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import getSelectedProducts from '../services/getSelectedCategory';
import CardProduct from '../components/CardProduct';
import { useSelector } from 'react-redux';
import { Loader } from '../components/styled-components/StyledComponents';
import { LoadingContext } from '../context/LoadingContext';
import { useContext } from 'react';

const HomeMainContainer = styled.main`
    width: 100%;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    row-gap: 40px;
    column-gap: 40px;
    justify-content: space-evenly;
    align-items: center;
    padding: ${(props)=>props.theme.paddingLaterales};
    padding-bottom: 24px;
    padding-top: 100px;
`;

function Home() {
  
  const { isLoading, loadingTrue, loadingFalse } = useContext(LoadingContext);

  const { category } = useSelector(store => store.category);
  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(()=>{
    
    (async()=>{
      let response = await getSelectedProducts(category, loadingTrue, loadingFalse)
      setListOfProducts(response);
    })()
  }, [category])

  return (
      <HomeMainContainer>
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
      </HomeMainContainer>
  )
}

export default Home;