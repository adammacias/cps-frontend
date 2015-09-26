---
layout: docs
title: Governo do estado de São Paulo
group: branding
---

Diretrizes que ajudarão a determinar a melhor maneira de usar o logotipo do Governo do estado de São Paulo.
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

Usado sempre que possível e em fundos mais claros. Use as classes `logo logo-governo-sp`.

{% example html %}
<span class="logo logo-governo-sp">
  <span class="sr-only">Governo do estado de São Paulo</span>
</span>
{% endexample %}

#### Versão escura

Usado em fundos mais claros. Basta acrescente a classe `logo-dark`.

{% example html %}
<span class="logo logo-governo-sp logo-dark">
  <span class="sr-only">Governo do estado de São Paulo</span>
</span>
{% endexample %}

#### Versão clara

Usado em fundos mais escuros. Basta acrescente a classe `logo-light`.

{% example html %}
<span class="logo logo-governo-sp logo-light">
  <span class="sr-only">Governo do estado de São Paulo</span>
</span>
{% endexample %}

### Aplicação em Fundos

Procure aplicar nosso logotipo em fundos com cores do {{ site.title }}. Confira nossa [tabela de cores]({{ "branding/overview/#cores" | prepend: site.baseurl | prepend: site.url }}).
{: .lead}

#### Versão principal

<div class="row">
    <div class="col-sm-6 text-center">
        <div class="thumbnail palette-branco-bg">
            <span class="logo logo-governo-sp">
              <span class="sr-only">Governo do estado de São Paulo</span>
            </span>
        </div>
        <p>Fundo Branco</p>
    </div>
    <div class="col-sm-6 text-center">
        <div class="thumbnail palette-cinza-claro-extra-bg">
            <span class="logo logo-governo-sp">
              <span class="sr-only">Governo do estado de São Paulo</span>
            </span>
        </div>
        <p>Fundo Cinza Claro Extra</p>
    </div>
</div>

#### Versão escura

<div class="row">
    <div class="col-sm-6 text-center">
        <div class="thumbnail palette-branco-bg">
            <span class="logo logo-governo-sp logo-dark">
              <span class="sr-only">Governo do estado de São Paulo</span>
            </span>
        </div>
        <p>Fundo Branco</p>
    </div>
    <div class="col-sm-6 text-center">
        <div class="thumbnail palette-cinza-claro-extra-bg">
            <span class="logo logo-governo-sp logo-dark">
              <span class="sr-only">Governo do estado de São Paulo</span>
            </span>
        </div>
        <p>Fundo Cinza Claro Extra</p>
    </div>
</div>

#### Versão clara

<div class="row">
    <div class="col-sm-6 text-center">
        <div class="thumbnail palette-cinza-escuro-bg">
            <span class="logo logo-governo-sp logo-light">
              <span class="sr-only">Governo do estado de São Paulo</span>
            </span>
        </div>
        <p>Fundo Cinza Escuro</p>
    </div>
    <div class="col-sm-6 text-center">
        <div class="thumbnail palette-cinza-escuro-extra-bg">
            <span class="logo logo-governo-sp logo-light">
              <span class="sr-only">Governo do estado de São Paulo</span>
            </span>
        </div>
        <p>Fundo Cinza Escuro Extra</p>
    </div>
</div>

## Texto

Escreva "Governo do estado de São Paulo" em texto simples em vez de incorporar o logotipo no texto.
{: .lead}

<ul class="list-group">
  <li class="list-group-item">
    <span class="label label-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></span>
    <span class="sr-only">(Correto)</span> Governo do estado de São Paulo
  </li>
  <li class="list-group-item">
    <span class="label label-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></span>
    <span class="sr-only">(Errado)</span> Governo Do Estado De são paulo
  </li>
  <li class="list-group-item">
    <span class="label label-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></span>
    <span class="sr-only">(Errado)</span> governo do estado de são Paulo
  </li>
</ul>

**Abreviação**

Caso necessite usar sigla "SP", não deixe de incluir junto com `<abbr>`.
{: .lead}

{% example html %}
Governo do estado de <abbr title="São Paulo">SP</abbr>
{% endexample %}
