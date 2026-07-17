---
title: Research
description: Electrochemistry &amp; Numerical Methods
layout: default
---

# Topics
<div class="card-container">
{% for item in site.data.topics %}
<div class="card">
  <h3>{{item.title}}</h3>
  {% if item.figure %}
  <div><img src="{{item.figure}}" alt="{{item.title}}" style="max-width: 100%; display:inline-block; margin: 10px;" /></div>
  {% endif %}
  {% if item.abstract %}
  <a href="#popup_{{item.id}}">Show more</a>
  {% endif %}
</div>
<div id="popup_{{item.id}}" class="overlay">
  <div class="popup">
    <h3>{{item.title}}</h3>
    <a class="close" href="#">&times;</a>
    {% if item.figure %}
    <div><img src="{{item.figure}}" alt="{{item.title}}" style="max-width: 50%; float:right; margin: 10px;" /></div>
    {% endif %}
    {{item.abstract}}
    <a href="#">Close</a>
  </div>
</div>
{% endfor %}
</div><!-- end card-container -->

# Methods
<div class="card-container">
{% for item in site.data.methods %}
<div class="card">
  <h3>{{item.title}}</h3>
  {% if item.figure %}
  <div><img src="{{item.figure}}" alt="{{item.title}}" style="max-width: 100%; display:inline-block; margin: 10px;" /></div>
  {% endif %}
  {% if item.abstract %}
  <a href="#popup_{{item.id}}">Show more</a>
  {% endif %}
</div>
<div id="popup_{{item.id}}" class="overlay">
  <div class="popup">
    <h3>{{item.title}}</h3>
    <a class="close" href="#">&times;</a>
    {% if item.figure %}
    <div><img src="{{item.figure}}" alt="{{item.title}}" style="max-width: 50%; float:right; margin: 10px;" /></div>
    {% endif %}
    {{item.abstract}}
    <a href="#">Close</a>
  </div>
</div>
{% endfor %}
</div><!-- end card-container -->