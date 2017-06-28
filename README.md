# HC Pet Tag Lookup

> A [.NET Core](https://www.microsoft.com/net/core) project

## Connection String Environment Variables

Add environment variables specific to your OS:

``` bash
# ~/.bash_profile (typically of your OS user)
export ANIMAL_DB_SERVER =	"YOUR_SERVER_NAME"
export ANIMAL_DB_DB =		"YOUR_DATABASE"
export ANIMAL_DB_USER =		"YOUR_USERNAME"
export ANIMAL_DB_PASS =		"YOUR_PASSWORD"
```

Then in `./appsettings.json` or `./appsettings.{env.EnvironmentName}.json`:

``` json
"ConnectionStrings": {
  "DefaultConnection": "Server=%ANIMAL_DB_SERVER%;Database=%ANIMAL_DB_DB%;User=%ANIMAL_DB_USER%;Password=%ANIMAL_DB_PASS%;"
},
```

[Connection Strings Documentation](https://docs.microsoft.com/en-us/ef/core/miscellaneous/connection-strings#aspnet-core)

## Build

``` bash
# install dependencies
dotnet restore

# serve at localhost:5000
dotnet run
```

## API

[Wiki](https://github.com/Commbocc/hc-pet-tag-lookup/wiki/API)
