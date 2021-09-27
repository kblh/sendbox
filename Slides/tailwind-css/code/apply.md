```html
<button 
  class="font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 text-white">
  Button
</button>

<button class="btn btn-blue">Button</button>
```
```css
.btn {
  @apply font-bold py-2 px-4 rounded;
}

.btn-blue {
  @apply bg-blue-500 hover:bg-blue-700 text-white;
}
```