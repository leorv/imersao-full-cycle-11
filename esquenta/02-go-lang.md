# go-lang

É uma linguagem que está mexendo no mercado, ficando predominante em diversas empresas.

É uma linguagem back-end.

Fortemente tipada.

Não é orientada a objetos.

## Comandos

`go run main.go` roda o app.

`go build main.go` gera o executável.

`GOOS=windows go build main.go` gera o arquivo binário para o SO Windows.

## Threads

As threads do go são fake.

O sistema operacional tem um Scheduler, que gerencia tudo, ele fala o tempo inteiro "roda isso, roda aquilo".

O go criou seu próprio Scheduler. As threads que o go cria uma thread no sistema operacional e cria subthreads nele, ele gerencia.

Quanto de memória ele utiliza? 2kb.

É muito barato utilizar as threads, e ainda tem mecanismos para evitar race condition.

