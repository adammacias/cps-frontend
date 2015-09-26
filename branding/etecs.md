---
layout: docs
title: Etecs
group: branding
---


Diretrizes que ajudarão a determinar a melhor maneira de usar o logotipo da Etec.
{: .lead}

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Uso geral

É importante seguir os procedimentos descritos, a fim de alcançarmos os objetivos propostos.
{: .lead}

- Por favor, não edite, altere, distorça, altere a cor ou reconfigure o logo.
- Por favor, não tente embelezar nosso logotipo com sombras, padrões, fundos complexos ou joias de ouro elaboradas.

## Logo

Confira recomendações de como utilizar o logotipo.
{: .lead}

### Elenco de cores

Cores variadas do logotipo para determinadas situações.

#### Versão principal

Usado sempre que possível e em fundos mais claros. Use as classes `logo logo-etec`.

{% example html %}
<span class="logo logo-etec">
  <span class="sr-only">Etec</span>
  <p>Escola Técnica Estadual</p>
</span>
{% endexample %}

#### Versão escura

Usado em fundos mais claros. Basta acrescente a classe `logo-dark`.

{% example html %}
<span class="logo logo-etec logo-dark">
  <span class="sr-only">Etec</span>
  <p>Escola Técnica Estadual</p>
</span>
{% endexample %}

#### Versão clara

Usado em fundos mais escuros. Basta acrescente a classe `logo-light`.

{% example html %}
<span class="logo logo-etec logo-light" style="background-color: #283337">
  <span class="sr-only">Etec</span>
  <p>Escola Técnica Estadual</p>
</span>
{% endexample %}

### Aplicação em Fundos

Procure aplicar nosso logotipo em fundos com cores do {{ site.title }}. Confira nossa [tabela de cores]({{ "branding/overview/#cores" | prepend: site.baseurl | prepend: site.url }}).
{: .lead}

#### Versão principal

<div class="row">
    <div class="col-sm-6 text-center">
        <div class="thumbnail palette-branco-bg">
            <span class="logo logo-etec">
              <span class="sr-only">Etec</span>
              <p>Escola Técnica Estadual</p>
            </span>
        </div>
        <p>Fundo Branco</p>
    </div>
    <div class="col-sm-6 text-center">
        <div class="thumbnail palette-cinza-claro-extra-bg">
            <span class="logo logo-etec">
              <span class="sr-only">Etec</span>
              <p>Escola Técnica Estadual</p>
            </span>
        </div>
        <p>Fundo Cinza Claro Extra</p>
    </div>
</div>

#### Versão escura

<div class="row">
    <div class="col-sm-6 text-center">
        <div class="thumbnail palette-branco-bg">
            <span class="logo logo-etec logo-dark">
              <span class="sr-only">Etec</span>
              <p>Escola Técnica Estadual</p>
            </span>
        </div>
        <p>Fundo Branco</p>
    </div>
    <div class="col-sm-6 text-center">
        <div class="thumbnail palette-cinza-claro-extra-bg">
            <span class="logo logo-etec logo-dark">
              <span class="sr-only">Etec</span>
              <p>Escola Técnica Estadual</p>
            </span>
        </div>
        <p>Fundo Cinza Claro Extra</p>
    </div>
</div>

#### Versão clara

<div class="row">
    <div class="col-sm-6 text-center">
        <div class="thumbnail palette-cinza-escuro-bg">
            <span class="logo logo-etec logo-light">
              <span class="sr-only">Etec</span>
              <p>Escola Técnica Estadual</p>
            </span>
        </div>
        <p>Fundo Cinza Escuro</p>
    </div>
    <div class="col-sm-6 text-center">
        <div class="thumbnail palette-cinza-escuro-extra-bg">
            <span class="logo logo-etec logo-light">
              <span class="sr-only">Etec</span>
              <p>Escola Técnica Estadual</p>
            </span>
        </div>
        <p>Fundo Cinza Escuro Extra</p>
    </div>
</div>

### Uso específico

Versão do logotipo usada para unidades específicas.

#### Título

Use o atributo `data-title` para exibir o título da unidade.

{% example html %}
<span class="logo logo-etec" data-title="São Paulo">
  <!-- Para leitores de telas -->
  <h1 class="sr-only">Etec São Paulo</h1>
</span>
{% endexample %}

#### Sub-Título

Use o atributo `data-sub-title` para exibir o sub-título da unidade.

{% example html %}
<span class="logo logo-etec" data-title="Santa Ifigênia" data-sub-title="São Paulo">
  <!-- Para leitores de telas -->
  <h1 class="sr-only">Etec Santa Ifigênia - São Paulo</h1>
</span>
{% endexample %}

## Texto

Escreva "Etec" em texto simples em vez de incorporar o logotipo no texto.
{: .lead}

<ul class="list-group">
    <li class="list-group-item">
        <span class="label label-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></span>
        <span class="sr-only">(Correto)</span> Etec
    </li>
    <li class="list-group-item">
        <span class="label label-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></span>
        <span class="sr-only">(Correto)</span> Etecs
    </li>
    <li class="list-group-item">
        <span class="label label-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></span>
        <span class="sr-only">(Errado)</span> ETEC
    </li>
    <li class="list-group-item">
        <span class="label label-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></span>
        <span class="sr-only">(Errado)</span> Etec's
    </li>
</ul>

**Abreviação**

Quando possível, ao usar o nome "Etec", procure incluir junto com `<abbr>`.
{: .lead}

{% example html %}
<abbr title="Escola Técnica Estadual">Etec</abbr>
{% endexample %}

### Uso específico

<p class="lead">Escreva "Etec-XX", substituindo pela sigla da unidade em questão.</p>
<ul class="list-group">
    <li class="list-group-item">
        <span class="label label-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></span>
        <span class="sr-only">(Correto)</span> Etec-SP
    </li>
    <li class="list-group-item">
        <span class="label label-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></span>
        <span class="sr-only">(Errado)</span> Etec-sp
    </li>
    <li class="list-group-item">
        <span class="label label-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></span>
        <span class="sr-only">(Errado)</span> etecsp
    </li>
</ul>

**Abreviação**

Quando possível, ao usar o nome da unidade "Etec-XX", procure incluir junto com `<abbr>`.
{: .lead}

{% example html %}
<abbr title="Escola Técnica de São Paulo">Etec-SP</abbr>
{% endexample %}
