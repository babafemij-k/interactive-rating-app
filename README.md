# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](src/assets/Screenshot-interactive-rating.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

```css
.star-logo {
  height: 1rem;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .star-logo {
    animation: star-logo-spin infinite 2s linear;
  }
}

@keyframes star-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

```js
<div className="ratings">
  {ratings.map((rating) => {
    return (
      <Rating rating={rating} id={rating} setFinalRating={setFinalRating} />
    );
  })}
</div>
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

## Author

- Website - [Babafemi Jimoh-Kuku](https://babafemijk.hashnode.dev/)
- Frontend Mentor - [@babafemij-k](https://www.frontendmentor.io/profile/babafemij-k)
- Twitter - [@babafemij_k](https://twitter.com/babafemij_k)
