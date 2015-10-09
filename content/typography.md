---
layout: docs
title: Tipografia
group: content
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

 
## Cabeçalhos

Todos os cabeçalhos HTML, `<h1>` até `<h6>`, estão disponíveis. Classes `.h1` até `.h6` também estão disponíveis.

{% example html %}
<h1>h1. Cabeçalho</h1>
<h2>h2. Cabeçalho</h2>
<h3>h3. Cabeçalho</h3>
<h4>h4. Cabeçalho</h4>
<h5>h5. Cabeçalho</h5>
<h6>h6. Cabeçalho</h6>
{% endexample %}

Crie textos secundários em alguns cabeçalhos com uma tag genérica <code>&lt;small&gt;</code> ou a classe <code>.small</code>.

{% example html %}
<h1>h1. Cabeçalho <small>Texto secundário</small></h1>
<h2>h2. Cabeçalho <small>Texto secundário</small></h2>
<h3>h3. Cabeçalho <small>Texto secundário</small></h3>
<h4>h4. Cabeçalho <small>Texto secundário</small></h4>
<h5>h5. Cabeçalho <small>Texto secundário</small></h5>
<h6>h6. Cabeçalho <small>Texto secundário</small></h6>
{% endexample %}
 

## Texto geral (corpo)

{% example html %}
<p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
{% endexample %}
 

### Texto destacado

Faça um paragrafo em destaque adicionado `.lead`.

{% example html %}
<p class="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>
{% endexample %}
 
## Elementos do texto em linha

### Texto marcado

Para destacar um pedaço de texto devido sua relevancia em outro contexto, use a tag `<mark>`.

{% example html %}
<p>Você pode usar a tag mark para <mark>destacar</mark> um texto.</p>
{% endexample %}

### Texto deletado

Para indicar blocos de texto que foram deletados use a tag `<del>`.

{% example html %}
<p><del>Esta linha de texto é para ser tratada como texto excluído.</del></p>
{% endexample %}

### Texto tachado

Para indicar blocos de texto que não são mais relevantes use a tag `<s>`.

{% example html %}
<p><s>Esta linha de texto é destinada a ser tratada como não precisa.</s></p>
{% endexample %}
 
### Texto inserido

Para indicar adições ao documento use a tag `<isn>`.

{% example html %}
<ins>Essa linha de texto é destinada a ser tratada como uma adição para o documento.</ins>
{% endexample %}

### Texto sublinhado

Para sublinhar o texto use a tag `<u>`.

{% example html %}
<p><u>Essa linha de texto se tornará sublinhada</u></p>
{% endexample %}

Faça o uso de padrões HTML destacando tags com estilos leves.

### Texto pequeno

Para e enfatização em linha ou blocos de texto, use a tag `<small>` para definir texto perto de 85% do manho do pai. Elementos de cabeçalho recebem sua própria `font-size` (tamanho de fonte) para aninhar elementos `<small>`.

Você pode alternativamente usar um elemento em linha com `.small` no lugar de algum `<mark>`.

{% example html %}
<p><small>Essa linha de texto é destinada a ser tratada como impressão fina.</small></p>
{% endexample %}

### Negrito

Para enfatizar um trecho de texto com uma font-weight (peso de fonte) mais pesada.

{% example html %}
<strong>renderiza como texto em negrito</strong>
{% endexample %}

### Itálico

Para enfatizar um trecho de texto em itálico.

{% example html %}
<em>renderizado como texto em itálico</em>
{% endexample %}

#### Elementos alternativos

Sinta-se livre para usar `<b>` e `<i>` em HTML5. `<b>` é destinado para destacar palavras ou frases sem transmitir importância adicional enquanto `<i>` é principalmente para voz, termos técnicos, etc.

## Classes de alinhamento 

Realinhe texto facilmente para componentes com classes de alinhamento de texto.

{% example html %}
<p class="text-left">Texto alinhado à esquerda.</p>
<p class="text-center">Texto alinhado ao centro.</p>
<p class="text-right">Texto alinhado à direita.</p>
<p class="text-justify">Texto justificado.</p>
<p class="text-nowrap">Texto sem alinhamento.</p>
{% endexample %}

