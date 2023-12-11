import styled from 'styled-components'

interface ProductFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryClick: (category: string) => void;
  productCountMap: Record<string, number>;
}

const Styledbody = styled.div`
  min-width: 250px;
  font-size: 1.3rem;
  padding-right:5px;
  font-family: 'Roboto', sans-serif;
`;

const StyledTitle = styled.h2`
  font-size: 1.3rem;
  border-bottom: 1px solid  ;
  width: 100%;
  padding-bottom: 10px;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`; 

const StyledCheckBoxInput = styled.input`
  display: flex;
  flex-direction: row;
  width: 20px;
  margin-right: 10px; 
  cursor: pointer; 
`;

const StyledText = styled.p`
  margin: 0;
`;

  const ProductFilter: React.FC<ProductFilterProps> = ({
    categories,
    selectedCategory,
    onCategoryClick,
    productCountMap,
  }) => {

    return (
      <Styledbody>
        <StyledTitle>Filtros</StyledTitle>
          <StyledRow key="all">
            <StyledCheckBoxInput
              type="checkbox"
              checked={selectedCategory === ''}
              onChange={() => onCategoryClick('')}
              defaultChecked={true}
            />
            <StyledText>Todas Categorias ({categories.reduce((total, category) => total + (productCountMap[category] || 0), 0)})</StyledText>
            </StyledRow>
              {categories.map((category) => (
            <StyledRow key={category}>
              <StyledCheckBoxInput
                type="checkbox"
                checked={selectedCategory === category}
                onChange={() => onCategoryClick(category)}
              />
              <StyledText>
                {category} ({productCountMap[category] || 0})
              </StyledText>
            </StyledRow>
        ))}
      </Styledbody>
    );
  };
  
  export default ProductFilter;
