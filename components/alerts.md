---
layout: docs
title: Alertas
group: components
---

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Examples

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
{: .lead}

Wrap any text and an optional dismiss button in `.alert` and one of the four contextual classes (e.g., `.alert-success`) for basic alert messages.

#### No default class

Alerts don't have default classes, only base and modifier classes. A default gray alert doesn't make too much sense, so you're required to specify a type via contextual class. Choose from success, info, warning, or danger.

{% example html %}
  <div class="alert alert-success" role="alert">
    <strong>Muito bom!</strong> Alerta usado para mensagens de sucesso.
  </div>
  <div class="alert alert-info" role="alert">
    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
  </div>
  <div class="alert alert-warning" role="alert">
    <strong>Warning!</strong> Better check yourself, you're not looking too good.
  </div>
  <div class="alert alert-danger" role="alert">
    <strong>Oh snap!</strong> Change a few things up and try submitting again.
  </div>
{% endexample %}


## Dismissible alerts

Build on any alert by adding an optional <code>.alert-dismissible</code> and close button.

#### Requires JavaScript alert plugin

For fully functioning, dismissible alerts, you must use the <a href="../javascript/#alerts">alerts JavaScript plugin</a>.

{% example html %} 
<div class="alert alert-warning alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
</div>
{% endexample %}

  <div class="bs-callout bs-callout-warning" id="callout-alerts-dismiss-use-button">
    <h4>Ensure proper behavior across all devices</h4>
    <p>Be sure to use the <code>&lt;button&gt;</code> element with the <code>data-dismiss="alert"</code> data attribute.</p>
  </div>

## Links in alerts

Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.

{% example html %} 
<div class="alert alert-success" role="alert">
  <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
</div>
<div class="alert alert-info" role="alert">
  <strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Warning!</strong> Better check yourself, you're <a href="#" class="alert-link">not looking too good</a>.
</div>
<div class="alert alert-danger" role="alert">
  <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
</div>
{% endexample %}


















