# Docker

docker -> ver ações

docker ps -> ver containers rodando

Fizemos um teste:

`docker run nginx`

Existe uma imagem no docker hub. Neste comando ele vai pegar a latest.

Para o container continuar rodando, ele tem que ter um processo rodando. Veja o COMMAND, no resultado do docker ps.

O container tem uma rede interna no docker. PORTS 80/tcp, por exemplo.

`docker ps -a` mostra containers que estão parados.

## Definindo portas

`docker run -p 8080:80 nginx`

Quando eu acessar a porta 8080 do meu PC, estarei acessando a porta 80 do nginx.

`docker ps`ver, PORTS 0.0.0.0:8080 -> 80/tcp

## Executando um comando no container

`docker exec <nomeDoContainer> ls`, executou aqui o comando ls.

Ao invés do ls, posso executar o `bash`, mas ele vai entrar e sair.

Para usarmos de fato:

`docker exec -t -i <nomeDoContainer> bash`

-t significa continuar conectado com a interface TUI.
-i significa interativo.

Pode rodar um `uname -a`para conferir.

## Sair do container

ctrl + D, para sair do container. Mas ele ainda continua rodando.

`docker stop <id>` para parar o container.
`docker rm <id>` remove o container mesmo se ele estiver rodando. Mata.

## Imutabilidade

Se for executar o container novamente ele virá sem as alterações feitas anteriormente.

A imagem do container é imutável.

`docker run -p 8080:80 -v $(pwd)/www:/usr/share/nginx/html nginx`

-v é o volume. Para conversar com o PC, a pasta www no PC vai substituir a html no container.

## Gerar minha própria imagem

Criar um arquivo Dockerfile, exemplo, dentro do arquivo:

```
FROM nginx:latest
COPY www/index.html /usr/share/nginx/html/index.html
```

Comando:

`docker build -t leonardo/imersao11-nginx:latest .`

leonardo seria o nome de usuário, o ponto no final é o diretório, local do Dockerfile.

`docker push leonardo/imersao11-nginx:latest`

## Docker compose

Se eu tenho várias aplicações, eu teria que ficar chamando container por container. Isso é chato. Por isso existe o docker compose.

Ele consegue criar vários containers num comando só.

docker-compose.yaml

Para executar ele: `docker-compose up -d`

-d é para ele ficar em segundo plano.

