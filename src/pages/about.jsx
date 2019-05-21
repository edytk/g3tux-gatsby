import React from 'react';
import { Container } from 'semantic-ui-react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Name = styled.h1`
  font-size: 2.5em;
  margin-bottom: 0px;
`;

const SubHeader = styled.h4`
  margin-top: 10px;
  margin-bottom: 3em;
  color: rgba(0,0,0,0.6);
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  min-height: 68vh;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.h1`
  margin-left: 1em;
  margin-right: 1em;
`;

const About = () => (
  <Layout>
    <SEO title="About" />
    <Container text>
      <Content>
        <Name>Edy Tama Kusumajaya</Name>
        <SubHeader>Blablabla</SubHeader>
      </Content>
    </Container>
  </Layout>
);

export default About;
