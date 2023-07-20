import { styled } from "styled-components";
import BtnNextPage from "./BtnNextPage";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage } from "../app/paginationSlice/paginationSlice";

const MovePagesContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;
    &.btn-right {
        justify-content: flex-end;
    };
`;

function MovePages () {
    const dispatch = useDispatch()
    const { page, totalPages } = useSelector(store => store.pagination);
    console.log(page, totalPages)

    return(
        <MovePagesContainer 
            className={page === 1 ? "btn-right" : ""}>
            {
                page > 1 && <BtnNextPage handleClick={() => dispatch(prevPage())} text="Anterior"/>
            }
            {
                page < totalPages.length && <BtnNextPage handleClick={() => dispatch(nextPage())} text="Siguiente"/>
            }
        </MovePagesContainer>
    )
}

export default MovePages