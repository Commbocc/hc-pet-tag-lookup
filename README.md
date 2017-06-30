# HC Pet Tag Lookup

> A [.NET Core](https://www.microsoft.com/net/core) project

## Development

Add environment variables specific to your OS:

``` bash
export ANIMAL_DB_SERVER = "YOUR_SERVER_NAME"
export ANIMAL_DB_DB = "YOUR_DATABASE"
export ANIMAL_DB_USER = "YOUR_USERNAME"
export ANIMAL_DB_PASS = "YOUR_PASSWORD"
```

``` bash
# install dependencies
dotnet restore

# serve at localhost:5000
dotnet run
```

## [Docker](https://www.docker.com/get-docker)

Create a `docker-compose.yml` file with the YAML code below.

* Replace `8080` with the host's port you'd like the app to be served on.
* Replace the `ANIMAL_DB_*` environment variables.

``` yaml
version: "3"
services:
    web:
        build: .
        ports:
            - "8080:5000"
        environment:
           ASPNETCORE_URLS: "http://*:5000"
           ANIMAL_DB_SERVER: "YOUR_SERVER_NAME"
           ANIMAL_DB_DB: "YOUR_DATABASE"
           ANIMAL_DB_USER: "YOUR_USERNAME"
           ANIMAL_DB_PASS: "YOUR_PASSWORD"
```

Run the following commands to start the app in a [`microsoft/dotnet`](https://hub.docker.com/r/microsoft/dotnet/) Docker container.

``` bash
# install dependencies
dotnet restore

# publish
dotnet publish -c Release -o out

# Docker Compose
docker-compose build
docker-compose up
#> web_1  | Hosting environment: Production
#> web_1  | Content root path: /app
#> web_1  | Now listening on: http://*:5000
#> web_1  | Application started. Press Ctrl+C to shut down.
```

The app is now running on the host machine at `http://localhost:8080`.

## API

[Wiki](https://github.com/Commbocc/hc-pet-tag-lookup/wiki/API)
