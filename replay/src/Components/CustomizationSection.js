import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 50px 20px;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  margin: 10px 0;
`;

const CustomizationIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 0; /* Remove gap between images */
  margin-top: 30px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: -15px; /* Negative margin to create overlap */
  position: relative;
  z-index: 1; /* Ensure images stack correctly */
  &:first-child {
    margin-left: 0; /* No negative margin for the first icon */
  }
`;

const CustomizationSection = () => {
  return (
    <Container>
      <Title>Countless ways to customize.</Title>
      <Subtitle>
        Customization is at the core of the Sleeve experience — choose from any<br></br> combination of design choices, behaviors and themes to make Sleeve at home on <br></br> your desktop.
      </Subtitle>
      <CustomizationIcons>
        <Icon src={require('../Images/Icon1.png')} alt="Icon 1" />
        <Icon src={require('../Images/Icon2.png')} alt="Icon 2" />
        <Icon src={require('../Images/Icon3.png')} alt="Icon 3" />
        <Icon src={require('../Images/Icon4.png')} alt="Icon 4" />
        <Icon src={require('../Images/Icon5.png')} alt="Icon 5" />
        <Icon src={require('../Images/Icon6.png')} alt="Icon 6" />
        <Icon src={require('../Images/Icon7.png')} alt="Icon 7" />
        <Icon src={require('../Images/Icon8.png')} alt="Icon 8" />
        <Icon src={require('../Images/Icon9.png')} alt="Icon 9" />
      </CustomizationIcons>
    </Container>
  );
};

export default CustomizationSection;
