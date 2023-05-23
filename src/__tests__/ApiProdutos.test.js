import { adicionarProdutos, obterProdutos } from "../API/Produtos";

describe('Produtos API', () => {
  describe('adicionarProdutos', () => {
    it('deve adicionar um produto com sucesso', async () => {
      const nomeProduto = 'Hambúrguer';
      const precoProduto = 10;
      const tipoProduto = 'Lanche';
      const categoriaProduto = 'Comida';
      const idProduto = 1;

      const produto = await adicionarProdutos(nomeProduto, precoProduto, tipoProduto, categoriaProduto, idProduto);

      expect(produto).toHaveProperty('name', nomeProduto);
      expect(produto).toHaveProperty('price', precoProduto);
      expect(produto).toHaveProperty('type', tipoProduto);
      expect(produto).toHaveProperty('category', categoriaProduto);
      expect(produto).toHaveProperty('id', idProduto);
    });

    it('deve lançar um erro ao falhar na adição do produto', async () => {
      const nomeProduto = 'Batata Frita';
      const precoProduto = 5;
      const tipoProduto = 'Acompanhamento';
      const categoriaProduto = 'Comida';
      const idProduto = 2;

      await expect(adicionarProdutos(nomeProduto, precoProduto, tipoProduto, categoriaProduto, idProduto)).rejects.toThrow('Erro ao adicionar produto');
    });
  });

  describe('obterProdutos', () => {
    it('deve retornar uma resposta válida', async () => {
      const produtos = await obterProdutos();
      expect(Array.isArray(produtos)).toBe(true);
    });

    it('deve lançar um erro ao falhar na obtenção dos produtos', async () => {
      await expect(obterProdutos()).rejects.toThrow('Erro ao obter produtos');
    });
  });
});
