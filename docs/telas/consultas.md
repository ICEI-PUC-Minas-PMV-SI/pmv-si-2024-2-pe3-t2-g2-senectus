# Módulo de consultas

O módulo de consultas possui a responsabilidade de gerenciar o fluxo de consultas e pós-consultas, como, por exemplo, a gestão dos planos de treinos dos clientes, segue abaixo as telas do protótipo de alta fidelidade do sistema referente a esse módulo:

## Fluxo do usuário comum
<img alt="Tela de inicial do idoso" src="../../.github/img/telas/appointment/appointments-home.png" width="600"/>
<img alt="Tela de inicial do idoso com menu aberto" src="../../.github/img/telas/appointment/appointments-home-menu.png" width="800"/>
<img alt="Tela de inicial do idoso com o modal de confirmação de cancelamento aberto" src="../../.github/img/telas/appointment/appointments-home-menu-cancel-modal.png" width="800"/>
<img alt="Tela de seleção do profissional para consulta" src="../../.github/img/telas/appointment/appointments-search.png" width="600"/>
<img alt="Tela de seleção do profissional para consulta mas com conteúdo que não foi encontrado" src="../../.github/img/telas/appointment/appointments-search-not-found.png" width="600"/>
<img alt="Tela de preenchimento de formulário" src="../../.github/img/telas/appointment/appointments-form.png" width="600"/>

## Fluxo do profissional
### Tela inicial
<img alt="Tela de inicial do profissional" src="../../.github/img/telas/appointment/appointments-professional-home.png" width="800"/>
<img alt="Tela de inicial do profissional com menu de ações aberto" src="../../.github/img/telas/appointment/appointments-plan-actions.png" width="800"/>
<img alt="Tela de inicial do profissional com modal de remoção de plano aberto" src="../../.github/img/telas/appointment/appointments-plan-cancel-modal.png" width="800"/>


### Tela de visualização de clientes
<img alt="Tela dos clientes já atendidos" src="../../.github/img/telas/appointment/professional-appointments-clients.png" width="800"/>

### Tela de visualização de consultas
<img alt="Tela das consultas pendentes" src="../../.github/img/telas/appointment/professional-appointments-requests.png" width="600"/>
<img alt="Tela das consultas pendentes com menu aberto" src="../../.github/img/telas/appointment/professional-appointments-menu.png" width="600"/>
<img alt="Tela das consultas aceitas" src="../../.github/img/telas/appointment/professional-appointments-accepted.png" width="600"/>
<img alt="Tela das consultas aceitas com menu aberto" src="../../.github/img/telas/appointment/professional-appointments-accepted-menu.png" width="600"/>
<img alt="Tela das consultas pendentes com modal de cancelamento de consulta aberto" src="../../.github/img/telas/appointment/professional-appointments-cancel-modal.png" width="600"/>

>  O modal de cancelamento se faz presente em ambos os menus laterais de visualização de consultas do profissional.


### Sub-fluxo de criação de planos de treino
<img alt="Tela de seleção de cliente" src="../../.github/img/telas/appointment/appointments-plan-select-client.png" width="800"/>
<img alt="Tela de seleção de exercícios" src="../../.github/img/telas/appointment/appointments-plan-select-exercises.png" width="800"/>
<img alt="Tela de seleção de exercícios" src="../../.github/img/telas/appointment/appointments-plan-select-exercises-error.png" width="800"/>
<img alt="Tela de seleção de datas" src="../../.github/img/telas/appointment/appointments-plan-select-date.png" width="800"/>
<img alt="Tela de seleção de datas" src="../../.github/img/telas/appointment/appointments-plan-select-date-error.png" width="800"/>
<img alt="Tela de confirmação de criação de plano de treino" src="../../.github/img/telas/appointment/appointments-plan-confirm.png" width="800"/>
<img alt="Tela de confirmação de criação de plano de treino com menu aberto" src="../../.github/img/telas/appointment/appointments-plan-confirm-menu.png" width="800"/>
<img alt="Tela de confirmação de criação de plano de treino com menu aberto e modal de seleção de ação aberto" src="../../.github/img/telas/appointment/appointments-plan-confirm-modal-action.png" width="800"/>

> - Ao clicar em "Editar lista" o usuário volta para a selação de exercícios com todos que já foram selecionados nesta lista criada
> - Ao clicar em "Remover lista" o usuário remove todos os exercícios desta lista
> - Ao clicar em "Visualizar exercícios" o usuário vai abrir um menu lateral indicando todos os exercícios selecionados neste horário indicado.

<img alt="Tela de confirmação de criação de plano de treino com menu de exercícios selecionados na lista" src="../../.github/img/telas/appointment/appointments-plan-confirm-exercise-menu-view.png" width="800"/>


<br/>
<br/>

> Um ponto importante de se notar é que a edição destes planos de treino também utiliza o mesmo fluxo de telas de criação de planos de treino, porém a primeira tela a aparecer é a de confirmar ação e o profissional não pode trocar o cliente.

<br/>
<br/>

Ao observar o componente de consulta e pós-consultas, nota-se que o mesmo segue determinadas regras de ouro, assim como os outros componentes, existe uma alta valorização da consistência e reaproveitamento de componentes já existentes para deixar o usuário mais familiarizado com o sistema em si. Além disso, nota-se também a presença de modals de confirmação de ações que não podem facilmente ser revertidas, como o cancelamento de consultas e a remoção de um plano de treino de um cliente. Por fim, ainda falando das regras de ouro, o componente em questão consegue prover uma serie de feedbacks informativos sobre os erros dos usuários, um exemplo deste comportamento pode ser observado nos pop-ups de erros disparados no fluxo de criação de um plano de treino.

Adiante, percebe-se que houve uma seleção de ícones compatíveis com as recomendações ergonômicas, tentando sempre trazer um mapeamento direto, como no card da página inicial do profissional de "Novas consultas", onde o mesmo é representado por um ícone "+" dentro de um quadrado, indicando a adição de um novo plano.

Por último, é perceptível a abordagem de princípios Gestálticos de região comum, como, por exemplo, na pesquisa de um profissional, onde o texto é visivelmente separado tanto da barra de pesquisa e filtro e a própria organização dos cards dos profissionais, que também buscam seguir o princípio de simetria, buscando sempre ocupar lados iguais, tanto no conteúdo interno dos cards quanto quando são agrupados em 8 unidades por página de maneira uniforme e simétrica.
