// Deps
import { styled } from "styled-components";
import { useSelector } from "react-redux";
// Comps
import { SectionTitle } from "./styled-components/StyledComponents";
import { HeaderAnchorMobile } from "./HeaderAnchor";
import { EmailMobile } from "./EmailMenu"

const MainContainer = styled.div`
    width: 400px;
    height: 89.8%;
    padding: 16px;
    position: fixed;
    z-index: 999;
    background-color: white;
    bottom: 0;
    left: -410px;
    display: flex;
    flex-direction: column;
    
    gap: 40px;
    box-shadow: -1px 6px 10px 0px rgba(199,199,199,1);
    border-radius: 4px;
    overflow-y: scroll;
    transition: 0.5s;
    &.active {
      transform: translateX(410px);
    }
    @media (max-width: 1024px) {
        width: 100%;
        left: -1020px;
        &.active {
            transform: translateX(1020px);
        }
    }
    @media (max-width: 600px) {
        width: 100%;
    }
`;
const CategoriesSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 2px solid ${(props)=>props.theme.softPinkGrey};
    padding-bottom: 48px;
    padding-top: 32px;
`;
const LoginSection = styled.div`
    width: 100%;
`;
const UlWithCategories = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;


function MenuMobile({isActive}) {

    const { category } = useSelector(store=>store.category);

  return (
    <MainContainer className={isActive ? "active" : ""}>
        <CategoriesSection>
            <UlWithCategories>
                <li>
                    <SectionTitle>CATEGORÍAS</SectionTitle>
                </li>
                <li>
                    <HeaderAnchorMobile
                        isActive={category === "all" ? true : false}
                        category="all">Todas
                    </HeaderAnchorMobile>
                </li>
                <li>
                    <HeaderAnchorMobile
                        isActive={category === "mens-shirts" ? true : false}
                        category="mens-shirts">Remeras Hombre
                    </HeaderAnchorMobile>
                </li>
                <li>
                    <HeaderAnchorMobile
                    isActive={category === "womens-dresses" ? true : false}
                    category="womens-dresses">Vestidos
                    </HeaderAnchorMobile>
                </li>
                <li>
                    <HeaderAnchorMobile
                    isActive={category === "fragrances" ? true : false}
                    category="fragrances">Fragancias
                    </HeaderAnchorMobile>
                </li>
                <li>
                    <HeaderAnchorMobile
                    isActive={category === "smartphones" ? true : false}
                    category="smartphones">Electrónica
                    </HeaderAnchorMobile>
                </li>
            </UlWithCategories>
        </CategoriesSection>
        <LoginSection>
            <EmailMobile />
        </LoginSection>
    </MainContainer>
  )
}

export default MenuMobile;