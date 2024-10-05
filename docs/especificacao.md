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

#### Fluxo Principal:
1. O usuário acessa a plataforma Senectus e clica em “Conectar”.
2. O usuário preenche as suas informações.
3. O sistema verifica se o usuário possui conta na plataforma.
4. O sistema autoriza o acesso da plataforma.

#### Fluxo Alternativo (1a):
1. O usuário acessa a plataforma Senectus e clica em “Conectar”.
2. O sistema verifica se o usuário possui conta na plataforma.
3. O usuário não possui uma conta cadastrada, então o sistema redireciona o usuário para a página de “Cadastrar usuário”

#### Pós-condições: O usuário se conectou com sucesso na plataforma.

<br>

***

| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU02 | Desconectar da plataforma | O sistema deve permitir que usuários se desconectem da plataforma em qualquer momento. | Profissional da Saúde ou Idoso |

#### Pré-condições: O usuário deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O usuário navega até a página de configurações.
2. O usuário clica em "Desconectar".
3. O sistema desconecta o usuário e redireciona para a página inicial na plataforma Senectus.

#### Pós-condições: O usuário foi desconectado da plataforma e não poderá acessar até o próximo login.

<br>

***
| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU03 | Gerenciar perfil de idoso | O sistema deve permitir que o idoso crie, edite, leia e exclua seu perfil | Idoso |

#### Fluxo Principal:
1. O idoso requisita a manipulação de seu perfil.
2. O sistema apresenta as seguintes operações disponíveis: cadastrar, conectar, editar, visualizar e excluir seu perfil.
3. O idoso seleciona uma das operações: cadastrar, conectar, visualizar, editar e excluir.
4. Se o idoso deseja continuar com suas operações de gerenciamento de seu perfil, o caso de uso retorna para o passo 2, caso contrário o caso de uso se encerra aqui.

#### Fluxo Alternativo (4a): Cadastro
1. O idoso requisita o cadastro de seu perfil.
2. O sistema retorna um formulário com os seguintes campos: nome, email e senha.
3. O idoso preenche suas informações no formulário e confirma envio.
4. O sistema validas as informações, caso sejam válidas ele deve salvar a conta do usuário, caso contrário ele deve disparar uma mensagem informando que algum campo foi preenchido incorretamente.

#### Fluxo Alternativo (4b): Conectar
1. O idoso requisita o login da sua conta.
2. O sistema retorna um formulário com os campos de email e senha.
3. O idoso preenche formulário e o envia.
4. O sistema válida as informações, caso as credenciais estejam corretas ele autoriza o usuário a fazer o uso da plataforma, caso contrário ele retorna uma mensagem informando que as suas credenciais estão incorretas.

#### Fluxo Alternativo (4c): Leitura
1. O idoso opta por visualizar as informações de seu perfil.
2. O sistema retorna todas as informações cadastradas na sua conta.

#### Fluxo Alternativo (4d): Edição
1. O idoso requisita a edição de seu perfil.
2. O sistema verifica se o idoso já está conectado na plataforma, caso esteja, ele retorna um formulário contendo os campos de nome de usuário, email (não editável) e sua localização, caso o idoso não esteja autenticado corretamente na plataforma o sistema redireciona o usuário para a tela de login para permitir que o usuário se conecte e encerra o fluxo de edição.
3. O idoso insere suas informações ou altera aquelas que já foram inseridas anteriormente e confirma ação.
4. O sistema valida informações, caso estejam corretas ele realiza as alterações com sucesso na sua conta, caso contrário ele retorna uma mensagem informando que algum campo está preenchido incorretamente.

#### Fluxo Alternativo (4e): Exclusão
1. O idoso requisita a exclusão de seu perfil.
2. O sistema solicita a confirmação por meio de um modal.
3. O idoso confirma ação.
4. O sistema realiza a exclusão permanente da conta do idoso.

#### Pós-condições: O usuário deve ser capaz de cadastrar, conectar, editar, excluir ou ter suas informações exibidas em sua tela.

<br>

***
| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU04 | Gerenciar perfil de profissional | O sistema deve permitir que o profissional crie, edite, leia e exclua seu perfil, podendo manipular seus serviços ofertados, preços cobrados e sua região de atuação | Profissional da saúde |

