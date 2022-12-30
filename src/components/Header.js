import styled from 'styled-components';

export const Header = styled.header`
  background-color: pink;
  width: 100%;
`;

const List = styled.ul`
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  min-height: 60px;
`;

const Link = styled.a`
  color: #560027;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #f50057;
    text-decoration: underline;
  }
`


export default function header() {
  return (
    <Header>
      <nav>
        <List>
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#contact">Contato</Link></li>
          <li><Link href="#about-us">Sobre nós</Link></li>
        </List>
      </nav>
    </Header>
  )
}
