import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { assets, Button } from 'araceae-ui';

import { Container, HeroSection } from './styles';

const Home: React.FC = () => {

  return (
    <Container>
      <HeroSection>
        <span>
          <p className="enphasis">Busque</p>
          <p>conhecimento</p>
        </span>
        <img
          aria-hidden
          alt="Imagem mente grata"
          src={assets.FloatingHeadImg}
        />
      </HeroSection>

    </Container>
  );
};

export default Home;