#### Fluxo Principal:
1. O profissional requisita a manipulação de seu perfil.
2. O sistema apresenta as seguintes operações disponíveis: cadastrar, conectar, editar, visualizar e excluir seu perfil.
3. O profissional seleciona uma das operações: cadastrar, conectar, visualizar, editar e excluir.
4. Se o profissional deseja continuar com suas operações de gerenciamento de seu perfil, o caso de uso retorna para o passo 2, caso contrário o caso de uso se encerra aqui.

#### Fluxo Alternativo (4a): Cadastro
1. O profissional requisita o cadastro de seu perfil.
2. O sistema retorna um formulário com os seguintes campos: nome, email e senha.
3. O profissional preenche suas informações no formulário e confirma envio.
4. O sistema validas as informações, caso sejam válidas ele deve salvar a conta do usuário, caso contrário ele deve disparar uma mensagem informando que algum campo foi preenchido incorretamente.

#### Fluxo Alternativo (4a): Conectar
1. O profissional requisita o login da sua conta.
2. O sistema retorna um formulário com os campos de email e senha.
3. O profissional preenche formulário e o envia.
4. O sistema válida as informações, caso as credenciais estejam corretas ele autoriza o usuário a fazer o uso da plataforma, caso contrário ele retorna uma mensagem informando que as suas credenciais estão incorretas.

#### Fluxo Alternativo (4c): Leitura
1. O profissional opta por visualizar as informações de seu perfil.
2. O sistema retorna todas as informações cadastradas na sua conta.

#### Fluxo Alternativo (4d): Edição
1. O profissional requisita a edição de seu perfil.
2. O sistema verifica se o profissional já está conectado na plataforma, caso esteja, ele retorna um formulário contendo os campos de serviços prestados e seus respectivos preços, nome de usuário, email (não editável) e localização, caso o profissional não esteja autenticado corretamente na plataforma o sistema redireciona o usuário para a tela de login para permitir que o usuário se conecte e encerra o fluxo de edição.
3. O profissional insire suas informações ou altera aquelas que já foram inseridas anteriormente e confirma ação.
4. O sistema valida informações, caso estejam corretas ele realiza as alterações com sucesso na sua conta, caso contrário ele retorna uma mensagem informando que algum campo está preenchido incorretamente.

#### Fluxo Alternativo (4e): Exclusão
1. O profissional requisita a exclusão de seu perfil.
2. O sistema solicita a confirmação por meio de um modal.
3. O profissional confirma ação.
4. O sistema realiza a exclusão permanente da conta do profissional.

#### Pós-condições: O usuário deve ser capaz de cadastrar, conectar, editar, excluir ou ter suas informações exibidas em sua tela.

<br>
***

| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU05 | Pesquisar por exercícios | O sistema deve permitir que usuários sejam capazes de pesquisar por exercícios | Profissional da Saúde ou Idoso |

#### Pré-condições: O usuário deve estar autenticado na plataforma

#### Fluxo Principal:
1. O usuário acessa a seção de biblioteca de exercícios na aba de plano de treino.
2. O usuário seleciona categória de exercícios.
3. O usuário seleciona um exercício.
4. O sistema exibe informações instrucionais do exercício.

#### Fluxo Alternativo (5a):
1. O usuário seleciona a aba de plano de treino.
2. O sistema exibe um calendário de exercícios.
3. O usuário seleciona um dos exercícios do dia.
4. O sistema exibe informações instrucionais do exercício.

#### Pós-condições: O usuário deve ser capaz de visualizar um exercício com sucesso

<br>

***

| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU06 | Gerenciar plano de treino | O sistema deve permitir que o profissional crie, atualize, leia e exclua os planos de treino dos seus pacientes. | Profissional da saúde |

#### Pré-condições: O profissional da saúde deve estar autenticado na plataforma

