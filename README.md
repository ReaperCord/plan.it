# Plan.it

Plan.it é um aplicativo web simples e intuitivo para gerenciar tarefas diárias. Este projeto foi desenvolvido como parte de um trabalho acadêmico na faculdade durante o semestre passado, sendo realizado de forma colaborativa por um grupo de quatro pessoas. A aplicação permite que os usuários adicionem, visualizem, editem e excluam tarefas facilmente.

## Tecnologias Utilizadas
- **HTML**
- **CSS**
- **JavaScript**
- **PHP**
- **PostgreSQL**

## Funcionalidades (CRUD)
O Plan.it implementa todas as funções básicas de um sistema CRUD:
- **Create (Criar):** Permite adicionar novas tarefas com título, descrição e data de conclusão esperada.
- **Read (Ler):** Exibe a lista de tarefas cadastradas de forma organizada.
- **Update (Atualizar):** Permite editar tarefas existentes, modificando qualquer um dos campos informados.
- **Delete (Excluir):** Possibilita a exclusão de tarefas de forma prática e rápida.

## Colaboração e Liderança
Este projeto foi desenvolvido por um grupo de quatro pessoas, liderado por **Leandro Ribeiro**. Eu desenvolvi o conceito do projeto e utilizei-o como base para a monitoria dos outros membros, orientando o desenvolvimento e garantindo que o trabalho estivesse alinhado com os objetivos propostos. Minhas responsabilidades incluíram:
- Desenvolvimento do conceito e estrutura do projeto.
- Divisão de tarefas entre os membros do grupo, garantindo que cada um tivesse um papel claro e produtivo no desenvolvimento do projeto.
- Monitoria contínua, tirando dúvidas e explicando conceitos sempre que necessário.
- Acompanhamento do progresso de cada membro e auxílio na resolução de problemas técnicos.
- Garantia da integração adequada das diferentes partes do projeto para criar um sistema coeso e funcional.

## Estrutura de Pastas
```
plan.it/
├── index.php
├── css/
│   └── style.css
├── js/
│   └── script.js
├── includes/
│   ├── db_connect.php
│   └── functions.php
├── tasks/
│   ├── add_task.php
│   ├── edit_task.php
│   └── delete_task.php
├── sql/
│   └── database_schema.sql
└── README.md
```

## Instalação
1. Clone o repositório para o seu ambiente local:
   ```bash
   git clone https://github.com/ReaperCord/plan.it
   ```
2. Configure o banco de dados PostgreSQL utilizando o arquivo de esquema fornecido (`sql/database_schema.sql`).
3. Configure as credenciais do banco de dados no arquivo de conexão do PHP (`includes/db_connect.php`).
4. Inicie um servidor local para hospedar os arquivos PHP (ex.: XAMPP, WAMP, Laragon).
5. Acesse o aplicativo pelo navegador através do endereço configurado (ex.: `http://localhost/plan.it`).

## Como Contribuir
Se desejar contribuir para este projeto, siga os seguintes passos:
1. Faça um fork do repositório.
2. Crie uma branch com a sua feature (`git checkout -b minha-feature`).
3. Commit as alterações (`git commit -m 'Adiciona minha feature'`).
4. Faça um push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença
Este projeto é de uso acadêmico e livre para uso e modificação.

## Autor
Desenvolvido por **Leandro Ribeiro** durante o curso de Análise e Desenvolvimento de Sistemas na Estácio de Sá.

