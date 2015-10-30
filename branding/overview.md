---
layout: docs
title: Visão geral
group: branding
redirect_from: "/branding/"
---

Manual de uso das cores e tipografia do {{ site.title }} e download de arquivos para designers, tais como fonts de texto ou logotipos de Etecs, Fatecs, Centro Paula Souza e Governo do Estado de São Paulo.
{: .lead}

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Download

É possível baixar o manual completo é através da [página de identidade visual](http://www.centropaulasouza.sp.gov.br/quem-somos/manual-de-identidade-logo-novo/default.asp) do Centro Paula Souza. Tambem disponibilizamos para download arquivos de mídia (logos em .SVG) para designers.

### Identidade Visual do Centro Paula Souza (PDF)

A Identidade Visual estabelece um padrão de aplicação do logotipo do Centro Paula Souza associado ao do Governo do Estado e traz exemplos de aplicação da marca.

*Observe atentamente a data da última atualização dos arquivos, antes de utilizá-los.*

<p><a href="{{ site.download.brand.manual }}" class="btn btn-md btn-outline btn-block">Baixar Manual</a></p>

**Atualizado em setembro de 2015**

### Arquivos de mídia para designers (SVG)

Logos do Centro Paula Souza, Governo de SP, Etecs e Fatecs no formato **.SVG**

<p><a href="{{ site.download.brand.assets }}" class="btn btn-md btn-outline btn-block">Baixar Assets</a></p>


## Tipografia

A [identidade](http://www.centropaulasouza.sp.gov.br/quem-somos/manual-de-identidade-logo-novo/manual/manual-centro-paula-souza-2015-set.pdf) do Centro Paula Souza possui uma família de letras que forma uma linguagem específica. Nenhum outro tipo de letra deve ser usada fora as tipografias principal ou secundária.

### Fonte corpo

A fonte **Verdana** foi utilizada para texto em geral da página.

<blockquote>
<p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
a b c d e f g h i j k l m n o p q r s t u v w x y z<br>
! ? @ # $ % ^ & * () [] {} ; < > / _ - + = ~ , .<br>
0 1 2 3 4 5 6 7 8 9</p>
</blockquote>

### Fonte cabeçalhos

A fonte **Roboto** foi utilizada para cabeçalhos de `<h1>` a `<h6>`. Optamos por essa família de fonte pela performace e ser idêntica a família **Din**, sugerida no manual de identidade visual do Centro Paula Souza.

### Regular (500)

<blockquote>
<h3>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
a b c d e f g h i j k l m n o p q r s t u v w x y z<br>
! ? @ # $ % ^ & * () [] {} ; < > / _ - + = ~ , .<br>
0 1 2 3 4 5 6 7 8 9</h3>
</blockquote>

### Negrito (700)

<blockquote>
<h3><b>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br>
a b c d e f g h i j k l m n o p q r s t u v w x y z<br>
! ? @ # $ % ^ & * () [] {} ; < > / _ - + = ~ , .<br>
0 1 2 3 4 5 6 7 8 9</b></h3>
</blockquote>

## Cores

Além da cor principal, usadas em Fatecs/Etecs/CPS, criamos alguns tons de cinza para complementar a cor principal do layout. Além disso, tambem disponibilizamos cores especiais, destinada para projetos específicos, como sites promocionais.
{: .lead}

### Principal

Padronizamos uma cor principal para sites de Fatecs e Etecs.

Por padrão, já efeitamos o {{site.title}} com esta cor nos principais elementos HTML. 

<div class="thumbnail docs-palette palette-red-bg" style="color:#fff">
  <p>Principal CPS/Etec/Fatec (Vermelho)<br><br><br>#C21D16</p>
</div>

<!-- 
<p><a href="http://colorpeek.com/#C21D16,ffffff,dde4e7,94a9b1,688590,4d6269,283337" class="btn btn-sm btn-default">Consulta colorpeek</a></p>
Principal Fatec (Vermelho) #C21D16
Principal Etec (Vermelho) #C21D16
Principal CPS (Vermelho) #B01116
-->

### Tons cinza

Esses tons são usado em todo o layout, procure não usar outra variação de cinza fora os abaixo.

<div class="row">
    <div class="col-sm-2">
        <p class="small">Branco</p>
        <div class="thumbnail docs-palette palette-branco-bg" style="color:#000">
            <p>branco<br><br><br>#FFFFFF</p>
        </div>        
    </div>
    <div class="col-sm-2">
        <p class="small">Cinza Claro Extra</p>
        <div class="thumbnail docs-palette palette-cinza-claro-extra-bg" style="color:#000">
            <p>cinza-claro-extra<br><br>#DDE4E7</p>
        </div>
    </div>
    <div class="col-sm-2">
        <p class="small">Cinza Claro</p>
        <div class="thumbnail docs-palette palette-cinza-claro-bg" style="color:#000">
            <p>cinza-claro<br><br><br>#94A9B1</p>
        </div>
    </div>
    <div class="col-sm-2">
        <p class="small">Cinza</p>
        <div class="thumbnail docs-palette palette-cinza-bg" style="color:#fff">
            <p>cinza<br><br><br>#688590</p>
        </div>
    </div>
    <div class="col-sm-2">
        <p class="small">Cinza Escuro</p>
        <div class="thumbnail docs-palette palette-cinza-escuro-bg" style="color:#fff">
            <p>cinza-escuro<br><br><br>#4D6269</p>
        </div>
    </div>
    <div class="col-sm-2">
        <p class="small">Cinza Escuro Extra</p>
        <div class="thumbnail docs-palette palette-cinza-escuro-extra-bg" style="color:#fff">
            <p>cinza-escuro-extra<br><br>#283337</p>
        </div>
    </div>
</div>

### Específicas

Use essas cores em projetos específicos, como por exemplo: **sites promocionais** (eventos, vestibular entre outros).

<div class="row">
  {% for c in site.data.brand-colors.themes %}
  <div class="col-sm-2">
    <div class="thumbnail docs-palette palette-{{ c.title }}-bg" style="color:#fff">
      <p>{{ c.title }}<br><br><br>{{ c.rgb }}</p>
    </div>
  </div>
  {% endfor %}
</div>


## Exemplo de uso

Criamos classes CSS de ajuda para as cores. Para cor, use `.palette-X-color` e para fundos `.palette-X-bg`.

{% example html %}
<!-- Principal -->
<p class="palette-red-color">Lorem ipsum dolor sit amet, consectetur...</p>
<p class="palette-red-bg" style="color:#fff">Lorem ipsum dolor sit amet, consectetur...</p>

<!-- Tom Cinza -->
<p class="palette-cinza-escuro-extra-color">Lorem ipsum dolor sit amet, consectetur...</p>
<p class="palette-cinza-escuro-extra-bg" style="color:#fff">Lorem ipsum dolor sit amet, consectetur...</p>

<!-- Especial -->
<p class="palette-blue-color">Lorem ipsum dolor sit amet, consectetur...</p>
<p class="palette-blue-bg" style="color:#fff">Lorem ipsum dolor sit amet, consectetur...</p>
{% endexample %}

### Template tema

Para alterar a cor de um template promocial, use a classe CSS `.site-X` substituindo o `X` pela cor desejada. 

[Veja nosso template tema promocional]({{ "templates/theme" | prepend: site.baseurl | prepend: site.url }}){: .btn .btn-default} 

{% highlight html %}
<body class="site-blue">
  ...

  <header class="cps-page-header">
    <h1>Template Promocional</h1>  
  </header>

  ...
</body>
{% endhighlight %}
