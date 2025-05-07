import styled from "styled-components";

// Styled Components
const HeroContainer = styled.div`
  position: absolute;  /* Ensures full-screen coverage */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/kabob-background.jpg");

  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-y: auto;
`;


const OrderButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  border: none;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: darkred;
  }
`;

const DeliveryOptions = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;

  img {
    height: 50px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 20px;
  margin-bottom: 150px;
`;

// Social Icons
const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  cursor: pointer;

  img {
    height: 40px; /* Adjust size */
    width: 40px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Home = () => {
  return (
    <HeroContainer>
      {/* Hero Section */}
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", textShadow: "2px 2px 8px rgba(0,0,0,0.6)", marginTop:"300px"}}>
        House of Kabob
      </h1>
      <p style={{ fontSize: "1.5rem", textShadow: "2px 2px 4px rgba(0,0,0,0.4)" }}>Since 1987</p>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", letterSpacing: "3px", textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}>
        PERSIAN CUISINE
      </h2>

      {/* Order To-Go Button */}
      <OrderButton>
        <a href="https://www.clover.com/online-ordering/house-of-kabob-parkville" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          Order To-Go 🛍️
        </a>
      </OrderButton>

      {/* Delivery Options */}
      <p style={{ fontSize: "1.2rem", marginTop: "20px", textShadow: "2px 2px 4px rgba(0,0,0,0.4)" }}>
        Order for Delivery
      </p>
      <DeliveryOptions>
        <a href="https://www.grubhub.com/restaurant/house-of-kabob-8025-harford-rd-parkville/2854117" target="_blank" rel="noopener noreferrer">
          <img src="/images/grubhub.png" alt="GrubHub" />
        </a>
        <a href="https://www.ubereats.com/store/house-of-kabob/ihhdT_jpXnKGnzs2qiER7Q?diningMode=DELIVERY&ps=1&sc=SEARCH_SUGGESTION" target="_blank" rel="noopener noreferrer">
          <img src="/images/ubereats.png" alt="Uber Eats" />
        </a>
        <a href="https://www.doordash.com/store/house-of-kabob-parkville-1882765/" target="_blank" rel="noopener noreferrer">
          <img src="/images/doordash.png" alt="DoorDash" />
        </a>
      </DeliveryOptions>

      {/* Social Media Icons */}
      <SocialWrapper>
        <SocialIcons>
          <a href="https://www.instagram.com/houseofkabobmd/" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/HouseOfKabobParkville/" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
        </SocialIcons>
      </SocialWrapper>
    </HeroContainer>
  );
};

export default Home;

