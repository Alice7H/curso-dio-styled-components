import styled from 'styled-components';
import Image1 from '../images/top-coding.jpg'
import Image2 from '../images/partners.jpg'
import Image3 from '../images/coding1.jpg'


const Content = styled.div`
  padding: 5px;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5rem;
  margin-bottom: 10%;
`

const Title = styled.h1`
  color: #d81b60;
  font-weight: bold;
  font-size: 24px;
  margin: 1rem;
`

const SecondTitle = styled.h2`
  color: #d81b60;
  font-weight: bold;
  font-size: 18px;
  margin: 1rem;
`

const Text = styled.p`
  color: #560027;
  font-size: 14px;
  line-height: 1.5rem;
  align-self: flex-start;
  margin: auto 1rem;

  @media (min-width: 768px) {
    margin-left: 25%;
    margin-right: 25%;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem auto;
  width: 100%;
  margin-bottom: 2rem;
`

const Img = styled.img`
  border-radius: 8px;
  margin: auto;
  width: 90%;
  @media(min-width: 768px){
    width: 50%;
  }
`

const List = styled.ul`
  list-style-type: square;
  color: #560027;
  font-size: 14px;
  line-height: 1.5rem;
  align-self: flex-start;
  margin: auto 2.5rem;
  @media (min-width: 768px) {
    margin-left: 28%;
    margin-right: 25%;
  }
`

const Link = styled.a`
  color: #560027;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  width: 50%;
  img {
    width: 32px;
  }
`

