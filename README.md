## Development Server

Start the development server on `http://localhost:3000`:

.env
```
DATABASE_URL=postgres://pipecrm:pipecrm@127.0.0.1:5411/pipecrm?sslmode=disable&connection_limit=10&connect_timeout=0&max_idle_connection_lifetime=0&pool_timeout=0&socket_timeout=0
```

```bash
sudo docker run -d --restart always --name postgres-pipecrm-landing -p 5411:5432 -e POSTGRES_USER=pipecrm -e POSTGRES_PASSWORD=pipecrm -e PGDATA=/var/lib/postgresql/data/pgdata -v /var/www/pipecrm-landing/postgresql:/var/lib/postgresql/data postgres:latest
npx prisma generate
npx prisma db push
npm run dev
```
