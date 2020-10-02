import styled from 'styled-components';

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WrapperCard = styled.div`
    background-color: ${({ theme }) => theme.colors.card};
    width: 90%;
    height: 90%;
    border-radius: 15px;
    display: flex;
    align-items: center;

`;
export const WrapperImage = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        padding: 0 20px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 90%;
`;

export const WrapperCardLogin = styled.div`
    display: flex;
    width: 60%;
    height: 100%;
    align-items: center;
`;

export const CardLogin = styled.div`
    background-color: ${({ theme }) => theme.colors.cardLogin};
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
        font-weight: bold;
        font-size: 30px;
        color: ${({ theme }) => theme.colors.text};
    }
    > p {
        color: red;
        opacity: .8;
        margin: 0 auto;
    }
`;

export const WrapperInputEmail = styled.div`
    display: flex;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.input};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: ${({ theme }) => theme.colors.border};
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
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.textInput};
    font-size: 25px;
    border-radius: 5px;
`;

export const WrapperInputPassword = styled.div`
    display: flex;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.input};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: ${({ theme }) => theme.colors.border};
    margin: 5px 0;

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
    color: ${({ theme }) => theme.colors.textInput};
    background-color: ${({ theme }) => theme.colors.input};
    font-size: 25px;
    border-radius: 5px;
`;

export const WrapperPassword = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 15px;
    padding: 0 30px;

    > h1 {
        font-weight: bold;
        font-size: 30px;
        color: ${({ theme }) => theme.colors.text};
    }

    > p {
        color: red;
        opacity: .8;
        margin: 0 auto;
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
    background-color:  ${({ theme }) => theme.colors.button};
    border-radius: 4px;
    font-weight: bold;
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








