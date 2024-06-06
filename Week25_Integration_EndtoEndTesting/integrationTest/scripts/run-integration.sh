docker compose up -d
echo '🟡 - Waiting for database to be ready...'
./scripts/wait-for-it.sh "postgresql://postgres:admin123@localhost:5433/postgres" -- echo '🟢 - Database is ready!'
bunx prisma migrate dev --name init
bun run test
docker compose down