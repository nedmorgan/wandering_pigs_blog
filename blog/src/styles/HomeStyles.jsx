import styled from 'styled-components'

export const HomeContainer = styled.div`
  h1 {
    font-family: 'Montserrat', sans-serif;
    margin-top: 0.5em;
    font-weight: bold;
    font-size: 3em;
    text-align: center;
  }

  .content-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .posts-container {
    width: 75%;
  }

  .social-container {
    width: 25%;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 1.5em;
    }
    .content-container {
      width: 90%;
      justify-content: center;
    }
    .posts-container {
      height: 100%;
    }
    .social-container {
      display: none;
    }
  }
`
