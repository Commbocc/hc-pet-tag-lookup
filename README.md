# hc-pet-tag-lookup

> A .NET Core project

## Connection String Environment Variables

Add [environment variables](https://www.google.com/search?q=add+environment+variable) specific to your OS:

``` bash
ANIMAL_DB_SERVER
ANIMAL_DB_DB
ANIMAL_DB_USER
ANIMAL_DB_PASS

# Server=%ANIMAL_DB_SERVER%;Database=%ANIMAL_DB_DB%;User=%ANIMAL_DB_USER%;Password=%ANIMAL_DB_PASS%;
```

## Build

``` bash
# install dependencies
dotnet restore

# serve at localhost:5000
dotnet run
```
