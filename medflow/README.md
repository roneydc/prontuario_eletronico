medflow/
│
├── public/
│   │
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   └── logo/
│   │
│   ├── uploads/
│   │   ├── pacientes/
│   │   └── exames/
│   │
│   └── favicon.ico
│
├── src/
│   │
│   ├── pages/
│   │   ├── dashboard/
│   │   │   ├── dashboard.html
│   │   │   ├── dashboard.css
│   │   │   └── dashboard.js
│   │   │
│   │   ├── pacientes/
│   │   │   ├── pacientes.html
│   │   │   ├── pacientes.css
│   │   │   └── pacientes.js
│   │   │
│   │   ├── atendimentos/
│   │   │   ├── atendimentos.html
│   │   │   ├── atendimentos.css
│   │   │   └── atendimentos.js
│   │   │
│   │   ├── prontuarios/
│   │   │   ├── prontuarios.html
│   │   │   ├── prontuarios.css
│   │   │   └── prontuarios.js
│   │   │
│   │   ├── relatorios/
│   │   │   ├── relatorios.html
│   │   │   ├── relatorios.css
│   │   │   └── relatorios.js
│   │   │
│   │   └── configuracoes/
│   │       ├── configuracoes.html
│   │       ├── configuracoes.css
│   │       └── configuracoes.js
│   │
│   ├── components/
│   │   ├── sidebar/
│   │   │   ├── sidebar.html
│   │   │   ├── sidebar.css
│   │   │   └── sidebar.js
│   │   │
│   │   ├── topbar/
│   │   ├── cards/
│   │   ├── modal/
│   │   ├── tables/
│   │   └── forms/
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   ├── reset.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── routes.js
│   │   ├── storage.js
│   │   ├── utils.js
│   │   └── validations.js
│   │
│   └── data/
│       ├── pacientes.json
│       ├── atendimentos.json
│       └── configuracoes.json
│
├── .gitignore
├── README.md
├── vercel.json
├── package.json
└── index.html





E agora temos uma definição muito boa da stack:

* Frontend: HTML + CSS + JS
* Banco: [Supabase](https://supabase.com?utm_source=chatgpt.com)
* Hospedagem: [Vercel](https://vercel.com?utm_source=chatgpt.com)
* Versionamento: [GitHub](https://github.com?utm_source=chatgpt.com)




Agora vamos separar:

### dashboard.html

### dashboard.css

### dashboard.js


---

# — Criar o GitHub


```bash id="w6h8kj"
git init
git add .
git commit -m "estrutura inicial do projeto"
```

Depois:

* criar repositório
* conectar
* subir projeto

---

# — Deploy inicial na Vercel

Mesmo sem backend.

Só para:

* aprender deploy
* testar domínio
* já ter portfólio online

---

# — Criar Supabase


## tabela pacientes

```sql id="x0br68"
create table pacientes (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  telefone text,
  nascimento date,
  observacoes text,
  created_at timestamp default now()
);
```

---

# — Conectar frontend ao Supabase

A primeira funcionalidade REAL do sistema será:

# cadastrar paciente


Fluxo:

```txt id="ggquy5"
formulário → salvar no Supabase → listar pacientes
```

---

# — CRUD completo


* editar
* excluir
* buscar
* listar

---

# — Evolução clínica


## tabela atendimentos

Relacionada ao paciente.

---

# — PDF


---

Ainda NÃO:

* login
* autenticação
* multiusuário
* permissões
* agenda
* IA
* gráficos complexos

Primeiro:
fazer o núcleo funcionar MUITO bem.

---

# Arquitetura 


HTML/CSS/JS:

---

