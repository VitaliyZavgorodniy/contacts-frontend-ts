import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const PROGRESS_STEPS = [
  'Making up names',
  'Looking for numbers',
  'Rewriting phone books',
  'Reading guides',
];

const LoadingScreen = () => {
  const [progress, setProgress] = useState('Fetching user');

  useEffect(() => {
    const interval = setInterval(
      () =>
        setProgress(
          PROGRESS_STEPS[Math.floor(Math.random() * PROGRESS_STEPS.length)]
        ),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <DataBlock>
        <Title>Loading...</Title>
        <CircularProgress color="inherit" />

        <Progress>{progress}</Progress>
      </DataBlock>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #1976d3;
`;

const DataBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const Title = styled.h2`
  margin-bottom: 15px;
  font-family: 'Comfortaa';
  font-size: 20px;
`;

const Progress = styled.p`
  margin-top: 20px;
  font-size: 'Comfortaa';
  font-size: 16px;
`;

export default LoadingScreen;
