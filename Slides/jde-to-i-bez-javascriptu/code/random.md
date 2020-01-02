```css
/* The highest z-index is the numbers of sides in the dice */ 
@keyframes changeOrder {
  from { z-index: 6; } 
  to { z-index: 1; } 
} 

/* All the labels overlap by using absolute positioning */ 
label { 
  animation: changeOrder 3s infinite linear;
  background: #ddd;
  cursor: pointer;
  display: block;
  left: 1rem;
  padding: 1rem;
  position: absolute;
  top: 1rem; 
  user-select: none;
} 
    
/* Negative delay so all parts of the animation are in motion */ 
label:nth-of-type(1) { animation-delay: -0.0s; } 
label:nth-of-type(2) { animation-delay: -0.5s; } 
label:nth-of-type(3) { animation-delay: -1.0s; } 
label:nth-of-type(4) { animation-delay: -1.5s; } 
label:nth-of-type(5) { animation-delay: -2.0s; } 
label:nth-of-type(6) { animation-delay: -2.5s; }
```
