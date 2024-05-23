import React from 'react';
import styled from 'styled-components'; 

const Container = styled.div`
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 50px 20px;
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  margin: 10px 0;
`;

const ButtonContainer = styled.div`
  margin: 20px 0;
`;

const Button = styled.a`
  background-color: ${(props) => (props.primary ? '#000' : '#fff')};
  color: ${(props) => (props.primary ? '#fff' : '#000')};
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin: 0 10px;
  font-size: 1em;
  border: 2px solid ${(props) => (props.primary ? '#000' : '#fff')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: ${(props) => (props.primary ? '#fff' : '#000')};
    color: ${(props) => (props.primary ? '#000' : '#fff')};
  }

  & > img {
    height: 1em; /* Adjust the size of the image relative to the text */
  }
`;

const Note = styled.p`
  font-size: 0.9em;
  color: #888;
`;

const NewBadge = styled.div`
  background-color: #f90;
  color: #000;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 20px;
`;

const ThemesContainer = styled.div`
  margin-top: 50px;
`;

const ThemesTitle = styled.h2`
  font-size: 2.5em;
  color: #3498db; /* Blue color for "NEW IN" */
`;

const SmallBox = styled.span`
  background-color: #3498db; /* Blue background */
  color: #000; /* Black font color */
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.8em; /* Smaller font size */
  display: inline-block;
`;

const ThemesSubtitle = styled.p`
  font-size: 1.2em;
  margin: 10px 0;
  color: #000;
`;

const ThemesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const ThemeCard = styled.div`
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  overflow: hidden;
  width: 200px;
  text-align: left;
`;

const ThemeImage = styled.img`
  width: 100%;
  height: auto;
`;

const ThemeInfo = styled.div`
  padding: 10px;
`;

const ThemeTitle = styled.h3`
  font-size: 1.2em;
  margin: 0;
`;

const ThemeSubtitle = styled.p`
  font-size: 1em;
  color: #555;
`;

const ExtraInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  text-align: left;
`;

const InfoCard = styled.div`
  background-color: #111;
  color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
`;

const InfoTitle = styled.h3`
  font-size: 1.2em;
  margin: 0 0 10px;
`;

const InfoText = styled.p`
  font-size: 1em;
  color: #aaa;
`;

const MusicIcon = styled.img`
  height: 1em; /* Adjust the size of the icon relative to the text */
  margin-right: 5px; /* Add some spacing between the icon and the text */
  vertical-align: middle; /* Align the icon vertically with the text */
`;

const SleeveSection = () => {
  return (
    <Container>
      <Title>Sleeve 2</Title>
      <Subtitle>The ultimate music accessory for your Mac.</Subtitle>
      <Subtitle>
        Sleeve sits on the desktop, displaying and controlling the music you’re<br />
        currently playing in {' '}
        <MusicIcon src={require('../Images/Applemusicicon.png')} alt="Apple Music Icon" /> Apple Music,  {' '}
        <MusicIcon src={require('../Images/AppSpotifyDark.png')} alt="Spotify Music Icon" /> Spotify, and  {' '}
        <MusicIcon src={require('../Images/AppDopplerDark.png')} alt="Doppler Music Icon" /> Doppler.
      </Subtitle>
      <ButtonContainer>
        <Button href="https://apps.apple.com">
          <img src={require('../Images/apple-logo.png')} alt="Apple Logo" />
          Mac App Store
        </Button>
        <Button primary href="https://checkout.stripe.com/c/pay/cs_live_b1bZgwQDJGgggCYQnHifYHKkWkszZ3Fe4RY3LuP5CCJkapsPh6Dz6M48hi#fidkdWxOYHwnPyd1blppbHNgWjA0TFxnNWlDb3RHaFdMY39haG1VUVc9YW1UakJUSnVuQ2YzZmxwZ108U29jV0ZfUH9hUnRHME9uXGhOdjA3NH1RXUd1QWlBTVxTR09vRlNQSjw1Q1Bpf25%2FNTUyXVJINndXYycpJ2hsYXYnP34nYnBsYSc%2FJz0zMzRhMDdnKGBnNT0oMTJnMCg9MWc0KDw8ZDIwNzxnNjUyZGM0Z2cyNCcpJ2hwbGEnPyc2MTI0ZDw9Zig2YDY1KDEwYDwoPTQwYyg9ZmAyMjxgZGRjZDY9Nz1gPWEnKSd2bGEnPydgMjdmNzYzZyg3PTU2KDEzYGAoZzcxMigyPWNkMTY3NT01MWNjMTY1PTUneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8naHBpcWxabHFgaCcpJ3dgY2B3d2B3SndsYmxrJz8nbXFxdXY%2FKip3YHVpZHwrdmpjcXJkd2AneCUl">Buy Directly $5.99</Button>
      </ButtonContainer>
      <Note>No subscriptions. No in-app <br></br>purchases. Requires macOS 11 Big Sur <br></br> or later.</Note>
      <NewBadge>Now with shelves and a progress bar. See what's new in Sleeve 2.3</NewBadge>

      <ThemesContainer>
        <ThemesTitle>NEW IN <SmallBox>2.0</SmallBox></ThemesTitle>
        <ThemesSubtitle>Themes. Unlimited themes.</ThemesSubtitle>
        <Subtitle>
          Themes in Sleeve make creating and switching between customizations easy. Share your own <br />creations with friends and install as many themes as you like with just a double-click.
        </Subtitle>
        <ThemesGrid>
          <ThemeCard>
            <ThemeImage src="https://via.placeholder.com/200" alt="Eternal Sunshine" />
            <ThemeInfo>
              <ThemeTitle>Eternal Sunshine</ThemeTitle>
              <ThemeSubtitle>Forgotten Feels<br />Slow Magic</ThemeSubtitle>
            </ThemeInfo>
          </ThemeCard>
          <ThemeCard>
            <ThemeImage src="https://via.placeholder.com/200" alt="Bunny Is a Rider" />
            <ThemeInfo>
              <ThemeTitle>Bunny Is a Rider</ThemeTitle>
              <ThemeSubtitle>Caroline Polachek</ThemeSubtitle>
            </ThemeInfo>
          </ThemeCard>
          <ThemeCard>
            <ThemeImage src="https://via.placeholder.com/200" alt="Lost Souls" />
            <ThemeInfo>
              <ThemeTitle>Lost Souls</ThemeTitle>
              <ThemeSubtitle>Baby Keem</ThemeSubtitle>
            </ThemeInfo>
          </ThemeCard>
        </ThemesGrid>
        <ExtraInfoContainer>
          <InfoCard>
            <InfoTitle>Change it up</InfoTitle>
            <InfoText>
              Switch between themes with just a click. Modify the built-in themes or create your own using Sleeve's extensive preferences.
            </InfoText>
          </InfoCard>
          <InfoCard>
            <InfoTitle>Shareable</InfoTitle>
            <InfoText>
              Export your themes and share them with friends using the handy new Sleeve Theme file format. Install themes from anywhere with a double-click or a drag and drop.
            </InfoText>
          </InfoCard>
        </ExtraInfoContainer>
      </ThemesContainer>
    </Container>
  );
};

export default SleeveSection;