#### Fluxo Principal:
1. O profissional requisita a manipulação de seus planos de treino.
2. O sistema apresenta as seguintes operações disponíveis: criar, editar, visualizar e excluir planos de treino.
3. O profissional seleciona uma das operações: visualizar, criar, editar e excluir.
4. Se o profissional deseja continuar com suas operações de gerenciamento de planos de treino, o caso de uso retorna para o passo 2, caso contrário o caso de uso se encerra aqui.

#### Fluxo Alternativo (6a): Leitura
1. O profissional acessa a aba de planos de treino e opta por pesquisar por um plano de treino.
2. Se já existir planos de treino, o sistema retorna uma lista de planos de treino criados ou editados recentemente com uma barra de pesquisa, caso não exista um plano de treino o sistema encerra o fluxo de leitura solicitando a criação de um plano.
3. O profissional preenche a barra de pesquisa com o nome do cliente.
4. Se o sistema encontrar algum cliente com o nome similar ele retorna o plano de treino vinculado a ele, caso contrário o sistema retorna uma mensagem informando que nenhum cliente foi encontrado com um plano de treino vinculado.

#### Fluxo Alternativo (6b): Criação
1. O profissional requisita a criação de um novo plano de treino.
2. O sistema retorna um formulário para o profissional preencher, contendo o cliente que vai usar o plano, os exercícios que o plano deve conter e os dias do mês que cada exercício deve ser praticado.
3. O profissional preenche o formulário e confirma envio.
4. O sistema valida as informações, caso elas estejam corretas ele salva o plano de treino na base de dados, caso contrário, ele retorna um erro informando que algum campo foi preenchido incorretamente.

#### Fluxo Alternativo (6c): Edição
1. O profissional seleciona um cliente com seu respectivo plano de treino e requisita alterações.
2. O sistema retorna um formulário para o profissional preencher, contendo os seguintes campos: cliente que vai usar o plano, os exercícios que o plano deve conter e os dias do mês que cada exercício deve ser praticado. Porém, os mesmos já estão preenchidos com suas informações antigas e disponíveis para alterações.
3. O usuário confirma as alterações pelo formulário.
4. O sistema valida as informações, caso elas estejam corretas ele salva as alterações do plano de treino na base de dados, caso contrário, ele retorna um erro informando que algum campo foi preenchido incorretamente.

#### Fluxo Alternativo (6d): Exclusão
1. O profissional seleciona um cliente com seu respectivo plano de treino e requisita a exclusão do mesmo.
2. O sistema retorna um modal de confirmação de ação.
3. O profissional confirma ação.
4. O sistema exclui o plano de treino do cliente da base de dados.

#### Pós-condições: O usuário deve realizar a criação, edição, exclusão ou deve ter seus planos de treinos visualizados em sua tela.

<br>

***

| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU07 | Pesquisar Profissional | Permitir que o idoso pesquise por profissionais da saúde. | Idoso |

#### Pré-condições: O usuário deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O idoso acessa a aba de pesquisa de profissionais na aba de consultas.
2. O sistema exibe uma lista de profissionais da saúde cadastrados.
3. O idoso insere informações referente ao profissional que ele busca, como o nome e sua profissão em forma de filtro.
4. O sistema retorna uma lista de profissionais que estão de acordo com as informações fornecidas pelo idoso.
5. O idoso seleciona um profissional e visualiza suas informações de contato e especialidades.


#### Fluxo Alternativo (7a):
1. O idoso acessa a aba de pesquisa de profissionais na aba de consultas.
2. O sistema exibe uma lista de profissionais da saúde cadastrados.
3. O idoso insere informações referente ao profissional que ele busca, como o nome e sua profissão em forma de filtro.
4. O sistema retorna uma mensagem alertando que nenhum profissional foi encontrado.

#### Pós-condições: O usuário deve ter as informações do profissional exibidas em sua tela ou receber uma mensagem informando que nenhum profissional foi encontrado.

<br>

***

| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU08 | Gerenciar Eventos | Permitir que os profissionais criem, editem, visualizem e excluam eventos relacionados à área da saúde. | Profissional da saúde |

