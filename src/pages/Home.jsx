import { styled } from 'styled-components';
import CardProduct from '../components/CardProduct';
import ImgExample from '../assets/images/AestheticShelf.jpg'

const HomeMainContainer = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
    justify-content: space-evenly;
    padding: ${(props)=>props.theme.paddingLaterales};
    padding-bottom: 24px;
    padding-top: 80px;
`

function Home() {
  return (
    <HomeMainContainer>
        <CardProduct article="Round Shelf" price="35" src={ImgExample}/>
        <CardProduct article="Round Shelf" price="35" src={ImgExample}/>
        <CardProduct article="Round Shelf" price="35" src={ImgExample}/>
        <CardProduct article="Round Shelf" price="35" src={ImgExample}/>
        <CardProduct article="Round Shelf" price="35" src={ImgExample}/>
        <CardProduct article="Round Shelf" price="35" src={ImgExample}/>
        <CardProduct article="Round Shelf" price="35" src={ImgExample}/>
        <CardProduct article="Round Shelf" price="35" src={ImgExample}/>
        <CardProduct article="Round Shelf" price="35" src={ImgExample}/>
        <CardProduct article="Round Shelf" price="35" src={ImgExample}/>
        <CardProduct article="Round Shelf" price="35" src={ImgExample}/>
        <CardProduct article="Round Shelf" price="35" src={ImgExample}/>
        <CardProduct article="Round Shelf" price="35" src={ImgExample}/>
        <CardProduct article="Round Shelf" price="35" src={ImgExample}/>
        <CardProduct article="Round Shelf" price="35" src={ImgExample}/> 
    </HomeMainContainer>
  )
}

export default Home