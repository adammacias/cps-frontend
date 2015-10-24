---
layout: docs
title: Template padrão
group: getting-started
---

Introdução a estrutura padrão do {{ site.title }} para começar a trabalhar com [nossos templates modelos]({{ "templates/overview" | prepend: site.baseurl | prepend: site.url }}) disponibilizados com objetivo de atender às suas necessidades.
{: .lead}

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Estrutura Base

Conheça a estrutura base de um arquivo HTML do {{ site.title }}.

{% highlight html %}
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Template Padrão - {{ site.title }}</title>
  <!-- {{ site.title }} CSS -->
  <link rel="stylesheet" href="{{ site.cdn.css }}">
</head>
<body>
  <!-- Cabeçalho -->
  <header class="cps-header">
    ...
  </header>
  <!-- Barra de navegação -->
  <nav class="cps-navbar">
    ...
  </nav>
  <!-- Título da página (Banner) -->
  <header class="cps-banner">
    ...
  </header>
  <!-- Conteúdo da página -->
  <main class="cps-main">
    <div id="content" tabindex="-1">
      ...
    </div>
  </main>
  <!-- Rodapé -->
  <footer class="cps-footer">
    ...
  </footer>
  <!-- jQuery (obrigatório para plugins JavaScript do {{ site.title }}) -->
  <script src="{{ site.cdn.jquery }}"></script>
  <!-- {{ site.title }} JavaScript -->
  <script src="{{ site.cdn.js }}"></script>
</body>
</html>
{% endhighlight %}

## Wireframes

### Template padrão do {{ site.title }}.

![Wireframe Geral]({{ "assets/img/wireframes/padrao-explicativo.png" | prepend: site.baseurl | prepend: site.url }}){: .img-responsive}

### Template com barra lateral do {{ site.title }}.

![Wireframe Geral]({{ "assets/img/wireframes/barra-lateral-explicativo.png" | prepend: site.baseurl | prepend: site.url }}){: .img-responsive}

## Tutorial

Siga o passo a passo de como criar o [template padrão]({{ "templates/page" | prepend: site.baseurl | prepend: site.url }}).

### Passo 1 - Pulo de navegação

É importante usar o link pulo de navegação para fazer sua página o mínimo acessível, saiba mais lendo nosso [guia de boas práticas]({{ "best-practices/#acessibilidade" | prepend: site.baseurl | prepend: site.url }}).

{% highlight html %}
<a id="skippy" class="sr-only sr-only-focusable" href="#content">
  <div class="container">
    <span class="skiplink-text">Pular para o conteúdo</span>
  </div>
</a>
{% endhighlight %}

### Passo 2 - Cabeçalho

O conteúdo do cabeçalho é formado pelo logo da sua instituição (FATEC ou ETEC) e os do Centro Paula Souza e Governo do estado de São Paulo. 

[Veja como utilizar os **cabeçalhos**]({{ "components/headers" | prepend: site.baseurl | prepend: site.url }}).
{: .alert .alert-info}

### Passo 3 - Barra de navegação

A barra de navegação contém os principais links da sua página, como: *Início, Institucional, Cursos, Vestibular, Contato e outros*. 

[Veja como utilizar a **barra de navegação**]({{ "components/navbar" | prepend: site.baseurl | prepend: site.url }}).
{: .alert .alert-info}

### Passo 4 - Título da página (Banner)

É utilizada a tag `<header>` com a class `.cps-banner` para definir o banner onde será exibido o título e descrição da página, nem todas as páginas devem usa-lo, como é caso do [**template home**]({{ "templates/home" | prepend: site.baseurl | prepend: site.url }}), por exemplo.

[Veja como utilizar o **banner**]({{ "components/banner" | prepend: site.baseurl | prepend: site.url }}).
{: .alert .alert-info}

### Passo 5 - Conteúdo da página

É utilizada a tag `<main>` para definir o contéudo da página, normalmente é formado por apenas um `<div id="content">` (Página padrão) ou `<div id="content">` + `<aside class="cps-sidebar">` (Página com barra lateral), mas isso pode variar de acordo com sua necessidade.

#### Página padrão

Não há necessidade de usar a classes `.row` ou `.col-x-x`.

{% highlight html %}
<main class="cps-main">
  <div id="content" tabindex="-1">
    ...
  </div>
</main>
{% endhighlight %}

#### Página com banner (Título)

O banner é usado para mostrar o título e descrição de uma página. Para utilizar, basta acrescentar a tag `<header>` com a classe `.cps-banner` antes do ínicio de **main.cps-main**.

{% highlight html %}
<header class="cps-banner">
  <h1>Título da página</h1>
  <p class="lead">Sub-título da página com descrição...</p>
</header>

<main class="cps-main">
  ...
</main>
{% endhighlight %}

#### Página com barra lateral

São utilizadas as classes `.row` após o **main.cps-main** e `.col-x-x` em **div#content** e **aside#sidebar**.