## Classes de transformação

Transforme textos em componentes com classes capitalização de texto.

{% example html %}
<p class="text-lowercase">Texto em minúsculo.</p>
<p class="text-uppercase">Texto em maiúsculo.</p>
<p class="text-capitalize">Texto capitalizado.</p>
{% endexample %}

## Abreviações

Implementação estilizada de HTML do elemento `<abbr>` para abreviações e siglas para mostrar a versão expandida em hover. Abreviação com um atributo `title` tem uma clara borda inferior pontilhada e um cursor de ajuda no hover, fornecendo contexto adicional no hover e para usuários de tecnologias assistivas.

### Abreviação básica

{% example html %}
<abbr title="número">num</abbr>
{% endexample %}

### Iniciais

Adicione `.initialism` para uma abreviação com font-size ligeiramente menor.

{% example html %}
<abbr title="HyperText Markup Language" class="initialism">HTML</abbr>
{% endexample %}

## Endereços

Informações de contato presentes para o ancestral mais próximo ou o corpo inteiro de trabalho. Preserve formatação ao finalizar todas as linhas com `<br>`.

{% example html %}
<address>
  <strong>Twitter, Inc.</strong><br>
  1355 Market Street, Suite 900<br>
  San Francisco, CA 94103<br>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>

<address>
  <strong>Nome completo</strong><br>
  <a href="mailto:#">first.last@example.com</a>
</address>
{% endexample %}

## Blockquotes (bloco de citações)

Para blocos de citações de conteúdo de outra fonte dentro de seu documento.

### Blockquote padrão

Envolva `<blockquote>` ao redor de qualquer <abbr title="HyperText Markup Language">HTML</abbr> como uma citação. Para citações diretas, nós recomendamos um `<p>`.

{% example html %}
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
{% endexample %}

### Opções de blockquote

Estilo e mudanças de conteúdo para variações simples em um norma `<blockquote>`.

{% example html %}
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer>Alguém famoso em <cite title="Título da fonte">Título da fonte</cite></footer>
</blockquote>
{% endexample %}

#### Exibição alternativa

Adicione `.blockquote-reverse` para uma caixa de citação (blockquote) com conteúdo alinhado à direita.

{% example html %}
<blockquote class="blockquote-reverse">
  ...
</blockquote>
{% endexample %}


## Listas

### Não-ordenada

Uma lista de itens em que a ordem *não* tem importância expor.

{% example html %}
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
</ul>
{% endexample %}

### Ordenada

Uma lista de itens em que a ordem <em>tem</em> importância em expor.

{% example html %}
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
</ol>
{% endexample %}

### Não estilizado

Remova o padrão da `list-style` (estilo da lista) e margem esquerda na lista de itens (Apenas para filhos imediatos). **Isso apenas se aplica a filhos imediatos na lista de itens**, isso significa que você precisará adicionar a classe para qualquer lista alinhada também.

{% example html %}
<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
</ul>
{% endexample %}

### Em linha

Coloque todos os itens da lista em uma única linha com `display: inline-block;` e algum espaçamento aparente.

{% example html %}
<ul class="list-inline">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
</ul>
{% endexample %}

### Descrição

Uma lista de termos como suas descrições associadas.

{% example html %}
<dl>
  <dt>Lista de descrição</dt>
  <dd>Uma lista de descrição é perfeita para definição de termos.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
</dl>
{% endexample %}
 
#### Descrição horizontal

Faça termos e descrições em `<dl>` alinhando lado a lado. Comece empilhando como padrão `<dl>`s, mas quando a navbar (barra de navegação) aumentar, assim como estes.

{% example html %}
<dl class="dl-horizontal">
  <dt>Listas de descrição</dt>
  <dd>Uma lista descrição é perfeita para definição de termos.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
  <dt>Felis euismod semper eget lacinia</dt>
  <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
</dl>
{% endexample %}
 
#### Auto-truncado
    
Descrição listas horizontais truncarão termos que são que são muito grandes para caber na coluna esquerda com `text-overflow`. Em janelas de exibição mais estreitas, eles mudarão para o layout de empilhamento padrão.