#### Pré-condições: O profissional da saúde deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O profissional requisita a manipulação de seus eventos.
2. O sistema apresenta as seguintes operações disponíveis: criar, editar, visualizar e excluir eventos.
3. O profissional seleciona uma das operações: visualizar, criar, editar e excluir.
4. Se o profissional deseja continuar com suas operações de gerenciamento de evento, o caso de uso retorna para o passo 2, caso contrário o caso de uso se encerra aqui.

#### Fluxo Alternativo (10a): Leitura
1. O profissional opta por realizar a leitura de um de seus eventos.
2. O sistema exibe uma lista de eventos criados recentemente com uma barra de pesquisa.
3. O profissional insere o nome do evento já criado.
4. Se algum evento com nome similar já existir ele retorna, caso não exista o sistema informa que nenhum evento foi encontrado.

#### Fluxo Alternativo (10b): Criação
1. O profissional solicita a criação de um evento.
2. O sistema redireciona o usuário para um formulário com os seguintes campos a serem preenchidos: nome do evento, descrição e link de formulário externo a ser vinculado.
3. O profissional preenche todas as informações e confirma o envio.
4. O sistema valida o formulário, caso seja válido ele salva o evento na base de dados, caso contrário o sistema dispara uma mensagem alertando o usuário que algum campo foi preenchido incorretamente.

#### Fluxo Alternativo (10c): Edição
1. O profissional seleciona um de seus eventos e requisita a edição do mesmo.
2. O sistema redireciona o usuário para um formulário com os seguintes campos a serem preenchidos: nome do evento, descrição e link de formulário externo a ser vinculado. Porém, os mesmos já estão preenchidos com suas informações antigas e disponíveis para alterações.
3. O profissional altera as informações e confirma o envio.
4. O sistema valida o formulário, caso seja válido ele salva as alterações do evento na base de dados, caso contrário o sistema dispara uma mensagem alertando o usuário que algum campo foi preenchido incorretamente.

#### Fluxo Alternativo (10d): Exclusão
1. O profissional seleciona um de seus eventos e requisita a exclusão do mesmo.
2. O sistema solicita a confirmação do usuário por meio de um modal.
3. O profissional confirma ação.
4. O sistema realiza a exclusão do evento na base de dados.

#### Pós-condições: O profissional deve criar, editar, excluir ou ter seus eventos exibidos em sua tela com sucesso.

<br>

***

| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU09 | Pesquisar Eventos | Permitir que qualquer usuário pesquise por eventos relacionados à área da saúde. | Profissional da saúde ou Idoso  |

#### Fluxo Principal:
1. O usuário acessa a seção de eventos e opta por iniciar a pesquisa de um evento.
2. O sistema exibe uma lista de eventos cadastrados com uma barra de pesquisa a ser preenchida.
3. O usuário insere informações referente ao evento que deseja pesquisar.
4. O sistema retorna uma lista de eventos que estão de acordo com as informações fornecidas pelo usuário.
5. O usuário seleciona um evento e visualiza suas informações.


#### Fluxo Alternativo (9a):
1. O usuário acessa a seção de eventos e opta por iniciar a pesquisa de um evento.
2. O sistema exibe uma lista de eventos cadastrados.
3. O usuário insere informações referente ao evento que deseja pesquisar.
4. O sistema retorna uma mensagem alertando que nenhum evento foi encontrado.

#### Pós-condições: O usuário deve ter um evento público exibido em sua tela ou uma mensagem alertando que nenhum evento foi encontrada.

<br>

***
| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU10 | Gerenciar Postagens | Permitir que os profissionais criem, editem, visualizem e excluam suas postagens no blog. | Profissional da Saúde |

#### Pré-condições: O profissional da saúde deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O profissional requisita a manipulação de suas postagens em seu blog.
2. O sistema apresenta as seguintes operações disponíveis: criar, editar, visualizar e excluir postagens de seu blog.
3. O profissional seleciona uma das operações: visualizar, criar, editar e excluir.
4. Se o profissional deseja continuar com suas operações de gerenciamento de blog, o caso de uso retorna para o passo 2, caso contrário o caso de uso se encerra aqui.

#### Fluxo Alternativo (10a): Leitura
1. O profissional opta por realizar a leitura de uma de suas postagens.
2. O sistema exibe uma lista de postagens criadas recentemente com uma barra de pesquisa.
3. O profissional insere o nome da postagem já criada.
4. Se alguma postagem com nome similar já existir ele retorna, caso não exista o sistema informa que nenhuma postagem foi encontrada.