{% highlight html %}
<main class="cps-main">
  <div class="row">
    <div id="content" class="col-md-9" tabindex="-1">
      ...
    </div>
    <aside id="sidebar" class="col-md-3">
      ...
    </aside>
  </div>
</main>
{% endhighlight %}

### Passo 6 - Rodapé

O rodapé do site é utilizado para mostrar o autor(es) do site e links de redes sociais ou de páginas.

[Veja como utilizar o **rodapé**]({{ "components/footer" | prepend: site.baseurl | prepend: site.url }}).
{: .alert .alert-info}

## Exemplo completo

Copie o código HTML abaixo para começar a trabalhar com nosso [template padrão]({{ "templates/page" | prepend: site.baseurl | prepend: site.url }}) utilizando o {{ site.title }}.

[Veja a **renderização** do código abaixo]({{ "templates/page" | prepend: site.baseurl | prepend: site.url }}).
{: .alert .alert-info}

**Observação:** Foi utilizada a *Fatec Baixada Santista - Rubens Lara* como exemplo.

{% highlight html %}
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Template padrão - {{ site.title }}</title>
    <!-- {{ site.title }} CSS -->
    <link rel="stylesheet" href="{{ site.cdn.css }}">
    <!-- Seu CSS customizado -->
    <link rel="stylesheet" href="assets/css/style.css">    
  </head>
  <body>
    <a id="skippy" class="sr-only sr-only-focusable" href="#content">
      <div class="container">
        <span class="skiplink-text">Pular para o conteúdo</span>
      </div>
    </a>
    <header class="cps-header">
      <div class="container">
        <div class="logo-group">
          <div class="logo-group-item">
            <a class="logo logo-fatec" href="#" data-title="Baixada Santista" data-sub-title="Rubens Lara">
              <h1 class="sr-only">Fatec Baixada Santista - Rubens Lara</h1>
            </a>
          </div>
          <div class="logo-group-item">
            <a class="logo logo-cps" href="http://www.cps.sp.gov.br" title="Portal do Centro Paula Souza" target="_blank">
              <h2 class="sr-only">Centro Paula Souza</h2>
            </a>
          </div>
          <div class="logo-group-item">
            <a class="logo logo-governo-sp" href="http://www.saopaulo.sp.gov.br" title="Portal do Governo do estado de São Paulo" target="_blank">
              <span class="sr-only">Governo do estado de São Paulo</span>
            </a>
          </div>
        </div>
      </div>
    </header>
    <nav class="cps-navbar" data-spy="affix" data-offset-top="140">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapsed" aria-expanded="false" aria-controls="navbar-collapsed">
          <span class="sr-only">Alterar navegação</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand visible-xs" href="#">Fatec-RL</a>
        </div>
        <div id="navbar-collapsed" class="collapse navbar-collapse ">
          <ul class="nav navbar-nav">
            <li class="home"><a href="#">Início</a></li>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li class="dropdown">
              <a href="#" data-toggle="dropdown" class="dropdown-toggle">Dropdown <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li role="presentation" class="dropdown-header">Graduação</li>
                <li><a href="#">Curso 1</a></li>
                <li><a href="#">Curso 2</a></li>
                <li role="presentation" class="divider"></li>
                <li role="presentation" class="dropdown-header">Graduação a distância</li>
                <li><a href="#">Curso 3</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" data-toggle="dropdown" class="dropdown-toggle">Área exclusiva &nbsp;<i class="fa fa-user fa-fw" aria-hidden="true"></i></a>
              <ul class="dropdown-menu">
                <li role="presentation" class="dropdown-header">Acesso restrito</li>
                <li><a href="#"><i class="fa fa-lock fa-fw" aria-hidden="true"></i>&nbsp; SIGA</a></li>
                <li><a href="#"><i class="fa fa-lock fa-fw" aria-hidden="true"></i>&nbsp; Moodle</a></li>
                <li><a href="#"><i class="fa fa-lock fa-fw" aria-hidden="true"></i>&nbsp; E-mail Fatec</a></li>
                <li role="presentation" class="divider"></li>
                <li role="presentation" class="dropdown-header">Aluno</li>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="cps-main">
    <article id="content" tabindex="-1">
      <h1>Template básico</h1>
      <p class="lead">Use este documento para começar uma nova página do seu projeto.</p>
      <p>Veja como usar o logo da sua institução na <a href="http://localhost:4000/branding/overview/">página de identidade</a>.</p>
    </article>
    </main>
    <footer id="footer" class="cps-footer">
      <p class="text-center">This site is &copy; to CPS Front-end 2015</p>
    </footer>
    <!-- jQuery (obrigatório para plugins JavaScript do {{ site.title }}) -->
    <script src="{{ site.cdn.jquery }}"></script>
    <!-- {{ site.title }} JavaScript -->
    <script src="{{ site.cdn.js }}"></script>    
  </body>
</html>
{% endhighlight %}
