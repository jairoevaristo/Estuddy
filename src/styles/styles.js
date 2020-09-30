import styled from 'styled-components';

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WrapperCard = styled.div`
    background-color: #F5F5FB;
    width: 90%;
    height: 90%;
    border-radius: 30px;
    display: flex;
    align-items: center;

`;
export const WrapperImage = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const WrapperCardLogin = styled.div`
    display: flex;
    width: 60%;
    height: 100%;
    align-items: center;
`;

export const CardLogin = styled.div`
    background-color: #F5F5FB;
    height: 90%;
    width: 100%;
    margin: 0 20px;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, .2);
`;

export const WrapperEmail = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 60px;
    padding: 0 30px;

    > h1 {
        font-weight: normal;
        font-size: 30px;
        color: #5E81F4;
    }
`;

export const WrapperInputEmail = styled.div`
    display: flex;
    width: 100%;
    background-color: #eee;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: solid 1px #ccc;
    margin: 15px 0;

`;

export const ImageEmail = styled.img`
    width: 40px;
    height: 40px;
    margin: 0 20px;
`;

export const InputEmail = styled.input`
    width: 100%;
    padding: 20px 0;
    margin-right: 20px;
    background-color: #eee;
    font-size: 25px;
    border-radius: 5px;
`;

export const WrapperInputPassword = styled.div`
    display: flex;
    width: 100%;
    background-color: #eee;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: solid 1px #ccc;
    margin: 15px 0;

`;

export const ImagePassword = styled.img`
    width: 40px;
    height: 40px;
    margin: 0 20px;
`;

export const InputPassword = styled.input`
    width: 100%;
    padding: 20px 0;
    margin-right: 20px;
    background-color: #eee;
    font-size: 25px;
    border-radius: 5px;
`;

export const WrapperPassword = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 40px;
    padding: 0 30px;

    > h1 {
        font-weight: normal;
        font-size: 30px;
        color: #5E81F4;
    }
`;

export const WrapperButton = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
`;

export const ButtonSign = styled.button`
    padding: 10px 80px;
    color: #fff;
    font-size: 25px;
    background-color:  #5E81F4;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transform: opacity .2s linear;

    &:hover {
        opacity: .8;
    }
`;

export const WrapperSocial = styled.div`
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const ImageSocial = styled.img`
    width: 30px;
    margin: 25px 5px; 
    height: 30px;
    border-radius: 2px;
    transition: transform .2s linear;

    &:hover {
        transform: scale(1.2);
        opacity: .8;
    }
`;








