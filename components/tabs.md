---
layout: docs
title: Abas
group: components
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


# Togglable tabs `tab.js`

## Example tabs

Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus. **Nested tabs are not supported.**

{% example html %}
<div  data-example-id="togglable-tabs">
	<ul id="myTabs" class="nav nav-tabs" role="tablist">
	  <li role="presentation" class="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Home</a></li>
	  <li role="presentation"><a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile">Profile</a></li>
	  <li role="presentation" class="dropdown">
	    <a href="#" id="myTabDrop1" class="dropdown-toggle" data-toggle="dropdown" aria-controls="myTabDrop1-contents">Dropdown <span class="caret"></span></a>
	    <ul class="dropdown-menu" aria-labelledby="myTabDrop1" id="myTabDrop1-contents">
	      <li><a href="#dropdown1" role="tab" id="dropdown1-tab" data-toggle="tab" aria-controls="dropdown1">@fat</a></li>
	      <li><a href="#dropdown2" role="tab" id="dropdown2-tab" data-toggle="tab" aria-controls="dropdown2">@mdo</a></li>
	    </ul>
	  </li>
	</ul>
	<div id="myTabContent" class="tab-content">
	  <div role="tabpanel" class="tab-pane fade in active" id="home" aria-labelledBy="home-tab">
	    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
	  </div>
	  <div role="tabpanel" class="tab-pane fade" id="profile" aria-labelledBy="profile-tab">
	    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
	  </div>
	  <div role="tabpanel" class="tab-pane fade" id="dropdown1" aria-labelledBy="dropdown1-tab">
	    <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
	  </div>
	  <div role="tabpanel" class="tab-pane fade" id="dropdown2" aria-labelledBy="dropdown2-tab">
	    <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
	  </div>
	</div>
</div><!-- /example -->
{% endexample %}



{% callout info %}
#### Extends tabbed navigation

This plugin extends the [tabbed navigation component](../components/#nav-tabs) to add tabbable areas.

{% endcallout %}


## Usage

Enable tabbable tabs via JavaScript (each tab needs to be activated individually):


{% highlight js %}
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
{% endhighlight %}


You can activate individual tabs in several ways:

{% highlight js %}
$('#myTabs a[href="#profile"]').tab('show') // Select tab by name
$('#myTabs a:first').tab('show') // Select first tab
$('#myTabs a:last').tab('show') // Select last tab
$('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)
{% endhighlight %}


### Markup

You can activate a tab or pill navigation without writing any JavaScript by simply specifying `data-toggle="tab"` or `data-toggle="pill"` on an element. Adding the `nav` and `nav-tabs` classes to the tab `ul` will apply the Bootstrap [tab styling](../components/#nav-tabs), while adding the `nav` and `nav-pills` classes will apply [pill styling](../components/#nav-pills)


{% highlight html %}
<div>

<!-- Nav tabs -->
	<ul class="nav nav-tabs" role="tablist">
		<li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
		<li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
		<li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
		<li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
	</ul>

<!-- Tab panes -->
	<div class="tab-content">
		<div role="tabpanel" class="tab-pane active" id="home">...</div>
		<div role="tabpanel" class="tab-pane" id="profile">...</div>
		<div role="tabpanel" class="tab-pane" id="messages">...</div>
		<div role="tabpanel" class="tab-pane" id="settings">...</div>
	</div>

</div>
{% endhighlight %}


### Fade effect

To make tabs fade in, add `.fade` to each `.tab-pane`. The first tab pane must also have `.in` to properly fade in initial content.

{% highlight html %}
<div class="tab-content">
  <div role="tabpanel" class="tab-pane fade in active" id="home">...</div>
  <div role="tabpanel" class="tab-pane fade" id="profile">...</div>
  <div role="tabpanel" class="tab-pane fade" id="messages">...</div>
  <div role="tabpanel" class="tab-pane fade" id="settings">...</div>
</div>
{% endhighlight %}


### Methods

#### `$().tab`

Activates a tab element and content container. Tab should have either a `data-target` or an `href` targeting a container node in the DOM. In the above examples, the tabs are the `&lt;a&gt;`s with `data-toggle="tab"` attributes.


#### `.tab('show')`

Selects the given tab and shows its associated content. Any other tab that was previously selected becomes unselected and its associated content is hidden. **Returns to the caller before the tab pane has actually been shown** (i.e. before the `shown.bs.tab` event occurs).

{% highlight js %}
$('#someTab').tab('show')
{% endhighlight %}


### Events

When showing a new tab, the events fire in the following order:

- `hide.bs.tab` (on the current active tab)
- `show.bs.tab` (on the to-be-shown tab)
- `hidden.bs.tab` (on the previous active tab, the same one as for the `hide.bs.tab` event)
- `shown.bs.tab` (on the newly-active just-shown tab, the same one as for the `show.bs.tab` event)

If no tab was already active, then the `hide.bs.tab` and `hidden.bs.tab` events will not be fired.

<div class="table-responsive">
	<table class="table table-bordered table-striped bs-events-table">
		<thead>
			<tr>
		        <th>Event Type</th>
		        <th>Description</th>
    		</tr>
  		</thead>
  		<tbody>
		    <tr>
		        <td>show.bs.tab</td>
		        <td>This event fires on tab show, but before the new tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td>
		    </tr>
		    <tr>
		       <td>shown.bs.tab</td>
		       <td>This event fires on tab show after a tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td>
		    </tr>
		    <tr>
		       <td>hide.bs.tab</td>
		       <td>This event fires when a new tab is to be shown (and thus the previous active tab is to be hidden). Use <code>event.target</code> and <code>event.relatedTarget</code> to target the current active tab and the new soon-to-be-active tab, respectively.</td>
		    </tr>
		    <tr>
		       <td>hidden.bs.tab</td>
		       <td>This event fires after a new tab is shown (and thus the previous active tab is hidden). Use <code>event.target</code> and <code>event.relatedTarget</code> to target the previous active tab and the new active tab, respectively.</td>
		    </tr>
	    </tbody>
   </table>
</div><!-- /.table-responsive -->


{% highlight js %}
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})
{% endhighlight %}