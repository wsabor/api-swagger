# 📌 API de Tarefas com Node.js, Express e Swagger

Este é um projeto simples de API REST para gerenciamento de tarefas, desenvolvido com **Node.js** e **Express**, e documentado com **Swagger (OpenAPI 3.0)**.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- Swagger UI Express
- JSON para documentação OpenAPI

---

## 📥 Instalação e Configuração

### 🔹 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/api-tarefas-swagger.git
cd api-tarefas-swagger
```

### 🔹 2. Instalar Dependências

```bash
npm install
```

### 🔹 3. Iniciar o Servidor

```bash
node server.js
```

O servidor será iniciado em **http://localhost:3000** 🚀

---

## 📖 Documentação da API (Swagger)

Após iniciar o servidor, acesse a documentação interativa do Swagger UI:

🔗 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

Através dessa interface, você pode visualizar e testar os endpoints da API.

---

## 📌 Endpoints da API

### 🔹 **1. Listar todas as tarefas**

**GET** `/tarefas`

- Retorna todas as tarefas cadastradas.

### 🔹 **2. Buscar uma tarefa pelo ID**

**GET** `/tarefas/{id}`

- Retorna uma tarefa específica.

### 🔹 **3. Criar uma nova tarefa**

**POST** `/tarefas`

- Body (JSON):

```json
{
  "titulo": "Aprender Swagger",
  "concluido": false
}
```

### 🔹 **4. Atualizar uma tarefa**

**PUT** `/tarefas/{id}`

- Body (JSON):

```json
{
  "concluido": true
}
```

### 🔹 **5. Remover uma tarefa**

**DELETE** `/tarefas/{id}`

- Remove uma tarefa pelo ID.

---

## 🛠 Testando a API com Postman ou Insomnia

Caso prefira testar manualmente, siga os passos:

1. **Abra o Postman ou Insomnia**
2. Insira os endpoints listados acima.
3. Utilize **JSON** no corpo das requisições POST/PUT.
4. Verifique as respostas da API.

---

## 📜 Licença

Este projeto é open-source e está sob a licença **MIT**.

---

## 👨‍💻 Autor

Desenvolvido por **[Wagner Sabor](https://github.com/wsabor)**  
Dúvidas ou sugestões? Fique à vontade para contribuir! 🚀
