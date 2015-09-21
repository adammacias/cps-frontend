---
layout: docs
title: Showcases
group: about
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div class="row">
  {% for case in site.data.showcases %}
    <div class="col-xs-6 col-sm-4">
      <a class="thumbnail" href="{{ case.url }}" target="_blank" title="{{ case.title }}">
        <img src="{{ site.baseurl_content }}showcases/{{ case.screenshot }}" alt="{{ case.title }}" class="img-responsive">
        <div class="caption">
          <h5>{{ case.title }}</h5>
          <p><small>{{ case.city }}</small></p>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
