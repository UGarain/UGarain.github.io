---
layout: page
title: group
permalink: /group/
nav: true
nav_order: 4
---

<link rel="stylesheet" href="{{ 'assets/css/custom.css' | relative_url }}">

Prof. Garain leads a research group in the CVPR Unit at ISI Kolkata. Over the years, he has supervised numerous Ph.D., Master's, and project students. His current research group works on a broad range of problems in artificial intelligence and machine learning, with research interests spanning causal analysis, large language models, medical image analysis, computational genomics, computer vision, and related areas of intelligent systems.



## Principal Investigator

<div class="members-grid">

{% assign pi = site.data.people | where: "category", "pi" %}

{% for person in pi %}

  {% include person-card.liquid person=person %}

{% endfor %}

</div>

---

## Current Members

<div class="members-grid">

{% assign current = site.data.people | where: "category", "current" %}

{% for person in current %}

  {% include person-card.liquid person=person %}

{% endfor %}

</div>

---

## Past Members

<div class="members-grid">

{% assign past = site.data.people | where: "category", "past" %}

{% for person in past %}

  {% include person-card.liquid person=person %}

{% endfor %}

</div>

<div id="memberPopup" class="member-popup">

<div class="popup-box">

    <span id="closePopup">&times;</span>

    <img id="popupImage">

    <h2 id="popupName"></h2>

    <p id="popupRole"></p>

    <div id="homepageSection">
        <a id="popupHomepage" target="_blank">
            Homepage
        </a>
    </div>

    <div id="researchSection">
        <h4>Research Topics</h4>
        <p id="popupResearch"></p>
    </div>

    <div id="thesisSection">
        <h4>Thesis</h4>
        <p id="popupThesis"></p>
    </div>

    <div id="durationSection">
        <h4>Duration</h4>
        <p id="popupDuration"></p>
    </div>

</div>

</div>

<script src="{{ 'assets/js/member-popup.js' | relative_url }}"></script>
