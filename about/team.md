---
layout: docs
title: Equipe
group: about
---

O {{site.title}} é mantido pelo criados com ajuda de outros colaboradores.
{: .lead}

## Criadores

<div class="list-group">
{% for member in site.data.core-team %}
<div class="list-group-item">
  <div class="avatar avatar-default">
    <div class="avatar-foto">
    <a href="https://github.com/{{ member.user }}">
      <img src="{{ member.gravatar }}" alt="@{{ member.user }}">
    </a>
    </div>
    <div class="avatar-details">
      <h4 class="avatar-name">{{ member.name }}</h4>
      <p><a href="https://github.com/{{ member.user }}">@{{ member.user }}</a></p>
    </div>
  </div>
</div>
{% endfor %}
</div>
 
## Colaboradores

O código do {{site.title}} é aberto e esta hospedado no GitHub, então qualquer pessoa pode colaborar com o projeto.

[Veja todos os colaboradores do projeto]({{site.repo_url}}/graphs/contributors){: .btn .btn-default}
