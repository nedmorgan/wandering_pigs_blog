import styled from 'styled-components'

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;

  i {
    margin-right: 0.5em;
    color: black;
  }

  i:hover,
  .footer-name:hover {
    color: #0000ee;
    cursor: pointer;
    text-decoration: none;
  }

  .footer-name {
    color: black;
  }

  #icon-copyright {
    margin-right: 0.5em;
  }
`
