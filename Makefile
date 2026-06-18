build:
	docker compose up --build -d

start:
	docker compose up -d

start-live:
	docker compose up

stop:
	docker compose down

back:
	docker compose up backend

front:
	docker compose up frontend

migrate:
	docker compose run --rm backend python manage.py migrate

logs:
	docker compose logs -f