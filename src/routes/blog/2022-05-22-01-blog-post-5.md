---
preview_image: '/img/images/geometric-pattern-02.jpg'
author: William Dalrymple
title: The Anarchy
published: true
post_date: '2022-03-10'
excerpt: 'This is a summary of blog Gulliver travels 2 that will display in the article list. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.'
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

This is blog post 1 with content.

# Gulliver's Travels

## This is a starter blog

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.

```js
function parsePosts(posts) {
	posts.forEach((d) => {
		(d.author = d.meta.author),
			(d.excerpt = d.meta.excerpt),
			(d.img_url = d.meta.preview_image),
			(d.link = d.path),
			(d.post_date = d.meta.post_date),
			(d.tags = d.meta.categories),
			(d.title = d.meta.title);
		delete d.meta;
		delete d.path;
		return d;
	});
	return posts;
	console.log(posts);
}
```
