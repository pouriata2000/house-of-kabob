import styled from "styled-components";

const StoryContainer = styled.div`
  position: absolute;  /* Ensures full-screen coverage */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 3.5rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("/images/story-bg.jpg"); /* Ensure correct path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem;
  overflow-y: auto;
`;

const StoryBox = styled.div`
  background-color: #f5c7a9; /* Light peach background */
  padding: 2rem;
  max-width: 600px;
  border-radius: 20px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #5b1e31; /* Dark maroon color */
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #5b1e31; /* Matching text color */
  line-height: 1.5;
  text-align: left;
`;

const Story = () => {
  return (
    <StoryContainer>
      <StoryBox>
        <Title>Our Story</Title>
        <Paragraph>
          House of Kabob has been a local Parkville Persian eatery since 1987.
          Persian foods reflect a unique taste of many different cultures
          surrounding and in contact with Persia - today’s Iran. There is the
          Russian inspired olovieh. The Greeks have stuffed grape leaves
          -dolmathees- while the Persians have dolmeh. The Arabs and Lebanese
          have ground beef Kufta kabob while the Persian style is referred to as
          Koobideh.
        </Paragraph>
        <Paragraph>
          House of Kabob is known for its personal touches. For instance, we
          make our own bread daily. Our traditional Persian flat bread, Nan, is
          made in the old-fashioned bread ovens of ancient Iran which are known
          as Tanoor. We have been serving the best Persian food in Baltimore
          area with our ancient traditional recipes. We can say without a doubt
          that House of Kabob serves to more Persian customers than any
          middle-eastern eatery in the Baltimore metropolitan area.
        </Paragraph>
        <Paragraph>
          Come to House of Kabob for the best in Persian dining!
        </Paragraph>
      </StoryBox>
    </StoryContainer>
  );
};

export default Story;
