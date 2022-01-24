init: weather-cli

weather-cli: docker-down \
	app-clear \
	docker-build \
	app-init \
	docker-weather-cli-up \


basics: docker-down \
	app-clear \
	docker-build \
	app-init \
	docker-basics-up \

down: docker-down app-clear
lint: app-lint
lint-fix: app-lint-fix

# docker run
docker-up:
	docker-compose up -d # --scale node=3

docker-basics-up:
	docker-compose run --rm node

docker-weather-cli-up:
	docker-compose run --rm node-weather-cli

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
