#init: basics

dashboard-api: docker-dashboard-api-down \
	docker-dashboard-api-build \
	app-dashboard-api-init \
	docker-dashboard-api-up

weather-cli: docker-down \
	docker-build \
	app-init \
	docker-weather-cli-up

basics: docker-down \
	app-clear \
	docker-build \
	app-init \
	docker-basics-up

down: docker-down app-clear
lint: app-lint
lint-fix: app-lint-fix

# docker run
docker-up:
	docker-compose up -d # --scale node=3

docker-basics-up:
	docker-compose run --rm node

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


# ------------------- App weather-cli -------------------
docker-weather-cli-up:
	docker-compose -f docker-compose.weather-cli.yml up -d

docker-weather-cli-down:
	docker-compose -f docker-compose.weather-cli.yml down --remove-orphans

docker-weather-cli-build:
	docker-compose -f docker-compose.weather-cli.yml build #--pull

app-weather-cli-init: app-weather-cli-npm-install

app-weather-cli-npm-install:
	docker-compose -f docker-compose.weather-cli.yml run --rm node-cli npm install

app-dashboard-api-lint:
	docker-compose -f docker-compose.weather-cli.yml run --rm node-cli npm run eslint

app-dashboard-api-lint-fix:
	docker-compose -f docker-compose.weather-cli.yml run --rm node-cli npm run eslint-fix


# ------------------- App dashboard api -------------------
docker-dashboard-api-up:
	docker-compose -f docker-compose.dashboard-api.yml up -d

docker-dashboard-api-down:
	docker-compose -f docker-compose.dashboard-api.yml down --remove-orphans

docker-dashboard-api-build:
	docker-compose -f docker-compose.dashboard-api.yml build #--pull

app-dashboard-api-init: app-dashboard-api-npm-install app-dashboard-api-build

app-dashboard-api-npm-install:
	docker-compose -f docker-compose.dashboard-api.yml run --rm node-cli npm install

app-dashboard-api-lint:
	docker-compose -f docker-compose.dashboard-api.yml run --rm node-cli npm run eslint

app-dashboard-api-lint-fix:
	docker-compose -f docker-compose.dashboard-api.yml run --rm node-cli npm run eslint-fix

# typescript compile
app-dashboard-api-build:
	docker-compose -f docker-compose.dashboard-api.yml run --rm node-cli npm run build

app-dashboard-api-performance:
	docker-compose -f docker-compose.dashboard-api.yml run --rm node-cli sh -c "clinic doctor --on-port 'autocannon -m POST localhost:3000/users/join' -- node dist/main.js"