export default function content() {
  return (
    <Content>
      <Section id="home">
        <Img src={Image1} alt="Vista de cima de uma mesa com pessoa programando" />
        <Title>Tudo o que você precisa saber<br /> antes de fazer um site</Title>
        <Text>
          Sabia que o seu site pode ser o seu melhor vendedor.
          Ele não precisa de um cafézinho, não sai de férias,
          não precisa se alimentar, não fica estressado, mal humorado e nem bravo.
        </Text>
        <Text>E olha só, ele trabalha 24 horas por dia e o principal, está sempre pronto para vender.</Text>
        <Text>Bom, pensando assim, ele parece bem importante, um site serve como uma vitrine e deve estar muito bem apresentável, já que você quer passar uma boa impressão.</Text>
        <Text>
          Para vender um produto, imagens, ou outros serviços precisamos ter em mente que devemos considerar
          usar as melhores táticas, ficar antenado com a modernidade, usar tecnologias e linguagens atrativas.
        </Text>

        <SecondTitle>E quais os atributos que preciso? </SecondTitle>
        <Text>Fizemos uma lista para isso:</Text>
        <List>
          <li> Design </li>
          <li> Projeto </li>
          <li> Conteúdo </li>
          <li> Tecnologia </li>
          <li> Responsividade </li>
        </List>
        <br />
        <Text> Como assim, é só isso? O que faço com essa lista? Bom, vamos explicar cada tópico resumidamente:</Text>

        <Text> - Um site não deve ser apenas bonito e atraente, deve convencer o cliente de que o produto é bom e confiável.</Text>
        <br />
        <Text> - Antes da execução de um site, precisamos fazer o planejamento, entender quais os objetivos, o público alvo,
          quais os seus produtos mais vendidos ou com mais faturamento, qual a reação de impacto inicial que desejamos proporcionar e
          quais os diferenciais em relação à concorrência.
        </Text>
        <br />
        <Text> - Usar técnicas de escrita para produzir textos que sejam interessantes, claros com os principais atributos do produto ou serviço gera um interesse maior ao cliente.
          Vídeos e imagens costumam auxiliar também.
        </Text>
        <br />
        <Text> - A tecnologia é usada para passar credibilidade também, requisitos como segurança, um bom ranqueamento do Google e cuidado com o SEO,
          qualidade de código, gerenciamento de recursos, mensuração de desempenho. Imagina se o seu site está lento ou a página deixa de carregar algum bloco,
          qual a impressão que você passará?
        </Text>
        <Text>Instalar tags de redes sociais no site, monitorar, participar e ver os comentários do público pode ajudar a melhorar a conexão com eles. Não o bastante, a tecnologia permite gravar o que o usuário faz no site, e isso pode ajudar a produzir e melhorar as interações com os conteúdos publicados.</Text>
        <br />
        <Text> - Seu site deve estar apto a funcionar perfeitamente em uma versão móvel, já que em boa parte do tempo, as pessoas estarão com ele. Outro motivo é que o Google penaliza quem não tem um site mobile.</Text>
        <br />
        <Text> O seu site é a principal forma de comunicação no mundo digital, sabemos o que é possível para entregar o melhor site e oferecemos.
          aos nosso clientes a dedicação em quem acredita em nós. Você tem a oportunidade de se destacar e ter o melhor site em sua área de atuação, então
          seja a referência, se permita adquirir um site profissional e fale conosco.
        </Text>
      </Section>

      <Section id="contact">
        <Img src={Image2} alt="Pessoas se cumprimentando em uma sala de reunião" />
        <Title>Contato</Title>

        <Link href="tel:+5511975724664" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/color/48/null/smartphone.png" alt="Telefone" />
          <span>Tel e WhatsApp: (11) 97572-4664</span>
        </Link>


        <Link href="mailto:alicehata9@gmail.com" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/color/48/null/apple-mail.png" alt="E-mail" />
          <span>E-mail: alicehata9@gmail.com</span>
        </Link>


        <Link href="https://pt-br.facebook.com/alice.hata9/" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/color/48/null/facebook.png" alt="Facebook" />
          <span>Facebook: alice.hata9</span>
        </Link>

        <Link href="https://www.instagram.com/alice.hata9/" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/color/48/null/instagram-new--v1.png" alt="Instagram" />
          <span>Instagram: alice.hata9</span>
        </Link>

        <Link href="https://www.linkedin.com/in/alice-hata/" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/color/48/null/linkedin.png" alt="LinkedIn" />
          <span>LinkedIn: alice-hata</span>
        </Link>

        <Link href="https://www.youtube.com/@alicehata9686" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/color/48/null/youtube-play.png" alt="YouTube" />
          <span>Youtube: @alicehata9686</span>
        </Link>
      </Section>

      <Section id="about-us">
        <Img src={Image3} alt="Mulher programando, na frente de dois monitores" />
        <Title>Sobre nós</Title>
        <Text>
          Com 15 anos de mercado e presente em 5 países, a ABC Marketing se destaca por criar
          formas inovadoras de atingir o seu público alvo através de produtos específicos
          para construir a sua marca e aumentar o número de clientes!
        </Text>
        <Text>
          Aqui temos a solução que se encaixa para os problemas da sua empresa.
          Conte conosco, surpreenda-se com os resultados e destaque-se da multidão.
        </Text>

        <SecondTitle>Consultoria Estratégica</SecondTitle>
        <Text>
          A partir de uma metodologia própria, analisamos todas as áreas da sua empresa afim de
          encontrar as melhores soluções e insights para seus problemas, te ajudando a implementar
          uma estratégia eficiente, convertendo cliques em faturamento para a sua empresa.
        </Text>

        <SecondTitle>Branding</SecondTitle>
        <Text>
          Sua empresa precisa dar aquela repaginada no visual ou até mesmo mudar de logotipo?
          Aqui você conta com especialistas para desenvolver uma imagem forte, marcante e incrível;
        </Text>

        <SecondTitle>Animações e Vídeos</SecondTitle>
        <Text>
          Animamos, captamos, editamos e entregamos vídeos profissionais para sua empresa.
          Tenha muito mais relevância para o seu público com essa ótima ferramenta de vendas!
        </Text>

        <SecondTitle>Marketing</SecondTitle>
        <Text>
          Com retorno rápido e garantido, criamos ações estratégicas direcionadas ao seu público,
          e garantimos os objetivos que a sua empresa precisa. Ajudamos a manter a sua marca engajada
          e presente na internet através da produção de conteúdo relevante.
        </Text>

        <SecondTitle>Web</SecondTitle>
        <Text>
          Já imaginou ter um vendedor que trabalhe 7 dias por semana, 24 horas por dia? Sim, essa
          é a função do seu site! Seja através do celular, tablet ou notebook: seu site será adequado
          automaticamente para todos os dispositivos!
        </Text>
      </Section>
    </Content>
  );
}