#### Fluxo Alternativo (10b): Criação
1. O profissional solicita a criação de uma postagem em seu blog.
2. O sistema redireciona o usuário para um formulário com os seguintes campos a serem preenchidos: nome da postagem, descrição curta e o corpo da postagem.
3. O profissional preenche todas as informações e confirma o envio.
4. O sistema valida o formulário, caso seja válido ele salva a postagem na base de dados, caso contrário o sistema dispara uma mensagem alertando o usuário que algum campo foi preenchido incorretamente.

#### Fluxo Alternativo (10c): Edição
1. O profissional seleciona uma de suas postagens e requisita a edição da mesma.
2. O sistema redireciona o usuário para um formulário com os seguintes campos a serem preenchidos: nome da postagem, descrição curta e o corpo da postagem. Porém, os mesmos já estão preenchidos com suas informações antigas e disponíveis para alterações.
3. O profissional altera as informações e confirma o envio.
4. O sistema valida o formulário, caso seja válido ele salva as alterações da postagem na base de dados, caso contrário o sistema dispara uma mensagem alertando o usuário que algum campo foi preenchido incorretamente.

#### Fluxo Alternativo (10d): Exclusão
1. O profissional seleciona uma de suas postagens e requisita a exclusão da mesma.
2. O sistema solicita a confirmação do usuário por meio de um modal.
3. O profissional confirma ação.
4. O sistema realiza a exclusão da postagem na base de dados.

#### Pós-condições: O profissional deve criar, editar, excluir ou ter suas postagens exibidas em sua tela com sucesso.

<br>

***
| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU11 | Pesquisar Postagens | O sistema deve permitir que qualquer usuário pesquise por postagens no blog. | Profissional da Saúde ou Idoso |

#### Fluxo Principal:
1. O usuário acessa a seção de blog e opta por iniciar a pesquisa de uma postagem.
2. O sistema exibe uma lista de postagens cadastradas com uma barra de pesquisa a ser preenchida.
3. O usuário insere informações referente a postagem que deseja pesquisar.
4. O sistema retorna uma lista de postagens que estão de acordo com as informações fornecidas pelo usuário.
5. O usuário seleciona uma postagem e visualiza suas informações.

#### Fluxo Alternativo (11a):
1. O usuário acessa a seção de blog e opta por iniciar a pesquisa de uma postagem.
2. O sistema exibe uma lista de postagens cadastradas com uma barra de pesquisa a ser preenchida.
3. O usuário insere informações referente a postagem que deseja pesquisar.
4. O sistema retorna uma mensagem alertando que nenhuma postagem foi encontrada.

#### Pós-condições: O usuário deve ter a postagem exibida em sua tela ou deve receber uma mensagem alertando que a postagem não existe.

<br>

***
| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU012 | Comentar em postagens | O sistema deve permitir que qualquer usuário comente nas postagens dos blogs | Idoso ou Profissional da saúde |

#### Pré-condições: O usuário deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O usuário seleciona uma postagem na seção de blog e opta por comentar na mesma.
2. O sistema salva o comentário.

#### Pós-condições: O usuário deve ter seu comentário salvo e vinculado a postagem com sucesso.

<br>

***
| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU13 | Gerenciar Consultas - Profissional | O sistema deve permitir que o profissional da saúde leia, exclua ou aceite solicitações de novas consultas médicas | Profissional |

#### Pré-condições: O usuário deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O profissional acessa a aba de consultas.
2. O sistema exibe todas as operações que podem ser realizadas em suas consultas: leitura de uma consulta, exclusão de uma consulta e aceitação de uma consulta.
3. O profissional seleciona uma das operações: leitura, exclusão ou aceitação
4. Se o profissional deseja continuar com suas operações de gerenciamento, o caso de uso retorna ao passo 2, caso contrário o caso de uso se encerra.

