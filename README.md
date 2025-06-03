# 🐾 Pet Resgate - Aplicação Fullstack (React + FastAPI + PostgreSQL)

Este projeto foi desenvolvido com **Create React App** no frontend, **FastAPI (Python)** no backend e **PostgreSQL** como banco de dados.

---

## 📁 Estrutura do Projeto

```
projeto/
├── frontend/    # Interface do usuário em React
├── backend/     # Serviço de API em Python (FastAPI)
```

---

## 📦 Frontend (React)

Acesse o diretório `frontend`:

```bash
cd pet-resgate
```

### Scripts disponíveis

- `npm start`  
  Executa a aplicação React em modo de desenvolvimento. Acesse em [http://localhost:3000](http://localhost:3000).

- `npm test`  
  Inicia os testes em modo interativo.

- `npm run build`  
  Compila o projeto para produção.

- `npm run eject`  
  Remove a configuração padrão. **Atenção: ação irreversível!**

Mais detalhes na [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

---

## ⚙️ Backend (FastAPI - Python)

Acesse o diretório `backend`:

```bash
cd backend
```

### Passos de configuração

1. Crie um ambiente virtual:

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

2. Instale as dependências:

```bash
pip install -r requirements.txt
```

3. Crie um arquivo `.env`:

```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
SECRET_KEY=sua_chave_secreta
DEBUG=True
```

4. Rode as migrações e inicie o servidor:

```bash
alembic upgrade head
uvicorn main:app --reload
```

A API estará disponível em [http://localhost:8000](http://localhost:8000)

---

## 🗃️ Banco de Dados (PostgreSQL)

### Criação do banco

```sql
CREATE DATABASE nome_do_banco;
```

### (Opcional) Criar usuário e permissões

```sql
CREATE USER usuario WITH PASSWORD 'senha';
GRANT ALL PRIVILEGES ON DATABASE nome_do_banco TO usuario;
```

---

## 🧪 Monitoramento e Debug

- **Frontend:** console do navegador.
- **Backend:** logs no terminal.
- **Banco:** ferramentas como **pgAdmin** ou **DBeaver**.

---

## 📚 Informações Acadêmicas

Projeto desenvolvido para a disciplina de **Frameworks Full Stack**.

**Aluno e RA:**

```
Breno Henrique - RA:2303046
Jasmin Shadday - RA:2303142
Nicolly Sampaio - RA: 2302304
Pedro Henrique - RA: 2302841
Sophia Albuquerque - RA: 2302129
Vithor Nelson - RA: 2302465
```

**Professor:** Odair Gabriel da Silva

**Instituição:** Faculdade Impacta
