import styled from 'styled-components';

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  `
const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: .75rem;
  line-height: 1.2rem;
`

export default function footer() {
  return (
    <Footer>
      <Text>Desenvolvido por Alice Hata</Text>
      <Text>Curso DIO - Styled Components</Text>
      <Text>Copyright &copy; 2022</Text>
    </Footer>
  )
}
