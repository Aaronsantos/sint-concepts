import styled, { keyframes } from 'styled-components';

const imgLoop = keyframes`
  0% {
    transform: scale(1,1);
  }

  50% {
    transform: scale(1,1);
  }

  55% {
    transform: scale(-1,1);
  }

  70% {
    transform: scale(-1,1);
  }

  75% {
    transform: scale(1,1);
  }

  100% {
    transform: scale(1,1)
  }
`;

export const Container = styled.main`
  max-width: 920px;
  margin: 40px auto;

  @media (max-width: 800px) {
    width: 100% - 32px;
    margin: 40px 16px;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  span {
    p:first-child {
      font-size: 80px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding-right: 8px;
      padding-left: 4px;
      line-height: 1em;
      margin: 0;
      font-family: 'Crimson Text', serif;
    }
    p:last-child {
      font-size: 28px;
      font-family: 'Crimson Text', serif;
      line-height: 1em;
    }
  }

  img {
    width: 40vh;
    mix-blend-mode: multiply;
    transform: rotate(22deg);
    animation: ${imgLoop} 3s infinite;
  }
  @media (max-width: 800px) {
    height: auto;
    justify-content: left;
    span {
      width: 60%;
      p:first-child {
        font-size: 40px;
      }
      p:last-child {
        font-size: 24px;
      }
    }

    img {
      width: 40%;
      z-index: 0;
    }
  }
`;

export const QuoteSection = styled.section`
  margin: 80px auto;
  @media (max-width: 800px) {
    margin: 80px 16px;
  }
`;

export const ButtonSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;
