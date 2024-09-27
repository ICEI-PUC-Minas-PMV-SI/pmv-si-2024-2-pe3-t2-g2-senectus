# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

Nesta parte do trabalho você deve detalhar a documentação dos requisitos do sistema proposto de acordo com as seções a seguir. Ressalta-se que aqui é utilizado como exemplo um sistema de gestão de cursos de aperfeiçoamento.

## 3.1 Objetivos deste documento
Esta especificação de requisitos tem como objetivo fornecer um guia completo e preciso para o desenvolvimento do sistema Senectus, uma plataforma digital que visa melhorar a qualidade de vida de idosos, conectando-os a serviços de saúde, atividades físicas e conteúdos informativos. Este documento serve como referência para a equipe de desenvolvimento, stakeholders do projeto e futuros colaboradores, garantindo que o sistema seja construído de acordo com as necessidades dos usuários e os objetivos do projeto.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto que será criado neste projeto será denominado "Senectus" que da tradução direta do latim para o português, significa idoso, referenciando o público alvo que o sistema visa atingir. Para que o sistema Senectus seja capaz de atingir seus objetivos, o mesmo terá os seguintes componentes:
- **Biblioteca de Exercícios**: componente dedicado a exibir uma biblioteca de exercícios e planos de treino para os usuários;
- **Gestor de cadastro**: componente dedicado a gerenciar o fluxo de cadastro de usuários no Senectus;
- **Gestor de eventos remotos e presenciais**: componente dedicado a fornecer meios de cadastro de novos eventos relacionados a saúde e exercícios por profissionais. Além disso, o componente também é responsável por permitir a pesquisa destes eventos e fornecer informações sobre como participar;
- **Gestor de pesquisa de profissionais**: componente dedicado a gerenciar o fluxo de pesquisa de profissionais da área da saúde, fornecendo os meios de contato mais adequados do mesmo.
- **Gestor de blog**: componente dedicado a permitir o gerenciamento de postagens de blogs referente a temas da sáude e a pesquisa adequada dos mesmos;

### 3.2.2 Missão do produto
Senectus tem como missão aumentar o engajamento em atividades físicas e promover o bem-estar de idosos através de uma plataforma digital que oferece:
- Biblioteca de exercícios: planos de treino e informações com instruções claras e seguras para a execução dos exercícios em si.
- Conexão com profissionais da saúde: facilidade para encontrar e agendar consultas com especialistas.
- Eventos e atividades: uma agenda de eventos presenciais e online, promovendo a socialização e o aprendizado.
- Conteúdo informativo: artigos e dicas sobre saúde, nutrição e bem-estar, escritos por profissionais da área.

### 3.2.3 Limites do produto
Senectus apesar de fornecer os meios de contatos e informações de eventos, não é responsável por promover nenhum meio de comunicação ou pagamento dentro da plataforma, utilizando-se assim, de sistemas externos, como, por exemplo, os clientes de email e telefone responsáveis para estabelecer um meio de comunicação entre o idoso e o profissional, ou links de formulários externos para permitir que os organizadores de eventos coletem informações dos participantes. Além disso, Senectus não armazena os vídeos de instruções de exercícios, necessitando, assim, de uma plataforma externa para tal.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
| 1 | Facilidade no acesso de um amplo catalogo de exercícios variados | Essencial |
| 2 | Acessibilidade para idosos com pouca experiência digital | Essencial |
| 3 | Facilidade na busca por profissionais | Essencial |
| 4 | Facilidade em cadastrar profissionais | Essencial |
| 5 | Acesso ao blog de conteúdos | Recomendável |
| 6 | Conexão entre eventos físicos e virtuais | Recomendável |

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
| ------ | --- | --- |
| RF001 | Conectar na plataforma | O sistema deve permitir que usuários se conectem na plataforma |
| RF002 | Desconectar da plataforma | O sistema deve permitir que usuários se desconectem da plataforma |
| RF003 | Gerenciar perfil de idoso | O sistema deve permitir que o idoso crie, edite, leia e exclua seu perfil |
| RF004 | Gerenciar perfil de profissional | O sistema deve permitir que o profissional crie, edite, leia e exclua seu perfil, podendo manipular seus serviços ofertados, preços cobrados e sua região de atuação |
| RF005 | Pesquisar por exercícios | O sistema deve permitir que usuários sejam capazes de pesquisar por exercícios |
| RF006 | Gerenciar plano de treino | O sistema deve permitir que o profissional crie, atualize, leia e exclua os planos de treino dos seus pacientes |
| RF007 | Pesquisar profissional | O sistema deve ser capaz de permitir que o usuário não profissional pesquise por profissionais da saúde |
| RF008 | Gerenciar eventos | O sistema deve permitir que os profissionais criem, atualizem, leiam e excluam seus eventos relacionados a área da saúde |
| RF009 | Pesquisar eventos | O sistema deve permitir que qualquer usuário pesquise por eventos relacionados a área da saúde |
| RF010 | Gerenciar postagens | O sistema deve permitir que o profissional crie, edite, exclua e leias as suas postagens de seu blog |
| RF011 | Pesquisar postagens | O sistema deve permitir que qualquer usuário pesquise as postagens dos blogs |
| RF012 | Comentar em postagens | O sistema deve permitir que qualquer usuário comente nas postagens dos blogs |
| RF013 | Gerenciar consultas - Profissional | O sistema deve permitir que o profissional da saúde leia, exclua ou aceite solicitações de novas consultas médicas |
| RF014 | Gerenciar consultas - Idoso | O sistema deve permitir que o usuário não profissional solicite, cancele e leia as consultas de profissionais da saúde |

