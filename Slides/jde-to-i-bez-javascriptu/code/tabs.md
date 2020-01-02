```css
input[type="radio"],
.tab__content { 
  display: none; 
}

input[type="radio"]:checked + label + .tab__content { 
  display: block; 
}


```
```html
<div class="tab">
	<input type="radio" id="tab1" name="tabs">
	<label for="tab1">Prima</label>
	<div class="tab__content">...</div>
</div>
```
