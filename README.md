# 🚀 UFOPCoders

> Plataforma colaborativa para conexão entre criadores de projetos e colaboradores em busca de experiência e portfólio.

---

## 💡 Ideia Geral do Projeto

O **UFOPCoders** nasceu da necessidade de conectar pessoas com ideias de projetos a outras que desejam ganhar experiência prática, construir portfólio e aprender na prática. A plataforma funciona como um hub de colaboração, onde qualquer pessoa pode publicar uma ideia de projeto e abrir vagas para que outros membros se candidatem e participem.

A participação pode ser **voluntária ou remunerada**, conforme a decisão do criador do projeto, tornando a plataforma flexível tanto para iniciativas open-source e acadêmicas quanto para projetos com algum nível de compensação.

---

## 📋 Descrição Geral do Sistema

O UFOPCoders é uma aplicação web full-stack composta pelas seguintes funcionalidades principais:

### Autenticação e Contas
- Cadastro e login de usuários
- Perfil individual com histórico de projetos criados e participações

### Publicação de Projetos
- Criação de projetos com título, descrição, área de atuação e requisitos
- Definição do tipo de participação: **voluntária** ou **remunerada**
- Gerenciamento de vagas abertas pelo criador do projeto

### Candidatura e Colaboração
- Listagem de projetos disponíveis para outros usuários explorarem
- Sistema de candidatura para participar de projetos de interesse
- Aceite ou recusa de candidatos pelo criador do projeto

### Stack Tecnológica

| Camada | Tecnologia |
|--------|-----------|
| Back-end | Django (Python) |
| Front-end | React (JavaScript) |
| Banco de Dados | Supabase |

---

## 👥 Integrantes da Equipe

| Nome |
|------|
| [Maria Clara Perpetuo](https://github.com/KakaPerpetuo) | 
| [Camila Aparecida](https://github.com/camila-apa)  | 
| [Cecilia Peret](https://github.com/octaviareika) | 
| [Luiz Humberto Fonseca](https://github.com/LuizHumbertoF) |
| [Guilherme Silva](https://github.com/Guilh3rm3SS) |

---

## 📌 Quadro Kanban



🔗 [Acessar Quadro Kanban](https://github.com/users/KakaPerpetuo/projects/2)

---

## 🛠️ Como Rodar o Projeto Localmente

### Pré-requisitos

- [Docker](https://www.docker.com/get-started) instalado
- [Git](https://git-scm.com/) instalado

### 1. Clone o repositório

```bash
git clone https://github.com/KakaPerpetuo/UfopCoders.git
cd UfopCoders
```

### 2. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Abra o `.env` e preencha com as credenciais que estão no grupo (Discord/WhatsApp):

```env
SECRET_KEY=
DEBUG=True
DB_NAME=postgres
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
```

### 3. Suba o projeto

```bash
make build
```

Aguarde o Docker baixar as imagens e instalar as dependências. Quando terminar:

- Frontend: http://localhost:5173
- Backend: http://localhost:8000

### 4. Comandos úteis

| Comando | O que faz |
|---|---|
| `make build` | Builda e sobe tudo (primeira vez) |
| `make start` | Sobe em background |
| `make start-live` | Sobe com logs em tempo real |
| `make stop` | Para tudo |
| `make back` | Sobe só o backend |
| `make front` | Sobe só o frontend |
| `make migrate` | Roda as migrations do banco |
| `make logs` | Mostra logs em tempo real |