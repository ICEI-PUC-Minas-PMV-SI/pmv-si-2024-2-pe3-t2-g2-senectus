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
| RF003 | Gerenciar perfil de usuário | O sistema deve permitir que o usuário crie, edite, leia e exclua seu perfil |
| RF004 | Pesquisar por exercícios | O sistema deve permitir que usuários sejam capazes de pesquisar por exercícios |
| RF005 | Gerenciar plano de treino | O sistema deve permitir que o usuário não profissional crie, atualize, leia e exclua seus planos de treino |
| RF006 | Realizar avaliação prévia | O sistema deve permitir que o usuário não profissional realize uma avaliação prévia por formulário para saber qual o plano de treino mais indicado |
| RF007 | Pesquisar profissional | O sistema deve ser capaz de permitir que o usuário pesquise por profissionais da saúde |
| RF008 | Gerenciar eventos | O sistema deve permitir que os profissionais criem, atualizem, leiam e excluam seus eventos relacionados a área da saúde |
| RF009 | Pesquisar eventos | O sistema deve permitir que qualquer usuário pesquise por eventos relacionados a área da saúde |
| RF010 | Gerenciar postagens | O sistema deve permitir que o profissional crie, edite, exclua e leias as suas postagens de seu blog |
| RF011 | Pesquisar postagens | O sistema deve permitir que qualquer usuário pesquise as postagens dos blogs |

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
Como observado no diagrama de casos de uso da Figura 1, a secretária poderá gerenciar as matrículas e professores no sistema, enquanto o coordenador, além dessas funções, poderá gerenciar os cursos de aperfeiçoamento.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![dcu](/docs/umbrello/use-case.svg)
 
### 3.4.2 Descrições de Casos de Uso

| Caso de uso | Título | Sumário | Ator Primário | Ator Secundário |
|-------------|--------|---------|---------------|-----------------|
| CSU01 | Conectar na plataforma | O sistema deve permitir que usuários se conectem na plataforma. | Profissional da Saúde e Idoso | Sistema |

#### Pré-condições: O usuário não deve estar logado.

#### Fluxo Principal:
1. O usuário acessa a plataforma Senectus e clica em “Conectar”.
2. O usuário preenche as suas informações.
3. O sistema verifica se o usuário possui conta na plataforma.
4. O sistema redireciona o usuário para a biblioteca de exercícios com o seu perfil já logado na plataforma.

#### Fluxo Alternativo (1a):
1. O usuário acessa a plataforma Senectus e clica em “Conectar”.
2. O sistema verifica se o usuário possui conta na plataforma.
3. O usuário não possui uma conta cadastrada, então o sistema redireciona o usuário para a página de “Cadastrar usuário ”

#### Pós-condições: O usuário foi cadastrado com sucesso e está disponível para utilizar a  plataforma.

***

| Caso de uso | Título | Sumário | Ator Primário | Ator Secundário |
|-------------|--------|---------|---------------|-----------------|
| CSU02 | Desconectar da plataforma | O sistema deve permitir que usuários se desconectem da plataforma em qualquer momento. | Profissional da Saúde | Idoso |

#### Pré-condições:O usuário deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O profissional navega até a seção "Desconectar".
2. O sistema desconecta o usuário e redireciona para a página de Home na plataforma Senectus

#### Pós-condições: O usuário foi desconectado da plataforma e não poderá acessar até o próximo login.

***
| Caso de uso | Título | Sumário | Ator Primário | Ator Secundário |
|-------------|--------|---------|---------------|-----------------|
| CSU03 | Gerenciar perfil de usuário | O sistema deve permitir que usuários se crie, remova ou edite o seu perfil. | Profissional da Saúde e Idoso |  |

#### Fluxo Principal:
1. O Usuário acessa a plataforma e navega até a seção "Cadastrar usuário".
2. O Usuário seleciona a categoria do seu perfil.
3. O sistema solicita as informações do usuário.
4. O Usuário preenche o formulário e envia os dados.
5. O sistema valida as informações e cria o perfil do usuário.


#### Fluxo Alternativo (2a):
1. O usuário acessa a plataforma e realiza o login.
2. O usuário navega até a seção "Perfil" ou "Configurações de Conta".
3. O sistema exibe as informações atuais do perfil.
4. O usuário seleciona a opção "Editar" para modificar os dados desejados.
5. O usuário confirma as alterações e envia os dados atualizados.
6. O sistema valida as novas informações e atualiza o perfil.
7. O usuário visualiza a mensagem de confirmação de que o perfil foi atualizado com sucesso.

