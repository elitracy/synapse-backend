# Synapse Note
[Synapse Note](synapsenote.com) 

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

Add Database URLs (PostgreSQL) to environment
```bash
# .env 
export DIRECT_URL="postgresql://<USERNAME>:<PASSWORD>@<DATABASE_URL>:5432/postgres?connect_timeout=500"
export DATABASE_URL="postgres://<USERNAME>:<PASSWORD>@<DATABASE_URL>:6543/postgres?pgbouncer=true&connect_timeout=500"
```

Setup Prisma
```bash
npx prisma generate

npx prisma migrate dev --name init

npx prisma seed
```

Start Development Server
```bash
yarn dev
```
