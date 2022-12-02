# Next JS

Imagina que você está num browser e acessou o http://localhost:3000/ - index.tsx

Vai bater no Node Js, que inclusive, é um servidor com Express (que dá para mudar se quiser).

Ele vai levantar o React usando uma tecnologia embutida no próprio React, chamada de Virtual DOM.

Temos o DOM JavaScript, que manipulamos os elementos html normalmente, pegamos valores, css, etc.

O React tem o DOM dele, independente do DOM do JavaScript. Portanto, não dependemos do browser para fazer o controle da árvore dos elementos.

Ele vai montando os elementos, vai fazendo as transformações, gera esse html no lado do servidor, e pega e devolve ele pra gente.

Sem virtual DOM isso não seria possível, o SSR (Server Side Rendering).

