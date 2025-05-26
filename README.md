# Front-end

# Iniciando com Aplicação Fullstack - Pet Resgate (React + Python + PostgreSQL)

Este projeto foi criado com o Create React App para o frontend, com backend em Python (Flask) e banco de dados PostgreSQL.

## Scripts Disponíveis

Na raiz do projeto, você encontrará duas pastas principais: `frontend/` e `backend/`.

---

## 📦 Frontend (React)

Dentro do diretório `frontend`, você pode executar:

### `npm start`

Executa a aplicação React em modo de desenvolvimento.  
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

A página será recarregada automaticamente ao salvar alterações.  
Você também verá erros de lint no console, se houver.

### `npm test`

Inicia o test runner no modo interativo.  
Veja mais na seção sobre [testes](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Compila o app para produção na pasta `build`.  
O React será empacotado no modo de produção com otimizações de desempenho.

### `npm run eject`

**Atenção: esta é uma operação irreversível. Uma vez feito o eject, não há como voltar atrás!**  
Use apenas se quiser controle total sobre as configurações (Webpack, Babel, ESLint, etc).

Mais informações na [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

---

## ⚙️ Backend (Python)

Dentro do diretório `backend`, siga os passos abaixo:

### 1. Crie um ambiente virtual:

```bash
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
```

2. Instale as dependências:

```bash
pip install -r requirements.txt
```
3. Configure o arquivo .env com os dados do banco:
```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
SECRET_KEY=sua_chave_secreta
DEBUG=True
```
4. Execute as migrações e inicie o servidor:
```bash
alembic upgrade head
flask run
```
O backend estará disponível em http://localhost:8000


(Opcional) Crie um usuário e dê permissões:

```sql
CREATE USER usuario WITH PASSWORD 'senha';
GRANT ALL PRIVILEGES ON DATABASE nome_do_banco TO usuario;
```

## 🔍 Monitoramento e Debug
Frontend: erros podem ser visualizados no console do navegador.

Backend: logs são exibidos no terminal durante a execução.

Banco de Dados: pode ser monitorado usando ferramentas como pgAdmin ou DBeaver.

---

## 👨‍🏫 Projeto Acadêmico

Este projeto foi desenvolvido como parte da disciplina de Desenvolvimento Fullstack.

### Equipe:

Breno Henrique - RA:2303046

Jasmin Shadday - RA:2303142

Nicolly Sampaio - RA: 2302304

Pedro Henrique - RA: 2302841

Sophia Albuquerque - RA: 2302129

Vithor Nelson - RA: 2302465

Professor: Odair Gabriel da Silva

Instituição: Faculdade Impacta
