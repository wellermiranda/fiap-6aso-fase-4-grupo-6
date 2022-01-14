# Grupo 6

- rm340703
- rm340885

# Deploy

## Resources

O deploy dos recursos são feitos manualmente através do [workflow deploy-resources](.github/workflows/deploy-resources.yaml). 

1. Cria uma secret utilizando valores literais que são preenchidas utilizando variáveis de ambiente configuradas no Github.
2. Sobe o banco de dados.
3. Cria uma ImageStream e a tag latest.
4. Faz build da imagem da aplicação
5. Faz push da imagem da aplicação para a ImageStream
6. E por último, sobe o restante da estrutura da aplicação.

## Application

O deploy de uma nova versão da aplicação é feito através do [workflow deploy-app](.github/workflows/deploy-app.yaml) que disparado pelo push na main desse repositório. 