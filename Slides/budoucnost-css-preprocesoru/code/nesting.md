```css
.detail {
	
	&-item {
		
		&:after {
			content: '';
			position: absolute;
			bottom: 0;
			height: 30px;
			left: 0;
			right: 0;
			background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
		}

		form {
			width: 100%;
			max-width: 100%;
				padding: 2em;
			background: @primary_blue_light;
			padding: 2em;
			position: relative;
			z-index: 2;
			margin-bottom: -150px;
			
		}
		
		&-input {
			width: 70%;
			max-width: ~"calc(100% - 115px)";
			vertical-align: top;
		}
		
		&-button {
			width: 30%;
			min-width: 115px;
			vertical-align: top;
		}
		
		p {
			font-size: 1.5rem;
			line-height: 1.2em;
			color: #fff;
			font-weight: 600;
		}
	}
	
	&-icons {
		color: @primary_blue_dark;
		font-size: 1.556rem;
		line-height: 1.1em;

		h2 {
			margin: 0 0 47px 0;
		}

		span {
			width: auto;
			display: inline-block;
			vertical-align: top;
			text-align: left;
		}
		
		&-icon {
			color: @primary_red;
			font-size: 3.875rem;
			font-weight: 600;
			line-height: 1.1em;
			text-align: right !important;
		}
		
		&-text {
			font-size: 1.750rem;
			line-height: 1.1em;
		}
		
		ul {
			margin: 0;
			
			li {
				text-align: center;
			}
		}
		
		.item {
			position: relative;
			list-style: none;
			text-align: center;
			
			&:first-child {
				&:before {
					display: none;
				}
			}
			
			&:last-child {
				span {
					width: auto;
				}
			}
		}
	}
	
	&-news {
		
		h2 {
			margin: 0 0 47px 0;
		}
		
		a {
			text-decoration: none;
		}
		
		ul {
			margin: 0;
		}
		
		.item {
			height: 100%;
			margin-bottom: 2em;
			list-style: none;
			background-color: #fff;
			-webkit-transition: all 0.75s ease;
			transition: all 0.75s ease;
			
			&:hover {
				-webkit-transform: scale(1.05);
				transform: scale(1.05);
			}
			
			&:first-child {
				margin-left: 0;
			}
			
			&:last-child {
				margin-right: 0;
			}
			
			a {
				position: relative;
				display: block;
				height: 100%;
			}
		}
		
		img {
			display: block;
		}
		
		&-text {
			padding: 1.125em 1.125em 2em 1.125em;
			text-align: left;
			
			h3 {
				font-family: "Arial", sans-serif;
				font-size: 1.500rem;
				line-height: 1.1em;
				margin: 0;
				color: @primary_blue_dark;
				text-transform: none;
			}
		}
		
		&-cat {
			font-family: "Arial", sans-serif;
			font-size: 0.875rem;
			text-transform: uppercase;
			color: @primary_green;
		}
		
		&-data {
			font-size: 1rem;
			line-height: 2em;
			color: #999;
		}
	}
}
```
