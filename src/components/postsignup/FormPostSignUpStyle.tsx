import styled from 'styled-components';

export const FormPostSignUpStyle = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;

  #forms {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    padding: 6rem 0 0 6rem;
    box-sizing: border-box;
  }

  h1 {
    margin: 2rem 0 1.5rem 0;
  }

  #radio-content {
    width: 100%;
    text-align: left;
    margin-bottom: 4rem;
    gap: 20px;

    #label {
      display: block;
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }

    .nextui-radio-group {
      display: flex;
      flex-direction: column;
    }
  }

  #buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    gap: 20px;
    margin-left: 25%;
  }

  #voltar, .AppButtonActionRect {
    width: 100%;
    max-width: 150px; 
  }

  #wallpaper {
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #wallpaper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
