import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '6372e48c',
    'table': '123',
    'status': 'DONE',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': 'https:dummyimage.com/150',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6372e48cbc6195b'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': 'https:dummyimage.com/48',
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
