# HC Pet Tag Lookup

> A [RoR](http://guides.rubyonrails.org/getting_started.html) project

## Development

Add environment variables specific to your OS:

``` bash
export ANIMAL_DB_SERVER = "YOUR_SERVER_NAME"
export ANIMAL_DB_DB = "YOUR_DATABASE"
export ANIMAL_DB_USER = "YOUR_USERNAME"
export ANIMAL_DB_PASS = "YOUR_PASSWORD"
export ANIMAL_DB_TABLE = "YOUR_TABLE_NAME"
```

``` bash
# install dependencies
bundle

# serve at localhost:5000
rails s -p 5000
```

## [Docker](https://www.docker.com/get-docker)

Create a `docker-compose.yml` file with the YAML code below.

* Replace `5000` with the host's port you'd like the app to be served on.
* Replace the `ANIMAL_DB_*` environment variables.

``` yaml
version: "3"
services:
    web:
        build: .
        command: rails s -p 3000 -b 0.0.0.0
        ports:
            - "5000:3000"
        environment:
           ANIMAL_DB_SERVER: "YOUR_SERVER_NAME"
           ANIMAL_DB_DB: "YOUR_DATABASE"
           ANIMAL_DB_USER: "YOUR_USERNAME"
           ANIMAL_DB_PASS: "YOUR_PASSWORD"
           ANIMAL_DB_TABLE: "YOUR_TABLE_NAME"
```

Run the following commands to start the app in a [`ruby`](https://store.docker.com/images/ruby) Docker container.

``` bash
# Docker Compose
docker-compose build
docker-compose up
#> web_1  | => Booting Puma
#> web_1  | => Rails 5.0.4 application starting in development on http://localhost:3000
#> web_1  | => Run `rails server -h` for more startup options
#> web_1  | Puma starting in single mode...
#> web_1  | * Version 3.9.1 (ruby 2.4.1-p111), codename: Private Caller
#> web_1  | * Min threads: 5, max threads: 5
#> web_1  | * Environment: development
#> web_1  | * Listening on tcp://localhost:3000
```

The app is now running on the host machine at `http://localhost:5000`.

## API

[Wiki](https://github.com/Commbocc/hc-pet-tag-lookup/wiki/API)
