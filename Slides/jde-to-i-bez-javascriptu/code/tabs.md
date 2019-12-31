```css
input[type="radio"]:checked + label + .tab__content { 
  display: block; 
}

input[type="radio"]:checked + label { 
  font-weight: bold; 
  color: var(--colorPrimary700);
  border-bottom: 3px solid var(--colorPrimary700); 
}

```
```html
<div class="tab">
	<input type="radio" id="tab1" name="tabs">
	<label for="tab1">Prima</label>
	<div class="tab__content">...</div>
</div>
```
