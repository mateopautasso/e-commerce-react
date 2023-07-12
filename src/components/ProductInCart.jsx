import { styled } from "styled-components";
import closeIcon from "../assets/icons/icon_close.png";
import { removeToCart } from "../app/cartSlice/cartSlice";
import { useDispatch } from "react-redux";

const Item = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Title = styled.p`
    font-size: ${(props)=>props.theme.fontSm};
    max-width: 180px;
`;
const Price = styled.p`
    font-family: ${(props)=>props.theme.sf};
    font-weight: ${(props)=>props.theme.font700};
    
`;
const ImgProduct = styled.img`
    width: 76px;
    height: 76px;
    border-radius: 8px;
    box-shadow: 0px 0px 6px 0px rgba(199,199,199,1);
`

function ProductInCart({id, src, title, price}) {

    const dispatch = useDispatch();

    const removeProduct = (id)=>{
        dispatch(removeToCart({
            id
        }))
    }

  return (
    <Item>
        <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
            <ImgProduct src={src} alt={title} />
            <Title>{title}</Title>
        </div>
        <div style={{display: 'flex', gap: '12px',alignItems: 'center', marginTop: '4px'}}>
            <Price>$ {price},00</Price>
            <img
                onClick={()=>removeProduct(id)}
                src={closeIcon}
                alt="Quitar Producto"
                style={{width:'12px', height: '12px', cursor: 'pointer'}}/>
        </div>
    </Item>
  )
}

export default ProductInCart