#### Fluxo Alternativo (2b)l:
1. O usuário acessa a plataforma e realiza o login.
2. O usuário navega até a seção "Perfil" ou "Configurações de Conta".
3. O sistema exibe as informações atuais do perfil.
4. O usuário seleciona a opção "Deletar Conta" 
5. O sistema solicita uma confirmação para a exclusão da conta.
6. O usuário confirma a exclusão do perfil.
7. O sistema remove o perfil e todos os dados associados.
8. O sistema exibe uma mensagem confirmando que o perfil foi deletado com sucesso, e o usuário é desconectado da plataforma.

#### Pós-condições: O usuário foi cadastrado, editado ou removido com sucesso, conforme a ação escolhida

***

| Caso de uso | Título | Sumário | Ator Primário | Ator Secundário |
|-------------|--------|---------|---------------|-----------------|
| CSU04 | Pesquisar por exercícios | O idoso acessa a plataforma e navega para a “Biblioteca de exercícios”. | Idoso | NDA |

#### Pré-condições: O idoso deve estar autenticado na plataforma, realizado a avaliação física e ter navegado até a biblioteca de exercícios .

#### Fluxo Principal:
1. O idoso faz login na plataforma.
2. O sistema apresenta a opção de "Biblioteca de Exercícios".
3. O idoso seleciona a biblioteca, onde vê uma lista de exercícios por tipo ou dificuldade.

#### Fluxo Alternativo (4a):
1. O idoso faz login na plataforma.
2. O sistema apresenta a opção de "Biblioteca de Exercícios".
3. O idoso seleciona a biblioteca, onde vê uma lista de exercícios por tipo ou dificuldade.
4. O idoso utiliza o filtro para filtrar um exercício específico por tipo ou dificuldade.

#### Pós-condições: O idoso teve acesso e/ou completou os exercícios.

***

| Caso de uso | Título | Sumário | Ator Primário | Ator Secundário |
|-------------|--------|---------|---------------|-----------------|
| CSU05 | Gerenciar plano de treino | O idoso acessa o seu plano de treino semanal e realiza os exercícios. | Idoso | Sistema |

#### Pré-condições: O idoso deve estar autenticado na plataforma, realizado a avaliação física e ter navegado até a biblioteca de exercícios .

#### Fluxo Principal:
1. O idoso faz login na plataforma.
2. O sistema apresenta a opção de "Biblioteca de Exercícios".
3. O idoso seleciona a biblioteca, onde vê uma lista de vídeos.
4. O idoso seleciona o treino de acordo com o seu plano de treinamento.
   
#### Fluxo Alternativo (5a):
1. O idoso faz login na plataforma.
2. O sistema apresenta a opção de "Biblioteca de Exercícios".
3. O idoso seleciona a biblioteca, onde vê uma lista de vídeos.
4. O sistema identifica que o idoso não realizou a avaliação física prévia, bloqueia a realização dos exercícios e leva o idoso a realizar a avaliação física.
5. O idoso preenche o formulário da avaliação física.
6  O sistema classifica o físico do idoso e leva ele para o 1 exercício em seu roteiro de exercícios. 
7. O idoso realiza cada um dos exercícios e os marca como realizado.

#### Pós-condições: O idoso teve acesso e/ou completou os exercícios.

***

| Caso de uso | Título | Sumário | Ator Primário | Ator Secundário |
|-------------|--------|---------|---------------|-----------------|
| CSU06 | Realizar avaliação prévia | O sistema requisita que o idoso realize uma avaliação de seu físico antes de acessar pela primeira vez quaisquer um dos exercícios | Idoso | Sistema |

#### Pré-condições: O usuário deve possuir uma conta na plataforma e não deve ter realizado a avaliação prévia.


#### Fluxo Principal:
1. O idoso faz login na plataforma.
2. O sistema apresenta a opção de "Realizar avaliação física".
3. O idoso preenche seus dados conforme solicitado.
4. O sistema classifica o físico do idoso e leva ele para o 1 exercício em seu roteiro de exercícios. 

#### Pós-condições: O idoso possui um roteiro de treino e pode realizar os exercícios.

***

| Caso de uso | Título | Sumário | Ator Primário | Ator Secundário |
|-------------|--------|---------|---------------|-----------------|
| CSU07 |Pesquisar Profissional|Permitir que o usuário pesquise por profissionais da saúde. | Idoso | Sistema|

#### Pré-condições: O usuário deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O usuário acessa a opção "Pesquisar Profissional".
2. O sistema exibe uma lista de profissionais da saúde cadastrados.
3. O usuário pode aplicar filtros (especialidade, localização, etc.) para refinar a pesquisa.
4. O usuário seleciona um profissional e visualiza suas informações de contato e especialidades.



