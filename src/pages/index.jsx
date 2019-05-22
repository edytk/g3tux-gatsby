import React from 'react';
import { Container } from 'semantic-ui-react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';
import logo from '../images/icon.png'

const Content = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  min-height: 68vh;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'netlify', 'react', 'blog']} />
    <Container text>
      <Content>
      <img class="logo-tama" src={logo} alt="Tama Logo"></img>
        <h1>Hi, I'm Edy Tama 👋</h1>
        <p>This page is created by Gatsby</p>
      </Content>
    </Container>
  </Layout>
);

export default IndexPage;
