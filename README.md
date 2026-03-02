# AppMvc - Mobile UI Prototype

Protótipo de interface de usuário (UI) para um aplicativo móvel de e-commerce focado na venda de jogos. Desenvolvido com React Native e Expo, o objetivo deste projeto é demonstrar a construção de layouts complexos, navegação e componentização no ecossistema mobile.

**Nota de Arquitetura:** Este projeto foca exclusivamente na camada de apresentação (Frontend estático). A lógica de negócios, integração com APIs e gerenciamento de estado global (ex: Redux/Zustand) não estão implementados nesta iteração.

## 💻 Tecnologias Utilizadas

5. **React Native (v0.81)**: Framework principal para desenvolvimento cross-platform.
6. **Expo**: Plataforma para facilitação do *build*, testes e execução do aplicativo.
7. **React Navigation (Stack)**: Gerenciamento de rotas e fluxo de telas.
8. **Expo Vector Icons**: Biblioteca de iconografia (Ionicons e MaterialCommunityIcons).

## 📱 Estrutura de Telas (Views)

A navegação foi estruturada em pilhas (Stack Navigation) abrangendo os seguintes fluxos:

9. **Autenticação:** Telas de Login, Cadastro e Recuperação de Senha.
10. **Exploração (Home):** - Barra de pesquisa customizada.
 11. Acesso rápido a categorias via `FlatList` horizontal.
 12. Listagem de ofertas e recomendações.
13. **Detalhes do Produto:** View focada na apresentação de imagens (banners e logos) utilizando `ScrollView`.
14. **Área do Usuário:** Perfil do usuário e submenu de navegação.
15. **Suporte:** FAQ interativo com expansão de componentes dinâmicos (Accordion estático).

## 🚀 Como Executar o Projeto

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado e o aplicativo **Expo Go** no seu dispositivo móvel (ou um emulador Android/iOS configurado).

### 1. Clonando o Repositório
```bash
git clone https://github.com/Eduxplorer/AppMvc-Mobile.git
cd appmvc-mobile

```
### 2\. Instalando Dependências
```bash
npm install
```
### 3\. Executando o Expo
```bash
npx expo start

```
Após executar o comando acima, escaneie o código QR exibido no terminal utilizando o Expo Go no seu celular ou pressione `a` para rodar no emulador Android / `i` para o simulador iOS.
