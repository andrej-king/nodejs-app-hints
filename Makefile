init: docker-down \
	app-clear \
	docker-build docker-up \
	app-init

down: docker-down app-clear
lint: app-lint

# docker run
docker-up:
	docker-compose up -d # --scale node=3

# docker down, remove old containers
docker-down:
	docker-compose down --remove-orphans

# docker down, remove old containers, remove volumes
docker-down-clear:
	docker-compose down -v --remove-orphans

# build docker images
docker-build:
	docker-compose build #--pull

# clear folders
app-clear:
	docker run --rm -v ${PWD}/app:/app -w /app alpine sh -c 'rm -rf .ready'

# run app services
app-init: app-npm-install app-ready

# npm install
app-npm-install:
	docker-compose run --rm node-cli npm install

# The .ready file is needed to start the server only after all packages have been installed
app-ready:
	docker run --rm -v ${PWD}/app:/app -w /app alpine touch .ready

# Check js code style by rules
app-lint:
	docker-compose run --rm node-cli npm run eslint

# Fix js code style by rules
app-lint-fix:
	docker-compose run --rm node-cli npm run eslint-fix
