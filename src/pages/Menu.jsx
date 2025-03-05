import React, { useState } from 'react';
import styled from 'styled-components';
import menuData from "../data/menuData";  // Import menu data

// Styled Components
const MenuContainer = styled.div`
  position: absolute;  /* Ensures full-screen coverage */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 3.5rem;
  background-color: #4b4b4b;
  color: white;
  text-align: center;
  min-height: 100vh;
  overflow-y: auto;
`;

const CategoryButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-top: 3.5rem;

  button {
    background-color: #d6cfbd;
    color: black;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
   

    &:hover {
      background-color: #f5a623;
    }
  }

  .active {
    background-color: #f5a623;
  }
`;

const MenuItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const ItemCard = styled.div`
  background-color: #333;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
  }

  h4 {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
`;

const Menu = () => {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState("Appetizer");

  return (
    <MenuContainer>
      <CategoryButtons>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </CategoryButtons>

      <h2>{activeCategory}</h2>
      <MenuItems>
        {menuData[activeCategory].map((item) => (
          <ItemCard key={item.name}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <h5 dangerouslySetInnerHTML={{ __html: item.price }}></h5>
          </ItemCard>
        ))}
      </MenuItems>
    </MenuContainer>
  );
};

export default Menu;



