import React from 'react';
import styled from 'styled-components';
import ThemeImg from '../Images/Themeimg.jpg';
import Artwork1 from '../Images/Artwork1Dark.jpg';
import Artwork2 from '../Images/Artwork2Dark.jpg';
import Artwork3 from '../Images/Artwork3Dark.jpg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
  padding: 50px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1200px;
  width: 100%;
`;

const TextContent = styled.div`
  padding-right: 20px;
`;

const ThemeImageContainer = styled.div`
  position: sticky;
  top: 120px;
  width: 100%;
  max-width: 600px;
  height: 700px;
  background-image: url(${ThemeImg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;

const RelatedImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h3`
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.25em;
  margin-bottom: 20px;
  max-width: 28ch;
`;

const RelatedImage = styled.img`
  width: 330px;
  height: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const CustomizationSection = () => {
  return (
    <Container>
      <ContentWrapper>
        <TextContent>
          <Title>Artwork</Title>
          <Subtitle>
            Scale artwork all the way up or all the way down. Round the corners or leave them square. Choose shadow and lighting effects to bring your album artwork to life. Or hide it completely.
          </Subtitle>
          <Title>Typography</Title>
          <Subtitle>
            Pick the track info you want to display, and then exactly how to display it. Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.
          </Subtitle>
        </TextContent>
        <ThemeImageContainer>
          <RelatedImagesContainer>
            <RelatedImage src={Artwork1} alt="Related 1" />
            <RelatedImage src={Artwork2} alt="Related 2" />
            <RelatedImage src={Artwork3} alt="Related 3" />
          </RelatedImagesContainer>
        </ThemeImageContainer>
      </ContentWrapper>
    </Container>
  );
};

export default CustomizationSection;