#### Fluxo Alternativo (3a):
1. Nenhum profissional encontrado
2. O usuário aplica filtros que resultam em nenhum profissional correspondente.  
3. O sistema exibe uma mensagem informando que nenhum profissional foi encontrado com os critérios escolhidos.
4. O usuário pode ajustar os filtros ou realizar uma nova pesquisa.

#### O usuário visualiza as informações de um profissional ou foi informado que nenhum resultado correspondente foi encontrado.

***

| Caso de uso | Título | Sumário | Ator Primário | Ator Secundário |
|-------------|--------|---------|---------------|-----------------|
| CSU08 | Gerenciar Eventos| Permitir que os profissionais criem, editem, visualizem e excluam eventos relacionados à área da saúde. | Profissional da saúde | Sistema|

#### Pré-condições: O profissional da saúde deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O profissional acessa a seção "Eventos" no menu principal.
2. O sistema exibe os eventos atuais criados pelo profissional.
3. O profissional pode criar um novo evento, editar um evento existente, ou excluir um evento.
4. O sistema salva as alterações ou confirma a exclusão do evento.



#### Fluxo Alternativo (4a):
Falha na criação ou atualização
1. O profissional tenta criar um novo evento ou atualizar um existente, mas o sistema detecta informações incompletas ou inconsistentes. 
2. O sistema exibe uma mensagem de erro solicitando que o profissional revise as informações.
3. O profissional pode corrigir os dados e tentar salvar novamente ou cancelar a operação.

#### O evento foi criado, atualizado, ou excluído com sucesso, ou o profissional foi informado sobre a falha e orientado a tentar novamente.

***
| Caso de uso | Título | Sumário | Ator Primário | Ator Secundário |
|-------------|--------|---------|---------------|-----------------|
| CSU09 | Pesquisar Eventos | Permitir que qualquer usuário pesquise por eventos relacionados à área da saúde. | Idoso  | Sistema|

#### Pré-condições: O usuário deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O usuário acessa a opção "Pesquisar Eventos".
2. O sistema exibe uma lista de eventos disponíveis.
3. O usuário pode aplicar filtros para refinar a pesquisa (data, tipo de evento, localidade, etc.).
4. O usuário seleciona um evento e visualiza os detalhes (data, local, descrição).




#### Fluxo Alternativo (3a):
Nenhum evento encontrado:
1. O usuário aplica filtros que resultam em nenhum evento correspondente.
2. O sistema exibe uma lista de eventos disponíveis.
3. O usuário pode aplicar filtros para refinar a pesquisa (data, tipo de evento, localidade, etc.).
4. O usuário seleciona um evento e visualiza os detalhes (data, local, descrição).

#### Pós-condições: O usuário visualiza os detalhes de um evento ou foi informado que nenhum resultado correspondente foi encontrado.

***
| Caso de uso | Título | Sumário | Ator Primário | Ator Secundário |
|-------------|--------|---------|---------------|-----------------|
| CSU10 | Gerenciar Postagens | Permitir que os profissionais criem, editem, visualizem e excluam suas postagens no blog. | Profissional da Saúde | Idoso |

#### Pré-condições: O profissional da saúde deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O profissional acessa a seção "Blog" no menu principal.
2. O sistema exibe as postagens atuais do profissional.
3. O profissional pode criar uma nova postagem, editar uma postagem existente, ou excluir uma postagem.
4. O sistema salva as alterações ou confirma a exclusão da postagem.



#### Fluxo Alternativo (3a):
Falha na criação ou atualização
1. O profissional tenta criar uma nova postagem ou atualizar uma existente, mas o sistema detecta informações incompletas ou inconsistentes. 
2. O sistema exibe uma mensagem de erro solicitando que o profissional revise as informações.
3. O profissional pode corrigir os dados e tentar salvar novamente ou cancelar a operação.

#### Pós-condições: A postagem foi criada, atualizada, ou excluída conforme solicitado.

***
| Caso de uso | Título | Sumário | Ator Primário | Ator Secundário |
|-------------|--------|---------|---------------|-----------------|
| CSU11 | Pesquisar Postagens | O sistema deve permitir que qualquer usuário pesquise por postagens no blog. | Profissional da Saúde | Idoso |

#### Pré-condições: O usuário deve possuir uma conta na plataforma e deve estar logado.

#### Fluxo Principal:
1. O profissional de saúde acessa a plataforma e navega até a seção "Cadastrar usuário".
2. O profissional da saúde seleciona a opção "Quero oferecer cuidado"
3. O sistema solicita informações como nome, área de atuação, certificações e experiência.
4. O profissional preenche o formulário e envia os dados.


#### Fluxo Alternativo (3a):
1. Se nenhuma postagem correspondente aos filtros for encontrada, o sistema exibe uma mensagem informando o usuário.


### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

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
