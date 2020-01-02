```css
:root {
  --baseline: 2.5;
  line-height: 2.5; /* fallback */ 
  line-height: var(--baseline) 
}

@media (max-width: 50rem) { 
  :root { 
  --baseline: 2; 
  } 
}

@media (max-width: 30rem) { 
  :root { 
  --baseline: 1.5; 
  } 
}
```
