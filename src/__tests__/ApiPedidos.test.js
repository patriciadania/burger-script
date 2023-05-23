import { obterPedidos, adicionarPedido } from '../API/Pedidos';
import { API_URL, AUTH_TOKEN } from '../../jest.config';
const fetch = require('node-fetch');
jest.mock('node-fetch');

beforeEach(() => {
    jest.resetModules();
  });
  

describe('API de Pedidos', () => {
    beforeEach(() => {
   
    });
  
    it('deve obter os pedidos com sucesso', async () => {
      const pedidosMock = [
        { id: 1, client: 'João', table: 1, products: [] },
        { id: 2, client: 'Maria', table: 2, products: [] },
      ];
  
      fetch.mockResponseOnce(JSON.stringify(pedidosMock));
  
      const pedidos = await obterPedidos();
  
      expect(fetch).toHaveBeenCalledWith(`${API_URL}/orders`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
  
      expect(pedidos).toEqual(pedidosMock);
    });
  
    it('deve adicionar um pedido com sucesso', async () => {
      const cliente = 'João';
      const mesa = 1;
      const produtos = [
        { id: 1, name: 'Hambúrguer', type: 'burger', price: 10.0, quantity: 2 },
        { id: 2, name: 'Batata Frita', type: 'side', price: 5.0, quantity: 1 },
      ];
  
      const pedidoMock = {
        id: 264,
        client: cliente,
        table: mesa,
        products: [
          { qty: 2, product: { id: 1, name: 'Hambúrguer', type: 'burger', price: 10.0, table: mesa } },
          { qty: 1, product: { id: 2, name: 'Batata Frita', type: 'side', price: 5.0, table: mesa } },
        ],
        status: '',
        dateEntry: expect.any(String),
      };
  
      fetch.mockResponseOnce(JSON.stringify(pedidoMock));
  
      const pedido = await adicionarPedido(cliente, mesa, produtos);
  
      expect(fetch).toHaveBeenCalledWith(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
        body: JSON.stringify(pedidoMock),
      });
  
      expect(pedido).toEqual(pedidoMock);
    });
  });
