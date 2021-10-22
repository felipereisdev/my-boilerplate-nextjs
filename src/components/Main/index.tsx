import { Wrapper, Title, Description, Logo, Illustration } from './styles';

export function Main({
  title = 'React Avançado',
  description = 'React, Typescript, Next.js, Styled Components and Jest'
}) {
  return (
    <Wrapper>
      <Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e react avançado escrito ao lado"
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor sentado de frente para uma tela com código"
      />
    </Wrapper>
  );
}
