---
layout: docs
title: Showcases
group: about
---

<style>
  .docs-showcases article {
    min-height: 435px;
  }
</style>

Inspire-se com alguns projetos desenhados e desenvolvidos com {{ site.title }}.
{: .lead}

<div class="row docs-showcases">
  {% for case in site.data.showcases %}
    <article class="col-sm-6">
      <a href="{% if case.url contains 'http://' %}{{ case.url }}{% else %}{{ case.url | prepend: site.baseurl | prepend: site.url }}{% endif %}" title="{{ case.title }}">
        <img class="img-thumbnail img-responsive" src="{{ site.baseurl_content }}showcases/{{ case.screenshot }}" alt="">
      </a>
      <h3 class="h5">{{ case.title }}</h3>
      <p>{{ case.city }}</p>
    </article>
  {% endfor %}
</div>

