import styled from 'styled-components'

interface Props {
  name: string;
  id: string;
  url: string;
}
const StyledProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    cursor: pointer;  
    margin: 3px;
    border: 1px solid white;
    padding: 1px;

`;
const StyledProductImage = styled.img`
    width: 250px;
    height: auto;
    pointer-events: none;
`
const StyledProductName = styled.p`
    font-family: 'Roboto', sans-serif;
  font-size: 20px;
  text-align: center;
  pointer-events: none;
`;

const StyledProductbox = styled.section`
  margin-left: 1px;
  :hover {
    border: 1px solid #eee8e8;
    transform: scale(1.01);
    border-radius: 20px;
  }
`;

const ProductItem = (props: Props) => {

  return (
    <>
      <StyledProductbox>
        <StyledProduct>
            <StyledProductImage src={props.url}/>
            <StyledProductName>{props.name}</StyledProductName>
        </StyledProduct>
      </StyledProductbox>
      </>
  );
}

export default ProductItem
