import styled from 'styled-components';

export const Overlay = styled.div`
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0,0,0,0.8);
  backdrop-filter: blur(4.5px);
`;

export const ModalBody = styled.div`
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);

  width: 480px;
  padding: 32px;
  border-radius: 8px;
  background-color:white;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      border: 0;
      line-height: 0;
      background: white;
      border-radius: 8px;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  .status-container{
    margin-top: 32px;

    small {
      font-size:14px;
      opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
      font-weight:500;
      font-size: 14px;
      opacity: 0.8;
  }

  .order-items{
    margin-top:16px;

    .item{
      display:flex;

      & + .item{
        margin-top:16px;
       }

      img {
        border-radius: 6px;
      }

      .quantity{
        color: #666;
        display: block;
        font-size: 14px;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details{
        margin-left: 4px;

        > strong{
          display: block;
          margin-bottom: 4px;
          line-height: 1;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  margin-top: 32px;
  flex-direction: column;

  .primary{
    gap: 8px;
    border: 0;
    color: white;
    display: flex;
    padding: 12px 24px;
    align-items: center;
    border-radius: 48px;
    justify-content: center;
    background-color: #333;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .secondary{
    border:0;
    color: #D73035;
    margin-top: 12px;
    font-weight: bold;
    padding: 14px 24px;
    border-radius: 48px;
    background-color: white;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