### 3.3.2 Requisitos Não Funcional

| Código | Requisito Não Funcional (Restrição) |
|--------------------|------------------------------------|
| RNF001 | O sistema deve seguir boas práticas de desenvolvimento de sistemas com relação a usabilidade. |
| RNF002 | O sistema deve ser responsivo em diversas telas com base no público-alvo |
| RNF003 | O sistema deve seguir boas práticas de segurança da informação sempre que possível |
| RNF004 | O sistema deve ser de fácil entendimento para o público idoso |
| RNF005 | O sistema deve ser desenvolvido utilizando a linguagem de programação Javascript |
| RNF006 | O sistema deve respeitar as normas da LGPD |


### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Profissional da Saúde |	Usuário profissional da saúde que deseja encontrar novas formas de divulgação do seu trabalho com idosos. |
| Idoso |	Usuário da terceira idade com compreensão das tecnologias e que deseja encontrar um profissional de saúde ou instruções para realizar exercícios em casa, como alongamentos. |	

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![dcu](/docs/umbrello/use-case.svg)
 
### 3.4.2 Descrições de Casos de Uso

| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU01 | Conectar na plataforma | O sistema deve permitir que usuários se conectem na plataforma. | Profissional da Saúde ou Idoso |

#### Pré-condições: O usuário não deve estar logado.
#### Pós-condições: O usuário foi cadastrado com sucesso e está disponível para utilizar a  plataforma.

#### Fluxo Principal:
1. O usuário acessa a plataforma Senectus e clica em “Conectar”.
2. O usuário preenche as suas informações.
3. O sistema verifica se o usuário possui conta na plataforma.
4. O sistema autoriza o acesso da plataforma.

#### Fluxo Alternativo (1a):
1. O usuário acessa a plataforma Senectus e clica em “Conectar”.
2. O sistema verifica se o usuário possui conta na plataforma.
3. O usuário não possui uma conta cadastrada, então o sistema redireciona o usuário para a página de “Cadastrar usuário”

<br>

***

| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU02 | Desconectar da plataforma | O sistema deve permitir que usuários se desconectem da plataforma em qualquer momento. | Profissional da Saúde ou Idoso |

#### Pré-condições: O usuário deve possuir uma conta na plataforma e deve estar logado.
#### Pós-condições: O usuário foi desconectado da plataforma e não poderá acessar até o próximo login.

#### Fluxo Principal:
1. O usuário navega até a página de configurações.
2. O usuário clica em "Desconectar".
3. O sistema desconecta o usuário e redireciona para a página inicial na plataforma Senectus.

<br>

***
| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU03 | Gerenciar perfil de usuário | O sistema deve permitir que usuários se crie, remova ou edite o seu perfil. | Profissional da Saúde ou Idoso |

