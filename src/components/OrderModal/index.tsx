import { useEffect } from 'react';
import { formatCurrency } from '../../utils/formatCurrency';
import { Actions, ModalBody, OrderDetails, Overlay } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';

interface OrderModalProps {
  visible: boolean;
  onClose: () => void;
  order: Order | null;
}

export function OrderModal({ visible, onClose, order }: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }

  // let total = 0;
  // order.products.forEach(({ product, quantity }) => {
  //   total += product.price * quantity;
  // });

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="icone para fechar o modal" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div className="">
            <span>
              {order.status === 'WAITING' && '🕑'}
              {order.status === 'IN_PRODUCTION' && '👩🏽‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em Produção'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name} width="56" height="28.51" />
                <span className="quantity">{quantity}x</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type="button" className="primary">
            <span>
              {order.status === 'WAITING' && '👩🏽‍🍳'}
              {order.status === 'IN_PRODUCTION' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Iniciar Produção'}
              {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
            </strong>
          </button>

          <button type="button" className="secondary">
            Cancelar Pedido
          </button>
        </Actions>
      </ModalBody>
    </>
  );
}
