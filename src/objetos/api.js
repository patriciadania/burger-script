const restaurantes= [
    {
      id: 1,
      tipoRefeicao: "Café da manhã",
      categorias: [
        {
          titulo: 'bebidas',
          produtos: [
            {
              id: 1,
              imagem: 'https://img.freepik.com/fotos-gratis/xicara-de-cafe-com-sobremesa-doce_1303-24016.jpg?w=740&t=st=1683580319~exp=1683580919~hmac=583131e85448c96f4aade9c376095937256b61a03bc78f1bb031aadeffc210d4',
              nome: 'Café americano',
              restaurante: 1,
              preco: 5,
              quantidade: 0,
            },
            {
              id: 2,
              imagem: 'https://img.itdg.com.br/images/recipes/000/002/462/332854/332854_original.jpg',
              nome: 'Café com leite',
              restaurante: 1,
              preco: 7,
              quantidade: 0,
            },
            {
              id: 3,
              imagem: 'https://t1.uc.ltmcdn.com/pt/images/5/7/1/img_como_fazer_empadao_de_frango_27175_600.jpg',
              nome: 'Suco de fruta natural',
              restaurante: 1,
              preco: 7,
              quantidade: 0,
            }
          ]
        },
        {
          titulo: 'lanches',
          produtos: [
            {
              id: 4,
              imagem: 'https://t1.uc.ltmcdn.com/pt/images/5/7/1/img_como_fazer_empadao_de_frango_27175_600.jpg',
              nome: 'Sanduíche de presunto e queijo',
              restaurante: 1,
              preco: 10,
              quantidade: 0,
            }
          ]
        }
      ]
    },
    {
      id: 2,
      tipoRefeicao: "Menu Principal",
      categorias: [
        {
          titulo: 'hamburgueres',
          produtos: [
            {
              id: 1,
              imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg',
              nome: 'Hambúrguer simples',
              restaurante: 2,
              preco: 10,
              quantidade: 0,
            },
            {
              id: 2,
              imagem: 'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2009/04/sashimi_facil.jpg',
              nome: 'Hambúrguer duplo',
              restaurante: 2,
              preco: 15,
              quantidade: 0
            }
          ]
        },
        {
          titulo: 'acompanhamentos',
          produtos: [
            {
              id: 1,
              imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg',
              nome: 'Batata frita',
              restaurante: 2,
              preco: 5,
              quantidade: 0,
            },
            {
              id: 2,
              imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg',
              nome: 'Anéis de cebola',
              restaurante: 2,
              preco: 5,
              quantidade: 0,
            }
          ]
        },
        {
          titulo: 'bebidas',
          produtos: [
            {
              id: 1,
              imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg',
              nome: 'Água 500ml',
              restaurante: 2,
              preco: 5,
              quantidade: 0,
            },
            {
              id: 2,
              imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg',
              nome: 'Água 750ml',
              restaurante: 2,
              preco: 7,
              quantidade: 0,
            },
            {
              id: 3,
              imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg',
              nome: 'Bebida gaseificada 500ml',
              restaurante: 2,
              preco: 7,
              quantidade: 0,
            },
            {
              id: 4,
              imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg',
              nome: 'Bebida gaseificada 750ml',
              restaurante: 2,
              preco: 10,
              quantidade: 0,
            }
          ]
        }
      ]
    }
   
  ]
export default restaurantes;