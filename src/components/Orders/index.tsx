import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '6372e48c',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668559121649-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6372e48cbc6195b'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1668558998408-chicken.png',
          'price': 7.5,
        },
        'quantity': 2,
        '_id': '6372e48cbc6216h'
      }
    ]
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon='🕑' status='Fila de espera' orders={orders} />
      <OrdersBoard icon='👩🏽‍🍳' status='Em produção' orders={[]} />
      <OrdersBoard icon='✅' status='Pronto!' orders={[]} />
    </Container>
  );
}
