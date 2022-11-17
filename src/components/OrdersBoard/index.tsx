import { Order } from '../../types/Order';
import { OrdersContainer, Board } from './styles';

interface OrdersBoardProps {
  icon: string;
  status: string;
  orders: Order[];
}

export function OrdersBoard({ icon, status, orders }: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{status}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type="button" key={order._id}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
