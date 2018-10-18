const rootElement = document.getElementById('root');

function Box({className = '', size = '', color = '', ...rest}) {
  const sizeClassName = size ? `box--${size}` : '';
  const colorClassName = color ? `box--${color}` : '';

  return (
    <div
      className={`box ${className} ${sizeClassName} ${colorClassName}`}
      {...rest} 
    />
  )
}

const element = (
  <div>
    <Box color="blue" size="200">box</Box>
    <Box color="red">box</Box>
    <Box color="green" size="300">box</Box>
    <Box color="red" size="200" className="rounded">circle</Box>
  </div>
)

ReactDOM.render(
  element,
  rootElement
);


