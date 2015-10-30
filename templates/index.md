---
layout: docs
title: Templates
group: null
---

Templates são modelos prontos para serem utilizados ou customizados, é possível aproveita-los para agilizar o desenvolvimento de novas páginas do projeto.
{: .lead}

Utilizamos nos modelos a **Fatec Baixada Santista - Rubens Lara** para exemplificar a unidade, mas certamente você pode querer conhecer nossa [página de identidade]({{ "branding/overview/" | prepend: site.baseurl | prepend: site.url }}), onde demostramos como utilizar a marca da sua unidade de forma simples e padronizada.

[Veja o código fonte]({{ site.download.source }}) de qualquer template.

## Base

A partir dos templates base é perfeitamente possível criar qualquer [página]({{ "templates/#paginas" | prepend: site.baseurl | prepend: site.url }}).

<div class="row">
  <article class="col-xs-6 col-md-4">
    <a href="{{ "templates/page" | prepend: site.baseurl | prepend: site.url }}">
      <img class="img-thumbnail img-responsive" src="{{ "templates/page" | prepend: site.baseurl | prepend: site.url }}/screenshot.png" alt="">
    </a>
    <h3 class="h5">Template básico (Padrão)</h3>
    <p>Nada além do básico, template com cabeçalho, rodapé e conteúdo da página em uma só coluna.</p>
  </article>
  <article class="col-xs-6 col-md-4">
    <a href="{{ "templates/page-sidebar" | prepend: site.baseurl | prepend: site.url }}">
      <img class="img-thumbnail img-responsive" src="{{ "templates/page-sidebar" | prepend: site.baseurl | prepend: site.url }}/screenshot.png" alt="">
    </a>
    <h3 class="h5">Template com barra lateral</h3>
    <p>Template com cabeçalho, rodapé e conteúdo da página separado em duas colunas, o conteúdo principal e a barra complementar.</p>
  </article>
</div>

## Páginas

Templates páginas estão prontos para receber informações apenas.

<div class="row">
  <article class="col-xs-6 col-md-4">
    <a href="{{ "templates/home" | prepend: site.baseurl | prepend: site.url }}">
      <img class="img-thumbnail img-responsive" src="{{ "templates/home" | prepend: site.baseurl | prepend: site.url }}/screenshot.png" alt="">
    </a>
    <h3 class="h5">Página inicial (Home)</h3>
    <p>Página com caroussel (slides), listagem de artigos, agenda, social e outros.</p>
  </article>
  <article class="col-xs-6 col-md-4">
    <a href="{{ "templates/blog" | prepend: site.baseurl | prepend: site.url }}">
      <img class="img-thumbnail img-responsive" src="{{ "templates/blog" | prepend: site.baseurl | prepend: site.url }}/screenshot.png" alt="">
    </a>
    <h3 class="h5">Página Blog</h3>
    <p>Página com lista de artigos, perfeita para mostrar notícias, eventos e outros artigos.</p>
  </article>
  <article class="col-xs-6 col-md-4">
    <a href="{{ "templates/theme" | prepend: site.baseurl | prepend: site.url }}">
      <img class="img-thumbnail img-responsive" src="{{ "templates/theme" | prepend: site.baseurl | prepend: site.url }}/screenshot.png" alt="">
    </a>
    <h3 class="h5">Página Tema</h3>
    <p>Exemplo de uma página promocional, usada para: eventos, cursos, vestibular e etc..</p>
  </article>
</div>

{% comment %} 

## Custom components

Brand new components and templates to help folks quickly get started with Bootstrap and demonstrate best practices for adding onto the framework.

