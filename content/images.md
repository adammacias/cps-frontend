---
layout: docs
title: Imagens
group: content
---

Estilos de imagens em geral, tal como: no modo responsivo, formatos arredondados e outros.
{: .lead}

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Imagens responsivas

Imagens no {{site.title}} podem ser feitas responsivas amigavelmente através da adição da classe `.img-responsive`. Isso aplica `max-width: 100%;`, `height: auto;` e `display: block;` na imagem para que dimensione de forma agradável ao elemento pai.

Centralize as imagens que usam a classe `.img-responsive`, usando `.center-block` em vez de `.text-center`. <a href="../css/#helper-classes-center">Veja a seção de classes de ajuda</a> para mais detalhes sobre o uso do `.center-block`.

{% example html %}
<img src="http://placehold.it/1200x250" class="img-responsive" alt="Imagem responsiva">
{% endexample %}

## Formas

Adicione classes a um elemento `<img>` para estilizar imagens facilmente em qualquer projeto.

{% example html %}
<img src="http://placehold.it/150x150" alt="..." class="img-rounded">
<img src="http://placehold.it/150x150" alt="..." class="img-circle">
<img src="http://placehold.it/150x150" alt="..." class="img-thumbnail">
{% endexample %}

## Alinhamento

Alinhe imagens com as [classes de ajuda]({{ site.baseurl }}/components/utilities/#floats) ou [classes de alinhamento de texto]({{ site.baseurl }}/components/utilities/#text-alignment).

{% example html %}
<div class="clearfix">
  <img src="http://placehold.it/150x150" alt="..." class="img-rounded pull-left" >
  <img src="http://placehold.it/150x150" alt="..." class="img-rounded pull-right" >
</div>
{% endexample %}

{% example html %}
<img src="http://placehold.it/150x150" alt="..." class="img-rounded center-block" style="display: block;">
{% endexample %}

{% example html %}
<div class="text-center">
  <img src="http://placehold.it/150x150" alt="..." class="img-rounded">
</div>
{% endexample %}


