---
layout: docs
title: Figuras
group: content
---

Sempre que você precisar exibir um pedaço de conteúdo como uma imagem de-com uma legenda opcional, considere usar um `<figure>`.

Use a incluídos `.figure` e `.figure-caption` para fornecer alguns estilos de base para o HTML5 elementos `<figure>` e `<figcaption>`. Como um bônus, crianças imagens imediatas são automaticamente responsivo.

{% example html %}
<figure class="figure">
  <img src="http://placehold.it/400x300" class="img-rounded" alt="...">
  <figcaption class="figure-caption">Uma legenda abaixo da imagem.</figcaption>
</figure>
{% endexample %}

Alinhar legenda da figura é fácil com o nosso [text utilities]({{ site.baseurl }}/components/utilities/#text-alignment).

{% example html %}
<figure class="figure">
  <img src="http://placehold.it/400x300" class="img-rounded" alt="...">
  <figcaption class="figure-caption text-right">Uma legenda abaixo da imagem.</figcaption>
</figure>
{% endexample %}
