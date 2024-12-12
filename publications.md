---
title: Publications
layout: default
---

[Google Scholar](https://scholar.google.com/citations?user=Lt3avkAAAAAJ)
# Journal Publications
{% for item in site.data.publications %}
### {{item.title}}
{{item.author}}, {% if item.doi And item.doi != "" And item.doi != nil %}<a href="{{item.doi}}">{% endif %}<i>{{item.journal}}</i> <b>{{item.volume}}</b>, {{item.pages}}{% if item.doi And item.doi != "" And item.doi != nil %}</a>{% endif %} ({{item.year}}).
{% if item.abstract %}
<details>
<summary>Read more</summary>
<br>
{{item.abstract}}
</details>
{% endif %}
{% endfor %}