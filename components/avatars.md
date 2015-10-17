---
layout: docs
title: Avatares
group: components
---

Use avatares para exibir o perfil de pessoas, como exemplo, docentes, alunos, coordenadores e etc.
{: .lead}

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Exemplos

Para criar um avatar, precisamos combinar no 5 classes, que são: `.avatar`, `.avatar-default`, `.avatar-foto`, `.avatar-details`, `.avatar-name`. Confira um exemplo abaixo.

{% example html %}
<div class="avatar avatar-default">
  <div class="avatar-foto">
    <a href="#">
      <img src="https://avatars1.githubusercontent.com/u/11800538" alt="...">
    </a>
  </div>
  <div class="avatar-details">
    <h4 class="avatar-name">Ramon Duran</h4>
    <p><a href="#">Link</a> ou texto simples</p>
  </div>
</div>
{% endexample %}

### Combinação com ícones

Utilize os ícones social para economizar espaço. [Veja como utilizar ícones]({{ "components/icons/" | prepend: site.baseurl | prepend: site.url }}).

{% example html %}
<div class="avatar avatar-default">
  <div class="avatar-foto">
    <a href="#">
      <img src="https://avatars0.githubusercontent.com/u/4764189" alt="...">
    </a>
  </div>
  <div class="avatar-details">
    <h4 class="avatar-name">Flávia Souza</h4>
    <p>
      <a href="#"><i class="fa fa-facebook-official"></i></a> 
      <a href="#"><i class="fa fa-twitter"></i></a> 
      <a href="#"><i class="fa fa-linkedin"></i></a>
    </p>
  </div>
</div>
{% endexample %}

### Aumentar tamanho

É possível aumentar o tamanho da foto do avatar acrescentando a class `.avatar-lg`. Recomenda-se este uso, caso exista uma descrição longa, veja o exemplo abaixo.

{% example html %}
<div class="avatar avatar-default avatar-lg">
  <div class="avatar-foto">
    <a href="#">
      <img src="https://avatars3.githubusercontent.com/u/1139893" alt="...">
    </a>
  </div>
  <div class="avatar-details">
    <h4 class="avatar-name">Adam Macias</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
  </div>
</div>
{% endexample %}

## Lista de avatares

Combine avatares com o uso do componente [Grupos de listas]({{ "components/list-group/" | prepend: site.baseurl | prepend: site.url }}). Veja um exemplo:

{% example html %}
<section class="list-group">
  <h4>Pessoas</h4>
  <div class="list-group-item">
    <div class="avatar avatar-default">
      <div class="avatar-foto">
        <a href="#">
          <img src="https://avatars3.githubusercontent.com/u/1139893" alt="" />
        </a>
      </div>
      <div class="avatar-details">
        <h5 class="avatar-name">Adam Macias</h5>
        <p>@adammacias</p>
      </div>
    </div>
  </div>
  <div class="list-group-item">
    <div class="avatar avatar-default avatar-default">
      <div class="avatar-foto">
        <a href="#">
          <img src="https://avatars0.githubusercontent.com/u/4764189" alt="" />
        </a>
      </div>
      <div class="avatar-details">
        <h5 class="avatar-name">Flávia Souza</h5>
        <p>@flaviacs</p>
      </div>
    </div>
  </div>
</section>
{% endexample %}

## Avatar vertical

É possível mostrar o avatar no modo vertical, para isso, ao invés de usar a classe `.avatar-default` use a `.avatar-vertical`. Veja o uso com colunas.

{% example html %}
<section class="row">
  <div class="col-md-12">
    <h4>Pessoas</h4>
  </div>
  <div class="col-md-4">
    <div class="avatar avatar-vertical">
      <div class="avatar-foto">
        <a href="#">
          <img src="https://avatars3.githubusercontent.com/u/1139893" alt="" />
        </a>
      </div>
      <div class="avatar-details">
        <h5 class="avatar-name">Adam Macias</h5>
        <p>@adammacias</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="avatar avatar-vertical">
      <div class="avatar-foto">
        <a href="#">
          <img src="https://avatars0.githubusercontent.com/u/4764189" alt="" />
        </a>
      </div>
      <div class="avatar-details">
        <h5 class="avatar-name">Flávia Souza</h5>
        <p>@flaviacs</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="avatar avatar-vertical">
      <div class="avatar-foto">
        <a href="#">
          <img src="https://avatars1.githubusercontent.com/u/11800538" alt="" />
        </a>
      </div>
      <div class="avatar-details">
        <h5 class="avatar-name">Ramon Duran</h5>
        <p>@ramonduran</p>
      </div>
    </div>
  </div>
</section>
{% endexample %}
