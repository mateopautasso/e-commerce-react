import { styled } from "styled-components";
import arrowDown from "../assets/icons/arrow_down.svg";
import { useSelector, useDispatch } from "react-redux";
import { setPage, updateLimit } from "../app/paginationSlice/paginationSlice";

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 24px;
`;
const Select = styled.select`
  font-size: ${(props)=>props.theme.fontSm};
  font-weight: ${(props)=>props.theme.font700};
  color: ${(props)=>props.theme.grey};
  border: 1px solid black;
  padding: 0px 4px;
  border-radius: 4px;
  cursor: pointer;
`;
const SelectP = styled.p`
  font-size: ${(props)=>props.theme.fontSm};
  font-weight: ${(props)=>props.theme.font700};
`;
const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px
`;

function Pagination() {

  const { totalPages, page } = useSelector(store => store.pagination)
  const dispatch = useDispatch();

  const handleChangePage = (e)=>{
    dispatch(
      setPage(Number(e.target.value))
    )
  }
  const handleChangeLimit = (e)=>{
    dispatch(
      updateLimit(Number(e.target.value))
    )
  }

  return (
    <PaginationContainer>
      <SelectContainer>
        <SelectP>Mostrar: </SelectP>
        <Select onChange={handleChangeLimit}>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </Select>
        <img style={{width: '12px'}} src={arrowDown} alt="Selecciona"></img>
      </SelectContainer>
      <SelectContainer>
        <SelectP>Página: </SelectP>
        <Select onChange={handleChangePage}>
          {
            totalPages.map((pageIndex)=>{
              if(page === pageIndex) {
                return <option selected key={pageIndex} value={pageIndex}>{pageIndex}</option>
              } else {
                return <option key={pageIndex} value={pageIndex}>{pageIndex}</option>
              }
              
            })
          }
        </Select>
        <img style={{width: '12px'}} src={arrowDown} alt="Selecciona"></img>
      </SelectContainer>
    </PaginationContainer>
  )
}

export default Pagination;