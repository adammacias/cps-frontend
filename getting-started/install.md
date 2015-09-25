---
layout: docs
title: Instalação
group: getting-started
---

É possivel fazer a instalação do {{ site.title }} (Atualmente na v) de duas maneiras, escolha a que for mais adequada às suas necessidades.
{: .lead}

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Via CDN (Rede de Distribuição de Conteúdo)

Use o {{ site.title }} via CDN (Rede de Distribuição de Conteúdo). Também é possível baixar os arquivos fontes através da nossa [seção download.](#via-download)

Copie e cole o link da folha de estilo dentro da tag `<head>`.

{% highlight html %}
<link rel="stylesheet" href="{{ site.cdn.css }}">
{% endhighlight %}

Adicione nossos plugins JavaScript e jQuery no fim das suas páginas, o lugar correto é antes de fechar a tag `</body>`.

{% highlight html %}
<script src="{{ site.cdn.jquery }}"></script>
<script src="{{ site.cdn.js }}"></script>
{% endhighlight %}

Apenas isso basta para você começar a usufruir o {{ site.title }}.

## Via Download

Faça o download dos arquivos CSS, JavaScript e fonts compilados e minificados, e então, fazer a instalação manualmente.

[Baixar {{ site.title }}]({{ site.download.dist }}){: .btn .btn-lg .btn-outline}

## Fatos importantes

Para usar de maneira correta o {{ site.title }}, é importante que saiba algumas coisas, como:

### HTML5 doctype

{{ site.title }} faz uso de certos elementos HTML e propriedades CSS que <b>requerem</b> o uso do HTML5 doctype. Para garantir a renderização adequada e sensíbilidade ao toque, adicione a meta tag viewport dentro do `<head>`.

{% highlight html %}
<!DOCTYPE html>
<html lang="pt-br">
...
</html>
{% endhighlight %}

### Metatag responsiva

{{ site.title }} é desenvolvido para ser amigável com todos dispositivos móveis desde o início. De fato, isso faz com que o Bootstrap torne-se *Mobile first*. Usamos essa estratégia para diminuir códigos usando CSS media queries.

Para garantir a renderização adequada e sensíbilidade ao toque, adicione a meta tag viewport dentro do `<head>`.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1">
{% endhighlight %}
