import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { ThemeProvider } from 'styled-components';
import Switch from 'react-switch';

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

import schema from './validated';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import image_left from './assets/img/image_left.svg';
import image_dark from './assets/img/image_dark.svg';

import email from './assets/img/email.svg';
import password from './assets/img/password.svg';

import instagram from './assets/img/instagram.svg';
import twitter from './assets/img/twitter.svg';
import linkedin from './assets/img/linkedin.svg';
import facebook from './assets/img/facebook.svg';

import instagram_dark from './assets/img/instagram_dark.svg';
import twitter_dark from './assets/img/twitter_dark.svg';
import linkedin_dark from './assets/img/linkedin_dark.svg';
import facebook_dark from './assets/img/facebook_dark.svg';

import usePesister from './utils/usePesister';

function App() {
  const [theme, setTheme] = usePesister('key', light);

  const handleToggle = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  } 

  return (
    <ThemeProvider theme={ theme }>
    <div className="App">
      <Container>
        <WrapperCard>
          <WrapperImage> 
            {theme.title === 'light' && (
              <Image src={image_left} />
            )}

          {theme.title === 'dark' && (
            <Image src={image_dark} />
          )}

            <div>
              <Switch
              onChange={handleToggle}
              checked={theme.title === 'light'}
              checkedIcon={false}
              uncheckedIcon={false}
              onColor='#5E81F4'
              offColor='#6F10B9'
              height={30}
              width={60}
              handleDiameter={20}
              onHandleColor='#f5f5fb'
              />
            </div>  
          </WrapperImage>
          <WrapperCardLogin>
            <CardLogin>
              <form onSubmit={handleSubmit(onSubmit)}>
                <WrapperEmail>
                  <h1>Email</h1>
                  <WrapperInputEmail>
                    <ImageEmail src={email} />
                    <InputEmail name="email" ref={register} autoComplete='off' placeholder="E-mail" autoFocus/>
                  </WrapperInputEmail>
                  <p>{errors.email?.message}</p>
                </WrapperEmail>
                <WrapperPassword>
                  <h1>Password</h1>
                  <WrapperInputPassword>
                    <ImagePassword src={password} />
                    <InputPassword type="password" name="password" ref={register} placeholder="Password"/>
                  </WrapperInputPassword>
                  <p>{errors.password?.message}</p>
                </WrapperPassword>
                <WrapperButton>
                  <ButtonSign>
                    Enter
                  </ButtonSign>
                </WrapperButton>
              </form>
          <WrapperSocial>
            {theme.title === 'light' && (
              <>
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
              </>
            )}

            {theme.title === 'dark' && (
              <>
                <a href="https://instagram.com/jairo_evaristo12" target="_black">
                  <ImageSocial src={instagram_dark} />
                </a>

                <a href="https://twitter.com/JairoEvaristo12" target="_black">
                  <ImageSocial src={twitter_dark} />
                </a>

                <a href="https://www.linkedin.com/in/jairo-evaristo/" target="_black">
                  <ImageSocial src={linkedin_dark} />
                </a>

                <a href="https://www.facebook.com/jairo.evaristogomes/" target="_black">
                  <ImageSocial src={facebook_dark} />
                </a>
              </>
            )}

          </WrapperSocial>
          </CardLogin>
          </WrapperCardLogin>
        </WrapperCard>
      </Container>
      <GlobalStyles />
    </div>
    </ThemeProvider>
  );
}

export default App;
