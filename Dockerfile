# dotnet publish -c Release -o out

# build runtime image
FROM microsoft/dotnet:1.1-runtime
WORKDIR /app
COPY /out .
ENTRYPOINT ["dotnet", "hc-pet-tag-lookup.dll"]