#### Fluxo Principal:
1. O usuário acessa a plataforma e navega até a seção "Cadastrar usuário".
2. O usuário seleciona a categoria do seu perfil.
3. O sistema solicita as informações do usuário.
4. O usuário preenche o formulário e envia os dados.
5. O sistema valida as informações e cria o perfil do usuário.

#### Fluxo Alternativo (3a):
1. O usuário acessa a plataforma e realiza o login.
2. O usuário navega até a seção "Configurações".
3. O sistema exibe as informações atuais do perfil.
4. O usuário realiza alterações na sua conta.
5. O sistema valida as novas informações e atualiza o perfil.
6. O usuário visualiza a mensagem de confirmação de que o perfil foi atualizado com sucesso.

#### Fluxo Alternativo (3b):
1. O usuário acessa a plataforma e realiza o login.
2. O usuário navega até a seção Configurações".
3. O sistema exibe as informações atuais do perfil.
4. O usuário seleciona a opção "Excluir Conta" 
5. O sistema solicita uma confirmação para a exclusão da conta.
6. O usuário confirma a exclusão do perfil.
7. O sistema remove o perfil e todos os dados associados.
8. O sistema exibe uma mensagem confirmando que o perfil foi deletado com sucesso, e o usuário é desconectado da plataforma.

<br>

***

| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU04 | Pesquisar por exercícios | O usuário acessa a plataforma e navega para a “Biblioteca de exercícios”. | Profissional da Saúde ou Idoso |

#### Fluxo Principal:
1. O usuário acessa a seção de "Biblioteca de Exercícios".
2. O usuário seleciona a categoria de exercício desejada.
3. O usuário seleciona o exercício desejado.

<br>

***

| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU05 | Gerenciar plano de treino | O idoso acessa o seu plano de treino semanal e realiza os exercícios. | Idoso |

#### Pré-condições: O idoso deve estar autenticado na plataforma

#### Fluxo Principal:
1. O idoso seleciona a seção de exercícios do sistema.
2. O idoso seleciona o tipo de treino de acordo com o seus respectivos objetivos.
3. O sistema cria um plano de treino na conta do usuário.
4. O idoso inicia sua rotina de treino.
   
#### Fluxo Alternativo (5a):
1. O idoso seleciona a seção de exercícios do sistema.
2. O idoso seleciona seu atual plano de treino.
3. O idoso edita informações existente no plano, como o nível de dificuldade do mesmo.
4. O sistema valida as informações e atualiza o plano de treino.

#### Fluxo Alternativo (5b):
1. O idoso seleciona a seção de exercícios do sistema.
2. O idoso seleciona seu atual plano de treino.
3. O idoso tenta cancelar seu atual plano de treino.
4. O sistema solicita a sua confirmação.
5. O idoso confirma a solicitação.
6. O sistema cancela o plano de treino do idoso.

<br>

***

| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU06 | Realizar avaliação prévia | O idoso realiza avaliação de saúde para que o sistema possa recomendar o melhor plano de treino para o usuário | Idoso |


#### Fluxo Principal:
1. O idoso clica em "Avaliar-me" na página inicial.
2. O sistema solicita cadastro ou login do usuário.
3. O idoso preenche suas respectivas informações.
4. O sistema redireciona para o preenchimento do formulário de avaliação física
5. O idoso preenche informações sobre sua saúde física.
6. O sistema redireciona o usuário para a aba de exercícios e indica qual seria o melhor plano de treino para o mesmo.


<br>

***

| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU07 | Pesquisar Profissional | Permitir que o idoso pesquise por profissionais da saúde. | Idoso |

#### Pré-condições: O usuário deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O idoso acessa a opção "Pesquisar Profissional".
2. O sistema exibe uma lista de profissionais da saúde cadastrados.
3. O idoso insere informações referente ao profissional que ele busca, como o nome e sua profissão em forma de filtro.
4. O sistema retorna uma lista de profissionais que estão de acordo com as informações fornecidas pelo idoso.
5. O idoso seleciona um profissional e visualiza suas informações de contato e especialidades.


