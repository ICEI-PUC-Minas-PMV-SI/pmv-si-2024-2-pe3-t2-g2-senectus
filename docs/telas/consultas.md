# Módulo de consultas

O módulo de consultas possui a responsabilidade de gerenciar o fluxo de consultas e pós-consultas, como, por exemplo, a gestão dos planos de treinos dos clientes, segue abaixo as telas do protótipo de alta fidelidade do sistema referente a esse módulo:

## Fluxo do usuário comum
<img alt="Tela de inicial do idoso" src="../../.github/img/telas/appointment/consultas-client-home.png" width="800"/>
<img alt="Tela de inicial do idoso com menu aberto" src="../../.github/img/telas/appointment/consultas-client-home-2.png" width="800"/>
<img alt="Tela de seleção do profissional para consulta" src="../../.github/img/telas/appointment/consultas-client-search-professional.png" width="800"/>
<img alt="Tela de preenchimento de formulário" src="../../.github/img/telas/appointment/consultas-client-form.png" width="800"/>

## Fluxo do profissional
### Tela inicial
<img alt="Tela de inicial do profissional" src="../../.github/img/telas/appointment/consultas-professional-home.png" width="800"/>

### Tela de visualização de clientes
<img alt="Tela dos clientes já atendidos" src="../../.github/img/telas/appointment/consultas-professional-clients.png" width="800"/>

### Tela de visualização de consultas
<img alt="Tela das consultas do profissional" src="../../.github/img/telas/appointment/consultas-professional-appointments.png" width="800"/>
<img alt="Tela das consultas do profissional" src="../../.github/img/telas/appointment/consultas-professional-appointments-2.png" width="800"/>
<img alt="Tela das consultas do profissional" src="../../.github/img/telas/appointment/consultas-professional-appointments-3.png" width="800"/>

### Sub-fluxo de criação de planos de treino
<img alt="Tela de seleção de cliente" src="../../.github/img/telas/appointment/consultas-professional-select-client.png" width="800"/>
<img alt="Tela de seleção de exercícios" src="../../.github/img/telas/appointment/consultas-select-exercise.png" width="800"/>
<img alt="Tela de seleção de datas" src="../../.github/img/telas/appointment/consultas-select-dates.png" width="800"/>
<img alt="Tela de confirmação de criação de plano de treino" src="../../.github/img/telas/appointment/consultas-confirm-action.png" width="800"/>
<img alt="Tela de confirmação de criação de plano de treino com menu aberto" src="../../.github/img/telas/appointment/consultas-confirm-action-2.png" width="800"/>

<br/>
<br/>

> Um ponto importante de se notar é que a edição destes planos de treino também utiliza o mesmo fluxo de telas de criação de planos de treino, porém a primeira tela a aparecer é a de confirmar ação e o profissional não pode trocar o cliente.

<br/>
<br/>

Observando os componentes de consultas e pós-consultas, nota-se que assim como os outros componentes, existe uma alta valorização da consistência e reaproveitamento de componentes já existentes para deixar o usuário mais familiarizado com o sistema em si e abordar as regras de ouro do design. Ainda falando das regras de ouro, o sistema também tenta evitar ao máximo erros que podem ser cometidos pelos usuários profissionais, dando a possibilidade do mesmo de reverter as suas ações no processo de criação e edição dos planos de treino.

Por fim, é perceptível a abordagem de princípios Gestalt de simetria e um exemplo disso é a organização dos profissionais presentes na criação de solicitação de consultas.
