import { obterPedidos, adicionarPedido } from '../API/Pedidos';


describe('Pedidos API', () => {
  describe('obterPedidos', () => {
    it('deve retornar uma resposta válida', async () => {
      const pedidos = await obterPedidos();
      expect(Array.isArray(pedidos)).toBe(true);
    });

    it('deve lançar um erro ao obter pedidos', async () => {
 
      jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.resolve({ error: 'Erro ao obter pedidos' }),
        })
      );

      await expect(obterPedidos()).rejects.toThrow('Erro ao obter pedidos');

      global.fetch.mockRestore();
    });
  });

  describe('adicionarPedido', () => {
    it('deve adicionar um pedido com sucesso', async () => {
      const cliente = 'Cliente 1';
      const mesa = 'Mesa 1';
      const produtos = [
        { id: 1, name: 'Produto 1', type: 'tipo1', price: 10, quantity: 2 },
        { id: 2, name: 'Produto 2', type: 'tipo2', price: 15, quantity: 1 },
      ];

      const pedido = await adicionarPedido(cliente, mesa, produtos);

      expect(pedido).toHaveProperty('id');
      expect(pedido).toHaveProperty('client', cliente);
      expect(pedido).toHaveProperty('table', mesa);
      expect(pedido).toHaveProperty('products');
      expect(pedido.products).toHaveLength(produtos.length);
    });

    it('deve lançar um erro ao adicionar pedido', async () => {
      const cliente = 'Cliente 1';
      const mesa = 'Mesa 1';
      const produtos = [
        { id: 1, name: 'Produto 1', type: 'tipo1', price: 10, quantity: 2 },
      ];

 
      jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.resolve({ error: 'Erro ao adicionar pedido' }),
        })
      );

      await expect(adicionarPedido(cliente, mesa, produtos)).rejects.toThrow(
        'Erro ao adicionar pedido'
      );

      global.fetch.mockRestore();
    });
  });
});