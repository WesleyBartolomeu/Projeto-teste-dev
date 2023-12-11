import styled from 'styled-components'
import ProductFilter from '../components/ProductFilter'
import ProductItem from '../components/ProductItem'
import { useState } from 'react';
import productData from '../products/products-list.json'

const StyledProductPage = styled.section`
  width: 100%;
  max-width: 1336px;
  margin: 0 auto; 
  padding: 20px; 
  box-sizing: border-box;
`
const StyledTitle = styled.h1`
  font-size: 2.3rem;
  span {
    color: var(--primary-color);
  }
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  @media (max-width: 640px) {
    flex-direction: column; 
  }
`;
const StyledBoxTitle = styled.div`

`
const StyledFlexwrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const StyledInput = styled.input`
  font-size: 1.5rem;
  color: var(--primary-color);
  height: 30px;
  border: none;
  border-bottom: var(--primary-color) solid 2px;
  outline: none;
  padding-right: 1.8rem;
  background-image: url('./src/assets/icon-search.png') ;
  background-repeat: no-repeat;
  background-position: right center;
  background-size:20px;
  font-family: 'Roboto', sans-serif;
  background-color: var(--primary-color-lighter);
  border-radius: 3px;
  span {
    color: var(--primary-color);
  }
`;  
const TitleProducts = styled.h2`
  border-bottom: 1px solid;
  width: 100%;
  padding-bottom: 10px;
  min-width: 200px;
`;

const StyledProductbox = styled.section`
  padding-right: 20px;
  @media (max-width: 640px) {
    padding: 0;
  }
`;


function ProductPage() {
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const products = productData.data.nodes;
  const [busca, setBusca] = useState('');
  const uniqueCategories = [...new Set(products.map((product) => product.category.name))];

    const productCountMap = products.reduce((countMap, product) => {
      const category = product.category.name;
      countMap[category] = (countMap[category] || 0) + 1;
      return countMap;
    }, {} as Record<string, number>);
  
    const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
    };

  
  return (
    <StyledProductPage>
      <StyledBoxTitle>
        <div>
          <StyledTitle>O QUE VOCE <span>ESTA PROCURANDO ?</span> </StyledTitle> 
        </div>
        <div >
          <StyledInput type="text" placeholder='BUSQUE AQUI' value={busca} onChange={(ev) => setBusca(ev.target.value)} />
        </div>
      </StyledBoxTitle>
      <StyledSection>
        <ProductFilter
            categories={uniqueCategories}
            selectedCategory={selectedCategory}
            onCategoryClick={handleCategoryClick}
            productCountMap={productCountMap}
          />
          <StyledProductbox>
            <div>
              <TitleProducts>Resultados</TitleProducts> 
            </div>
            <StyledFlexwrap>
              {products
                  .filter(
                    (product) =>
                      (!selectedCategory || product.category.name === selectedCategory) &&
                      (busca.trim() === '' ||
                        product.name.toLowerCase().includes(busca.trim().toLowerCase()))).map((product) => (
                      <ProductItem
                        key={product.id}
                        name={product.name}
                        id={product.id}
                        url={product.images[0].asset.url}
                      />
                    ))}
            </StyledFlexwrap>
          </StyledProductbox>
      </StyledSection>    
    </StyledProductPage>
  )
}

export default ProductPage
