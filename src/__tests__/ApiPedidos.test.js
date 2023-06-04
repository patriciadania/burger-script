import {
  obterPedidos,
  adicionarPedido,
  atualizarStatusPedido,
} from '../API/Pedidos';
import fetchMock from 'fetch-mock';

const API_URL = 'https://burger-queen-api-mock-mluz.vercel.app';
const authToken = 'mockAuthToken';

describe('API', () => {
  beforeAll(() => {
    localStorage.setItem('authToken', authToken);
  });

  afterEach(() => {
    fetchMock.reset();
  });

  test('obterPedidos faz uma requisição GET para a API corretamente', async () => {
    const pedidosMock = [
      {
        id: 1,
        waiter: 'Atendente 1',
        client: 'Cliente 1',
        table: 'Mesa 1',
        products: [
          { id: 1, name: 'Produto 1', quantity: 2 },
          { id: 2, name: 'Produto 2', quantity: 1 },
        ],
        status: 'pendente',
        dateEntry: '2023-01-01T00:00:00.000Z',
      },

    ];

    fetchMock.get(`${API_URL}/orders`, {
      status: 200,
      body: pedidosMock,
    });

    const response = await obterPedidos();

    expect(fetchMock.lastUrl()).toBe(`${API_URL}/orders`);
    expect(fetchMock.lastOptions().method).toBe('GET');
    expect(fetchMock.lastOptions().headers).toEqual({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    });
    expect(response).toEqual(pedidosMock);
  });

  test('adicionarPedido faz uma requisição POST para a API corretamente', async () => {
    const novoPedido = {
      waiter: 'Atendente 1',
      client: 'Cliente 1',
      table: 'Mesa 1',
      products: [
        { id: 1, name: 'Produto 1', quantity: 2 },
        { id: 2, name: 'Produto 2', quantity: 1 },
      ],
      status: 'pendente',
      dateEntry: '2023-01-01T00:00:00.000Z',
      id: 1,
    };

    fetchMock.post(`${API_URL}/orders`, {
      status: 200,
      body: novoPedido,
    });

    const response = await adicionarPedido(
      novoPedido.client,
      novoPedido.table,
      novoPedido.products,
      novoPedido.waiter
    );

    expect(fetchMock.lastUrl()).toBe(`${API_URL}/orders`);
    expect(fetchMock.lastOptions().method).toBe('POST');
    expect(fetchMock.lastOptions().headers).toEqual({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    });
    expect(fetchMock.lastOptions().body).toBe(JSON.stringify(novoPedido));
    expect(response).toEqual(novoPedido);
  });

  test('atualizarStatusPedido faz uma requisição PATCH para a API corretamente', async () => {
    const pedidoId = 1;
    const novoStatus = 'concluido';

    fetchMock.patch(`${API_URL}/orders/${pedidoId}`, {
      status: 200,
      body: {
        id: pedidoId,
        status: novoStatus,
      },
    });

    const response = await atualizarStatusPedido(pedidoId, novoStatus);

    expect(fetchMock.lastUrl()).toBe(`${API_URL}/orders/${pedidoId}`);
    expect(fetchMock.lastOptions().method).toBe('PATCH');
    expect(fetchMock.lastOptions().headers).toEqual({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    });
    expect(fetchMock.lastOptions().body).toBe(JSON.stringify({ status: novoStatus }));
    expect(response).toEqual({
      id: pedidoId,
      status: novoStatus,
    });
  });
});
