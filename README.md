# Synapse Note
[Synapse Note](https://www.synapsenote.com) 

Syanpse note is a Smart-Note platform that allows users to generate concept maps from their notes using artificial intelligence.

## Setup
Clone Repository

```bash
git clone https://github.com/elitracy/synapse-backend
```

Install Dependencies
```bash
yarn install
```

Add Production Database URLs (PostgreSQL) to environment
```bash
# .env.production 
export DIRECT_URL="postgresql://<USERNAME>:<PASSWORD>@<HOSTING_DB_URL>:5432/postgres?connect_timeout=500"
export DATABASE_URL="postgres://<USERNAME>:<PASSWORD>@<HOSTING_DB_URL>:6543/postgres?pgbouncer=true&connect_timeout=500"
```

_(optional)_ Add Testing Database URLs (PostgreSQL) to environment
```bash
# .env.testing
export DIRECT_URL="postgresql://<USERNAME>:<PASSWORD>@<DATABASE_URL>:5432/postgres?connect_timeout=500"
export DATABASE_URL="postgres://<USERNAME>:<PASSWORD>@<DATABASE_URL>:6543/postgres?pgbouncer=true&connect_timeout=500"
```

Add OpenAI API key to environment
```bash
# .env.production 
# .env.testing (optional)
export OPENAI_API_KEY="<APIKEY>"
```

Setup Prisma
```bash
npx prisma generate
```

Setup Testing Database (optional)
```bash
yarn migrate:dev:test
yarn migrate:deploy:test
yarn test
```

Setup Production Database
```bash
yarn migrate:dev:test
yarn migrate:dev:production
yarn migrate:deploy:production
```

Start Development Server
```bash
yarn dev
```