#### Fluxo Alternativo (7a):
1. O idoso acessa a opção "Pesquisar Profissional".
2. O sistema exibe uma lista de profissionais da saúde cadastrados.
3. O idoso insere informações referente ao profissional que ele busca, como o nome e sua profissão em forma de filtro.
4. O sistema retorna uma mensagem alertando que nenhum profissional foi encontrado.

<br>

***

| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU08 | Gerenciar Eventos | Permitir que os profissionais criem, editem, visualizem e excluam eventos relacionados à área da saúde. | Profissional da saúde |

#### Pré-condições: O profissional da saúde deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O profissional acessa a seção "Eventos".
2. O sistema exibe os eventos atuais criados pelo profissional.
3. O profissional cria um novo evento.
4. O sistema salva as alterações.

#### Fluxo Alternativo (8a):
1. O profissional acessa a seção "Eventos".
2. O sistema exibe os eventos atuais criados pelo profissional.
3. O profissional seleciona um evento.
4. O sistema exibe informações mais detalhadas deste evento.
5. O profissional edita as informações atuais.
6. O sistema atualiza as informações do evento em questão.

#### Fluxo Alternativo (8b):
1. O profissional acessa a seção "Eventos".
2. O sistema exibe os eventos atuais criados pelo profissional.
3. O profissional seleciona um evento.
4. O sistema exibe informações mais detalhadas deste evento.
5. O profissional clica em "Excluir".
6. O sistema solicita a confirmação do profissional.
7. O profissional confirma a ação.
8. O sistema remove o evento.

<br>

***

| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU09 | Pesquisar Eventos | Permitir que qualquer usuário pesquise por eventos relacionados à área da saúde. | Profissional da saúde ou Idoso  |

#### Fluxo Principal:
1. O profissional acessa a seção "Eventos".
2. O usuário acessa a opção "Pesquisar".
3. O sistema exibe uma lista de eventos cadastrados.
4. O usuário insere informações referente ao evento que deseja pesquisar.
5. O sistema retorna uma lista de eventos que estão de acordo com as informações fornecidas pelo usuário.
6. O usuário seleciona um evento e visualiza suas informações.


#### Fluxo Alternativo (9a):
1. O profissional acessa a seção "Eventos".
2. O usuário acessa a opção "Pesquisar".
3. O sistema exibe uma lista de eventos cadastrados.
4. O usuário insere informações referente ao evento que deseja pesquisar.
5. O sistema retorna uma mensagem alertando que nenhum evento foi encontrado.

<br>

***
| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU10 | Gerenciar Postagens | Permitir que os profissionais criem, editem, visualizem e excluam suas postagens no blog. | Profissional da Saúde |

#### Pré-condições: O profissional da saúde deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O profissional acessa a seção "Blog".
2. O sistema exibe as postagens atuais criadas pelo profissional.
3. O profissional cria uma nova postagem.
4. O sistema salva as alterações.

#### Fluxo Alternativo (10a):
1. O profissional acessa a seção "Blog".
2. O sistema exibe as postagens atuais criadas pelo profissional.
3. O profissional seleciona uma postagem.
4. O sistema exibe informações mais detalhadas desta postagem.
5. O profissional edita as informações atuais.
6. O sistema atualiza as informações da postagem em questão.

#### Fluxo Alternativo (10b):
1. O profissional acessa a seção "Blog".
2. O sistema exibe as postagens atuais criadas pelo profissional.
3. O profissional seleciona uma postagem.
4. O sistema exibe informações mais detalhadas desta postagem.
5. O profissional clica em "Excluir".
6. O sistema solicita a confirmação do profissional.
7. O profissional confirma a ação.
8. O sistema remove a postagem.

<br>

***
| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU11 | Pesquisar Postagens | O sistema deve permitir que qualquer usuário pesquise por postagens no blog. | Profissional da Saúde ou Idoso |

#### Pré-condições: O usuário deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O profissional acessa a seção "Blog".
2. O usuário acessa a opção "Pesquisar".
3. O sistema exibe uma lista de postagens cadastradas.
3. O usuário insere informações referente a postagem que deseja pesquisar.
4. O sistema retorna uma lista de postagens que estão de acordo com as informações fornecidas pelo usuário.
5. O usuário seleciona uma postagem e visualiza suas informações.


