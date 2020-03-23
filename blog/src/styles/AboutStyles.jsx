import styled from 'styled-components'

export const AboutContainer = styled.div`
  img {
    margin: auto;
    margin-top: 1em;
    margin-bottom: 2em;
    border-radius: 5%;
  }

  .about-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 2em;
  }

  li {
    background-color: black;
  }

  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media only screen and (max-width: 600px) {
    .about-title {
      font-size: 1.2em;
    }
  }
`
