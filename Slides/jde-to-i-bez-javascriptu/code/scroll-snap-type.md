```css
.container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  max-height: 100vh;  
}

.page {
  height: 100vh;
  scroll-snap-align: start;
}

```
```html
<div class="container">
  <div class="page">Page 1</div>
  <div class="page">Page 2</div>
  <div class="page">Page 3</div>
</div>
```
