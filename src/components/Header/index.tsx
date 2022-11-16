import { Container, Content } from './styles';

import Logo from '../Logo';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <Logo />
      </Content>
    </Container>
  );
}