<div class="row bd-examples">
  <div class="col-xs-6 col-md-4">
    <a href="{{ site.baseurl }}/examples/album/">
      <img class="img-thumbnail" src="{{ site.baseurl }}/examples/screenshots/album.jpg" alt="">
    </a>
    <h4>Album</h4>
    <p>Simple one-page template for photo galleries, portfolios, and more.</p>
  </div>
  <div class="col-xs-6 col-md-4">
    <a href="{{ site.baseurl }}/examples/cover/">
      <img class="img-thumbnail" src="{{ site.baseurl }}/examples/screenshots/cover.jpg" alt="">
    </a>
    <h4>Cover</h4>
    <p>A one-page template for building simple and beautiful home pages.</p>
  </div>
  <div class="clearfix hidden-sm-up"></div>

  <div class="col-xs-6 col-md-4">
    <a href="{{ site.baseurl }}/examples/carousel/">
      <img class="img-thumbnail" src="{{ site.baseurl }}/examples/screenshots/carousel.jpg" alt="">
    </a>
    <h4>Carousel</h4>
    <p>Customize the navbar and carousel, then add some new components.</p>
  </div>
  <div class="col-xs-6 col-md-4">
    <a href="{{ site.baseurl }}/examples/blog/">
      <img class="img-thumbnail" src="{{ site.baseurl }}/examples/screenshots/blog.jpg" alt="">
    </a>
    <h4>Blog</h4>
    <p>Simple two-column blog layout with custom navigation, header, and type.</p>
  </div>
  <div class="clearfix hidden-sm-up"></div>

  <div class="col-xs-6 col-md-4">
    <a href="{{ site.baseurl }}/examples/dashboard/">
      <img class="img-thumbnail" src="{{ site.baseurl }}/examples/screenshots/dashboard.jpg" alt="">
    </a>
    <h4>Dashboard</h4>
    <p>Basic admin dashboard shell with fixed sidebar and navbar.</p>
  </div>
  <div class="col-xs-6 col-md-4">
    <a href="{{ site.baseurl }}/examples/signin/">
      <img class="img-thumbnail" src="{{ site.baseurl }}/examples/screenshots/sign-in.jpg" alt="">
    </a>
    <h4>Sign-in page</h4>
    <p>Custom form layout and design for a simple sign in form.</p>
  </div>
  <div class="clearfix hidden-sm-up"></div>

  <div class="col-xs-6 col-md-4">
    <a href="{{ site.baseurl }}/examples/justified-nav/">
      <img class="img-thumbnail" src="{{ site.baseurl }}/examples/screenshots/justified-nav.jpg" alt="">
    </a>
    <h4>Justified nav</h4>
    <p>Create a custom navbar with justified links. Heads up! <a href="{{ site.baseurl }}components/#nav-justified">Not too Safari friendly.</a></p>
  </div>
  <div class="col-xs-6 col-md-4">
    <a href="{{ site.baseurl }}/examples/sticky-footer/">
      <img class="img-thumbnail" src="{{ site.baseurl }}/examples/screenshots/sticky-footer.jpg" alt="">
    </a>
    <h4>Sticky footer</h4>
    <p>Attach a footer to the bottom of the viewport when the content is shorter than it.</p>
  </div>
  <div class="clearfix hidden-sm-up"></div>

  <div class="col-xs-6 col-md-4">
    <a href="{{ site.baseurl }}/examples/sticky-footer-navbar/">
      <img class="img-thumbnail" src="{{ site.baseurl }}/examples/screenshots/sticky-footer-navbar.jpg" alt="">
    </a>
    <h4>Sticky footer w/ navbar</h4>
    <p>Attach a footer to the bottom of the viewport with a fixed top navbar.</p>
  </div>
</div>

## Experiments

Examples that focus on future-friendly features or techniques.

<div class="row bd-examples">
  <div class="col-xs-6 col-md-4">
    <a href="{{ site.baseurl }}/examples/offcanvas/">
      <img class="img-thumbnail" src="{{ site.baseurl }}/examples/screenshots/offcanvas.jpg" alt="">
    </a>
    <h4>Offcanvas</h4>
    <p>Build a toggleable off-canvas navigation menu for use with Bootstrap.</p>
  </div>
</div>

{% endcomment %}
