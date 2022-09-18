---
preview_image: '/img/images/geometric-pattern-01.jpg'
author: Svelte Script
title: This is a post with a svelte script
published: true
post_date: '2019-10-15'
excerpt: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.
categories:
  - 'travel'
  - 'rstats'
  - 'datascience'
  - 'analytics'
  - 'statistcs'
  - 'method'
  - 'tool'
  - 'mypost'
---

This is a blog post with content.

# Liftoff!

## This is a vuetify starter for a blog

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.

# Liftoff!

## This is a vuetify starter for a blog

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.

# Number of quotes: {count}

<script>
    import Box from '$lib/components/box.svelte'
    let count = 10
</script>
<Box />
<button on:click = {() => count++}>Increment {count}</button>
