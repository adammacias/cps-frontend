---
layout: docs
title: Código
group: content
---

Estilos de códigos em geral, tal como: em linha, entrada via teclado, em bloco e outros.
{: .lead}

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Em linha

Empacote trechos de códigos em linha com `<code>`.

{% example html %}
Por exemplo, <code>&lt;section&gt;</code> deve ser empacotado em linha.
{% endexample %}

## Entrada de usuário

Use `<kbd>` para indicar entradas via teclado.

{% example html %}
Para mudar de diretório, digite <kbd>cd</kbd> seguido pelo nome do diretório.<br>
Para editar configurações, pressione <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
{% endexample %}

## Bloco básico

Use `<pre>` para múltiplas linhas de código. Be sure to escape any angle brackets in the code for proper rendering.

{% example html %}
<pre>&lt;p&gt;Texto simples aqui...&lt;/p&gt;</pre>
{% endexample %}

Você pode opcionalmente adicionar a classe `.pre-scrollable`, que irá definir uma altura máxima de 350px e fornecer uma barra de rolagem eixo-y.

## Variáveis

Para indicar variáveis use a tag `<var>`.

{% example html %}
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
{% endexample %}

## Exemplo de saída

Para indicar blocos de saída simples a partir de um programa use a tag `<samp>`.

{% example html %}
<samp>Esse texto é como uma saída simples de um programa de computador</samp>
{% endexample %}