#### Fluxo Alternativo (11a):
1. O profissional acessa a seção "Blog".
2. O usuário acessa a opção "Pesquisar".
3. O sistema exibe uma lista de postagens cadastradas.
4. O usuário insere informações referente a postagem que deseja pesquisar.
5. O sistema retorna uma mensagem alertando que nenhuma postagem foi encontrada.

<br>

***
| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU012 | Comentar em postagens | O sistema deve permitir que qualquer usuário comente nas postagens dos blogs | Idoso ou Profissional da saúde |

#### Pré-condições: O usuário deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O usuário acessa a seção "Blog".
2. O usuário acessa a opção "Pesquisar".
3. O sistema exibe uma lista de postagens cadastradas.
4. O usuário insere informações referente a postagem que deseja pesquisar.
5. O sistema retorna uma lista de postagens que estão de acordo com as informações fornecidas pelo usuário.
6. O usuário seleciona uma postagem e visualiza suas informações.
7. O usuário comenta na postagem.
8. O sistema salva o comentário.

<br>

***
| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU13 | Gerenciar Consultas | O sistema deve permitir que o profissional da saúde leia, exclua ou aceite solicitações de novas consultas médicas | Profissional da saúde |

#### Pré-condições: O usuário deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O profissional acessa a seção "Consultas".
2. O sistema exibe uma lista de consultas cadastradas.
3. O profissional acessa uma das consultas.
4. O sistema exibe informações mais detalhadas desta consulta.
5. O profissional aceita a consulta
6. O sistema atualiza o status da consulta e informa os envolvidos.

#### Fluxo Alternativo (13a):
1. O profissional acessa a seção "Consultas".
2. O sistema exibe uma lista de consultas cadastradas.
3. O profissional acessa uma das consultas.
4. O sistema exibe informações mais detalhadas desta consulta.
5. O profissional recusa/remove a consulta
6. O sistema atualiza o status da consulta e informa os envolvidos.

<br>

***
| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU14 | Solicitar Consultas | O sistema deve permitir que o usuário não profissional solicite consultas de profissionais da saúde | Idoso |

#### Pré-condições: O usuário deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O idoso acessa a opção "Pesquisar Profissional".
2. O sistema exibe uma lista de profissionais da saúde cadastrados.
3. O idoso insere informações referente ao profissional.
4. O sistema retorna uma lista de profissionais que estão de acordo com as informações fornecidas pelo idoso.
5. O idoso clica em "Solicitar consulta".
6. O sistema solicita o preenchimento de um formulário.
7. O idoso preenche suas informações
8. O sistema valida as informações e cria a solicitação.

<br>

***
| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU15 | Cancelar Consultas | O sistema deve permitir que o usuário não profissional cancele consultas marcadas com profissionais da saúde | Idoso |

#### Pré-condições: O usuário deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O idoso acessa a opção "Consultas" na aba de "Pesquisar Profissional".
2. O sistema retorna todas as consultas existentes.
3. O idoso seleciona uma das consultas.
4. O sistema retorna informações mais detalhadas desta consulta.
5. O idoso clica em "Cancelar".
6. O sistema solicita a confirmação do usuário.
7. O idoso confirma a ação
8. O sistema cancela a consulta.

#### Fluxo Alternativo (15a):
1. O idoso acessa a opção "Consultas" na aba de "Pesquisar Profissional".
2. O sistema retorna todas as consultas existentes.
3. O idoso seleciona uma das consultas.
4. O sistema retorna uma mensagem avisando que nenhuma consulta foi encontrada.


### 3.4.3 Diagrama de Classes 

#### Figura 2: Diagrama de Classes do Sistema.
 
![dcu](/docs/umbrello/diagrama-de-classe.svg)

### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Aluno |	Cadastro de informações relativas aos alunos. |
| 2	| Curso |	Cadastro geral de cursos de aperfeiçoamento. |
| 3 |	Matrícula |	Cadastro de Matrículas de alunos nos cursos. |
| 4 |	Turma |	Cadastro de turmas.
| 5	|	Professor |	Cadastro geral de professores que ministram as disciplinas. |
| ... |	... |	... |
