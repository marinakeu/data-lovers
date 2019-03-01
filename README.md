# Pokémon Go Guide
#### Data Lovers

## Índice 
1. O Projeto 
2. Objetivo 
3. Definição de produto
4. Definição do usuário e Personas 
5. Protótipos
6. Definição interface do usuário
7. Implementação interface de usuário

### 1. O Projeto 
Projeto para a Laboratória - Brasil. O projeto consiste na criação de um API que possibilite o usuário a visualizar, filtrar, ordenar, e fazer cálculos com uma base de dados pré definida.  

### 2. Objetivos
#### Objetivos de aprendizagem 
É essencial que o projeto inclua Aplicar e aprofundar tudo o que aprendeu no projeto anterior.
Pensar nas necessidades dos usuários para criar uma interface que faça sentido e com tarefas claras.
Trabalhar com suas definições de pronto (definition of done) na organização e planificação de seu trabalho.
Definir os dados e de que forma mostrá-los no produto, baseando-se em seu entendimento de usuário.
Criar produtos que sigam os princípios básicos de usabilidade.
Iterar o desenho do produto, baseando-se nos resultados dos testes de usabilidade.
Manipular arrays e objetos.
Manipular o DOM (agregar elementos dinamicamente, baseados nos dados).
Manejar eventos do DOM para permitir interação com o usuário (dados filtrados, ordenados, etc).
Entender os benefícios e complexidades de trabalhar em equipe em um ambiente de incertezas. 

#### Requisitos
Inclui Definição de produto clara e informativa no README.md.
 Inclui esboço da solução (protótipo de baixa fidelidade e de alta fidelidade, se houver) no README.md.
 Inclui a lista de problema detectados através dos testes de usabilidade no README.md.
 UI: Mostra lista e/ou tabela com dados e/ou indicadores.
 UI: Permite ordenar os dados por meio de um ou mais campos (asc e desc).
 UI: Permite filtrar os dados com base em uma condição.


### 3. Definição de produto


### 4. Definição do usuário 
Foram definidos o perfil de usuário e a partir dele, duas personas que possibilitassem um maior entendimento e aplicação do projeto. 

#### As personas 

- Persona 1

(imagem) 
 Perfil intermediário 

Nome: Mateus 
Idade: 24 anos 
Onde mora: Consolação - SP 
Classe: Média-Alta 

Estilo de vida 
Profissão: Designer 
Hobbies: jogar videogame, assistir Netflix.
Atividade física: não pratica, apenas caminha enquanto joga Pokemon Go. 

Motivo do Download do Pokemon Go: 
Influência dos amigos. 
Gosta de jogos e quis conhecer 
Se interessou pela dinâmica do jogo, e joga frequentemente desde então.

Necessidades
Quer conhecer mais sobre Pokemon
Deseja participar de campeonatos 
Otimizar a caçada de pokemons obtendo informações sobre a possibilidade de spawn. 
Melhoras estratégias de jogabilidade. 

_________
- Persona 2

Perfil iniciante 
(imagem)

Nome: Janaína 
Idade: 24 anos 
Onde mora: Belo 
Classe: Média-Alta 

Estilo de vida 
Profissão: Administradora 
Hobbies: andar de bicicleta aos finais de semana, ir ao cinema, ir em shows.
Atividade física: por lazer.

Motivo do Download do Pokemon Go: 
Colegas de trabalho jogam na hora do almoço.
Assistia o desenho quando era criança.
Nunca havia jogado por falta de incentivo

Necessidades
Quer conhecer mais sobre Pokemon pois não lembra muito dos personagens
Quer saber sobre as estratégias para ganhar confiança e vencer nas batalhas. 
Quer subir de nível no jogo 

#### Usuário

- Principais usuários do produto:
Idade: 25 a 25 anos
Onde mora: centros urbanos
Classe social: média/alta
Perfil de uso do jogo: iniciante a intermediário

- Objetivos dos usuários com relação ao produto:

 - Dados mais importantes para verem na interface:

- Contexto de utilização do produto:

### 5. Protótipos

Protótipo 1: Imagens
Protótipo 2: (link marvel) 

Testes de usabilidade
O protótipo 1 foi testado com potenciais usuários a partir das tarefas:
1. Abrir a lista -> filtrar por tipo fogo > voltar ao inicio
2. Abrir a lista e ordenar por spawn chance > voltar ao inicio
3. Abrir os dados para nerds-> filtrar por fraquezas água

Também foi solicitado que os usuários retornassem com comentários sobre layout, navegabilidade do protótipo e relevância das informações fornecidas.

Perfil dos potenciais usuários que testaram:
1. Homem, 28 anos, jogador iniciante
2. Homem, 25 anos, jogador intermediário
3. Homem, 24 anos, jogador avançado
4. Homem, 32 anos, jogador intermediário
5. Mulher, 30 anos, jogador iniciante

Resultados do teste com protótipo 1:
- Layout foi considerado adequado (simples e limpo);
- Praticamente todos os usuários conseguiram realizar as três tarefas/ apenas um ou dois entenderam que já era o produto final com as funcionalidades filtrar e ordenar combinadas e não como tarefas separadas;
- A parte de listagem de Pokémons (telas das tarefas 1 e 2) foi considerada relevante por todos os usuários;
- Para o usuário avançado, a parte de "Dados para Nerds" com os gráficos foi apontada como um pouco confusa em relação a quais dados seriam apresentados. Quando esclarecidos os dados escolhidos, os gráficos de porcentagem por tipo de Pokémon e por fraqueza foram considerados irrelevantes.

Reorganização do protótipo

### 6.  Definição interface do usuário

### 7. Implementação interface de usuário
 
#### Versionamento
0.0.1. Mostrar os dados dos Pokémons em cards;
0.0.2. Permitir ao usuário filtrar por tipo e por fraqueza e ordenar por ordem alfabética, número do Pokémon, candy, spawn chance e spawn time;
0.0.3. Calcular média aritmética, máximo e mínimo dos dados candy, spawn chance e spawn time;
0.0.4. (Hacker edition) - carregar um arquivo JSON por meio de um fetch;
0.0.5. (Hacker edition) - utilizar gráficos para mostrar 

#### Execução
- HTML
- CSS
- JavaScript
- Uso do Json
- Uso de gráficos