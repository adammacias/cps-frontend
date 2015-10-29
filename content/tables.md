---
layout: docs
title: Tabelas
group: content
---

Estilos de tabelas, tal como: linhas listradas, com bordas e outros.
{: .lead}

## Conteúdo

## Exemplo basico

{% example html %}
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Linhas listradas

Use `.table-striped` para adicionar linhas zebradas à qualquer linha da tabela dentro do `<tbody>`.

{% example html %}
<table class="table table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Tabela com bordas

Adicione `.table-bordered` para bordas em todoas os lados da tabela e celulas.

{% example html %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@TwBootstrap</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Linhas com Hover

Adicione  `.table-hover` para habilitar um efeito hover nas linhas da tabela dentro do `<tbody>`.

{% example html %}
<table class="table table-hover">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Tabela condensada

Adicione `.table-condensed` para fazer as tabelas mais comactadas por cortar o padding das celulas na metade.

{% example html %}
<table class="table table-condensed">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Classes contextuais

Use classes contextuais para colorir as linhas da tabela ou células individuais.

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <colgroup>
      <col class="col-xs-1">
      <col class="col-xs-7">
    </colgroup>
    <thead>
      <tr>
        <th>Classe</th>
        <th>Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">
          <code>.active</code>
        </th>
        <td>Aplique a cor de hover para uma linha ou célula em particular</td>
      </tr>
      <tr>
        <th scope="row">
          <code>.success</code>
        </th>
        <td>Indica uma ação bem-sucedida ou positiva</td>
      </tr>
      <tr>
        <th scope="row">
          <code>.info</code>
        </th>
        <td>Indica uma alteração de informação neutra ou ação</td>
      </tr>
      <tr>
        <th scope="row">
          <code>.warning</code>
        </th>
        <td>Indica um aviso de que pode precisar de atenção</td>
      </tr>
      <tr>
        <th scope="row">
          <code>.danger</code>
        </th>
        <td>Indica uma ação perigosa ou potencialmente negativa</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="bd-example" data-example-id="">
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Título da coluna</th>
      <th>Título da coluna</th>
      <th>Título da coluna</th>
    </tr>
  </thead>
  <tbody>
    <tr class="active">
      <th scope="row">1</th>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
    </tr>
    <tr class="success">
      <th scope="row">3</th>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
    </tr>
    <tr class="info">
      <th scope="row">5</th>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
    </tr>
    <tr class="warning">
      <th scope="row">7</th>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
    </tr>
    <tr class="danger">
      <th scope="row">9</th>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
      <td>Conteúdo da coluna</td>
    </tr>
  </tbody>
</table>
</div><!-- /example -->

{% highlight html %}
<!-- On rows -->
<tr class="active">...</tr>
<tr class="success">...</tr>
<tr class="warning">...</tr>
<tr class="danger">...</tr>
<tr class="info">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="active">...</td>
  <td class="success">...</td>
  <td class="warning">...</td>
  <td class="danger">...</td>
  <td class="info">...</td>
</tr>
{% endhighlight %}