#### Fluxo Alternativo (13a): Leitura
1. O profissional opta por realizar a leitura das consultas e solicitações disponíveis.
2. O sistema exibe as consultas mais recentes em forma de calendário, com duas opções de filtro, sendo elas: "Agendadas" e "Solicitações".
3. O profissional seleciona o filtro que deseja.
4. O sistema retorna um calendário contendo os dias e as respectivas consultas.

#### Fluxo Alternativo (13b): Aceitação:
1. O profissional seleciona uma solicitação de consulta e requisita a aceitação da mesma.
2. O sistema salva as alterações na base de dados.

#### Fluxo Alternativo (13c): Exclusão
1. O profissional seleciona uma solicitação ou uma consulta já aceita e requisita a exclusão da mesma.
2. O sistema solicita a confirmação do profissional por meio de um modal.
3. O profissional confirma ação.
2. O sistema remove o item da lista do usuário e efetiva as alterações na base de dados.

#### Pós-condições: O profissional deve realizar a aceitação, exclusão ou deve ter as consultas exibidas em sua tela com sucesso.

<br>

***
| Caso de uso | Título | Sumário | Ator Primário |
|-------------|--------|---------|---------------|
| CSU14 | Gerenciar Consultas - Idoso | O sistema deve permitir que o usuário não profissional solicite, cancele e leia as consultas de profissionais da saúde | Idoso |

#### Pré-condições: O usuário deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O idoso acessa a aba de consultas.
2. O sistema exibe todas as operações que podem ser realizadas em suas consultas: leitura de uma consulta, cancelamento de uma consulta e solicitação de uma consulta.
3. O idoso seleciona uma das operações: leitura, cancelamento ou solicitação.
4. Se o idoso deseja realizar mais alguma das operações, o caso de uso retorna para o passo 2, caso contrário o fluxo se encerra aqui.

#### Fluxo Alternativo (14a): Leitura
1. O idoso opta por realizar a leitura de uma de suas consultas.
2. O sistema exibe as consultas mais recentes em forma de calendário, com duas opções de filtro, sendo elas: "Agendadas" e "Solicitações".
3. O idoso seleciona o filtro que deseja.
4. O sistema retorna um calendário contendo os dias e as respectivas consultas.

#### Fluxo Alternativo (14b): Solicitação
1. O idoso requisita a solicitação de uma consulta.
2. O sistema redireciona idoso para a seção de busca de profissionais e retorna uma lista de profissionais disponíveis com seus respectivos dias de consultas.
3. O idoso seleciona o profissional e o dia que deseja realizar a consulta.
4. O sistema abre um formulário e solicita o preenchimento das seguintes informações: descrição da solicitação e o tipo de consulta.
5. O idoso preenche as informações e confirma o envio.
6. O sistema valida as informações do formulário e caso estejam corretas ele cria a solicitação na base de dados, caso não esteja, ele dispara uma mensagem alertando que algum campo foi preenchido incorretamente.

#### Fluxo Alternativo (14a): Cancelamento
1. O idoso seleciona uma consulta e requisita seu cancelamento.
2. O sistema solicita a confirmação da ação através de um modal.
3. O idoso confirma ação.
4. O sistema cancela a consulta em questão.

#### Pós-condições: O idoso deve realizar a solicitação, cancelamento ou deve ter as suas consultas exibidas em sua tela.

<br>
***

### 3.4.3 Diagrama de Classes 

#### Figura 2: Diagrama de Classes do Sistema.
 
![dcu](/docs/umbrello/diagrama-de-classe.svg)


### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1 | Usuario | Cadastro de usuário na plataforma. |
| 2 | UsuarioIdoso| Gerenciamento de perfil do idoso. |
| 3 | UsuarioProfissional| Gerenciamento de perfil do profissional. |
| 4 | Postagem | Criação de postagem no blog. |
| 5 | Comentario | Criação de comentário nas postagens. |
| 6 | PlanoDeTreino | Recebimento de plano de exercícios recomendados por profissional. |
| 7 | Exercicio | Visualização de exercícios fisícos. |
| 8 | Consulta | Verificação de consultas agendadas. |
| 8 | Evento | Criação e divulgação de evento. |
| 10 | Servico | Oferecimento de serviço profissional. |
