import React from 'react';

import GlobalStyles from './styles/globalStyles';
import { 
  Container,
  WrapperCard,
  WrapperImage,
  Image,
  WrapperCardLogin,
  CardLogin,
  WrapperInputEmail,
  ImageEmail,
  InputEmail,
  WrapperEmail,
  WrapperInputPassword,
  ImagePassword,
  InputPassword,
  WrapperPassword,
  WrapperButton,
  ButtonSign,
  WrapperSocial,
  ImageSocial,

 } from './styles/styles';

 import image_left from './assets/img/image_left.svg';
 import email from './assets/img/email.svg';
 import password from './assets/img/password.svg';

 import instagram from './assets/img/instagram.svg';
 import twitter from './assets/img/twitter.svg';
 import linkedin from './assets/img/linkedin.svg';
 import facebook from './assets/img/facebook.svg';


function App() {
  return (
    <div className="App">
      <Container>
        <WrapperCard>
          <WrapperImage>
            <Image src={image_left} />
          </WrapperImage>
          <WrapperCardLogin>
            <CardLogin>
              <WrapperEmail>
                <h1>Email</h1>
                <WrapperInputEmail>
                  <ImageEmail src={email} />
                  <InputEmail type="email" autoFocus placeholder="exemplo@gmail.com"/>
                </WrapperInputEmail>
              </WrapperEmail>
              <WrapperPassword>
                <h1>Password</h1>
                <WrapperInputPassword>
                  <ImagePassword src={password} />
                  <InputPassword type="password" placeholder="************"/>
                </WrapperInputPassword>
              </WrapperPassword>
              <WrapperButton>
                <ButtonSign>
                  Enter
                </ButtonSign>
              </WrapperButton>
          <WrapperSocial>

          <a href="https://instagram.com/jairo_evaristo12" target="_black">
              <ImageSocial src={instagram} />
          </a>

          <a href="https://twitter.com/JairoEvaristo12" target="_black">
              <ImageSocial src={twitter} />
          </a>

          <a href="https://www.linkedin.com/in/jairo-evaristo/" target="_black">
              <ImageSocial src={linkedin} />
          </a>
          
          <a href="https://www.facebook.com/jairo.evaristogomes/" target="_black">
              <ImageSocial src={facebook} />
          </a>

          </WrapperSocial>
          </CardLogin>
          </WrapperCardLogin>
        </WrapperCard>
      </Container>
      <GlobalStyles />
    </div>
  );
}

export default App;
