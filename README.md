# Burger-Queen :hamburger:

Quinto projeto realizado pelo bootcamp @Laboratoria, o projeto Burger Queen envolve o desenvolvimento de uma interface de pedidos para um restaurante de hambúrgueres, que deve integrar-se com uma API . O objetivo principal é aprender a construir uma interface web utilizando o React. Projeto desenvolvido em parceria com @ThainaraTabile.
<div align="center">
<img width="500" src="https://github.com/patriciadania/burger-script/assets/120285942/2960fb2a-49af-4675-a8ca-3a47ab20a913"/>

</div>

<div align="center">
  
  <br>
  <img align="center" alt="git" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
    <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://user-images.githubusercontent.com/120285942/236062287-09f1bc78-7e35-45bc-b420-17b08bd4f81d.svg">
     <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="git" height="30" width="40" src="https://camo.githubusercontent.com/900baefb89e187c8b32cdbb3b440d1502fe8f30a1a335cc5dc5868af0142f8b1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d6f726967696e616c2e737667" />
  <img align="center" alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="vscode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <img align="center" alt="Figma" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
   <img align="center" alt="Canva" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg">
  <br>


  Desenvolvido por <br>
  <br>
    Patricia Adania de Oliveira<br>
  [Linkedin](https://www.linkedin.com/in/patriciadania/) | [Github](https://github.com/patriciadania)
  <br>
  <br>
  Thainara Tabile <br>
  [Linkedin](https://www.linkedin.com/in/thainaratabile/) | [Github](https://github.com/ThainaraTabile) 
  <br>
  <br>
 
  
</div>
 
***
## Índice

* [1. Definição de Produto](#1-definicao-de-produto) 
* [2. Histórias de Usuários](#2-historias-de-usuarios) 
* [3. Funcionalidades](#3-funcionalidades) 
* [4. Protótipo Versão Mobile](#4-prototipo-versao-mobile) 
* [5. Interface](#5-interface)
* [6. Testes](#6-testes) 
* [7. Checklists de Objetivos Alcançados](#7-checklist-de-objetivos-alcançados) 

***
## 1. Definição de Produto 
O projeto Burger Script é um pequeno restaurante de hambúrgueres que está crescendo e necessita de uma interface em que se possa realizar pedidos utilizando um tablet, e enviá-los para a cozinha para que sejam preparados de forma ordenada e eficiente.

Este projeto tem duas áreas: a interface (cliente) e a API (servidor). A interface está sendo desenvolvida utilizando o framework React.

As informações do cliente são as seguintes:

-  Temos 2 menus: um para o café da manhã e outro para o restante do dia.
-  Os clientes podem ser indecisos e mudar o pedido várias vezes antes de finalizá-lo.
-  A interface deve mostrar os dois menus, permitir a seleção de produtos e mostrar o resumo do pedido com o custo total.
-  O objetivo principal do projeto é aprender a construir uma interface web usando o framework React. Isso envolve compreender o conceito de estado da tela e como cada mudança no estado reflete na interface. <br>
  
Não há uma aba específica para cadastro de novos usuários. Isso ocorre porque a responsabilidade de registrar novos usuários é atribuída exclusivamente ao administrador do sistema.<br>

Caso você queira testar a aplicação, pode fazer login utilizando alguma das credenciais abaixo.
Destaco que essas são contas de teste e têm permissões restritas, com base nos perfis de usuário predefinidos.
Para entrar na aplicação, segue abaixo o usuário e a senha, de acordo com suas respectivas roles.<br>

<div align="center">
  <table>
    <tr>
      <th>Setor</th>
      <th>Email</th>
      <th>Senha</th>
    </tr>
    <tr>
      <td>Administração</td>
      <td>adm@bs.com</td>
      <td>1234567</td>
    </tr>
    <tr>
      <td>Cozinha</td>
      <td>cozinha@bs.com</td>
      <td>1234567</td>
    </tr>
    <tr>
      <td>Atendimento</td>
      <td>atendimento@bs.com</td>
      <td>1234567</td>
    </tr>
  </table>
</div>


***
## 2. Histórias de Usuários 
De acordo com os requisitos do projeto e cenário escolhido para o desenvolvimento da aplicação, na imagem abaixo se encontra as histórias de usuários.

<div align="center">
  <img alt="tela das historias de usuarios" src="https://github.com/patriciadania/burger-script/assets/120285942/821aafaa-fe00-47d1-a2d1-ccfebb83d275"/><br>
  Tela : Histórias de usuários.
  </div>

  ***
##### Historia de usuario 1  
O que deve acontecer para satisfazer as necessidades do usuário?<br>

  - Acessar uma tela de login.
  - Inserir email e senha.
  - Receber mensagens de erros compreensíveis, conforme o erro e as informações inseridas.
  - Entrar no sistema de pedidos caso as credenciais forem corretas. 
  ***

##### História de usuário 2
O que deve acontecer para satisfazer as necessidades do usuário?  <br>

- Anotar o nome do cliente.
- Adicionar produtos aos pedidos.
- Excluir produtos.
- Ver resumo e o total da compra.
- Enviar o pedido para a cozinha (guardar em algum banco de dados).
- Funcionar bem em um tablet.


***
##### História de usuário 3
O que deve acontecer para satisfazer as necessidades do usuário?  <br>

* Ver os pedidos ordenados à medida em que são feitos.
* Marcar os pedidos que foram preparados e estão prontos para serem servidos.
* Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado
  como concluído


***
##### História de usuário 4
O que deve acontecer para satisfazer as necessidades do usuário?  <br>

* Ver a lista de pedidos prontos para servir.
* Marcar os pedidos que foram entregues.


***
##### História de usuário 5
O que deve acontecer para satisfazer as necessidades do usuário?  <br>
* Ver lista de funcionários.
* Adicionar funcionários.
* Excluir funcionários.
* Atualizar dados dos funcionários.

***
##### História de usuário 6
O que deve acontecer para satisfazer as necessidades do usuário?  <br>
* Ver lista de produtos.
* Adicionar produtos.
* Excluir produtos.
* Atualizar dados de produtos.

***
## 3. Funcionalidades

A interface fornece recursos com base nas permissões atribuídas a cada usuário. Após o processo de login, o sistema verifica o cargo do usuário e redireciona automaticamente para as páginas pertinentes ao cargo. Abaixo estão listados os principais recursos disponíveis em cada área:


#### Atendimento
- `Registro de Pedidos`: Usuários com a role `atendimento` têm acesso à funcionalidade de registro de pedidos. A interface exibe dois menus distintos: Café da Manhã e Menu Principal, contendo os respectivos produtos disponíveis. O atendente pode selecionar itens, adicionar ou remover produtos da comanda, bem como, pode  visualizar um resumo completo do pedido, incluindo o cálculo do custo total.

- `Gerenciamento de Pedidos`: Os atendentes têm acesso a uma visualização dos pedidos que foram enviados para a cozinha e aguardam a entrega. Eles podem marcar os pedidos como "entregues" após realizarem a entrega física ao cliente, removendo-os da lista de pedidos pendentes. Além disso, os atendentes também têm a capacidade de visualizar os pedidos que já foram entregues.

#### Cozinha
- `Preparação de Pedidos`: Usuários com a role `cozinha` têm acesso a uma seção específica da interface onde podem visualizar os pedidos recebidos dos atendentes. Essa área permite que os usuários da cozinha saibam quais pedidos devem ser preparados. Ao concluir o processo de preparação de um pedido, o usuário da cozinha pode alterar o status do pedido para "pronto para servir".

- `Pedidos Prontos para Servir`: Os pedidos que possuem este status são automaticamente enviados de volta ao setor de atendimento. Isso permite que os atendentes sejam notificados de que os pedidos estão prontos para serem entregues aos clientes.

#### Administração
- `Gerenciamento de Colaboradores`: Os usuários com permissões administrativas têm acesso a recursos de gerenciamento de colaboradores. Isso inclui listar, adicionar, editar e excluir informações dos colaboradores, como nome, cargo, informações de contato, entre outros.

- `Gerenciamento de Produtos`: Estes usuários têm acesso a recursos de gerenciamento de produtos. Isso permite adicionar, editar e excluir produtos disponíveis no menu do restaurante, fornecendo controle completo sobre as opções oferecidas.
***
<br>
Em construção :construction:
