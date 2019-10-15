```less
/*******************************************
  MICRO TACHYONS
********************************************/

/* global variables */
$m-xs: 450px;
$m-sm: 800px;
$m-md: 1200px;
$m-lg: 1400px;

$c-primary: deepskyblue;
$c-secondary: darkseagreen;
$c-tertiary: brown;
$c-success: green;
$c-danger: red;
$c-warning: orange;
$c-info: yellow;
$c-light: #ccc;
$c-dark: #666;
$c-muted: #eee;
$c-white: white;

$radius: 10px;

/* display */
.dn { display: none }
.db { display: block }
.di { display: inline }
.dib { display: inline-block }
.dt { display: table }
.dtr { display: table-row }
.dtc { display: table-cell }

@media only screen and (max-width: $m-lg) {
	.dn-lg { display: none; }
	.db-lg { display: block; }
	.di-lg { display: inline; }
	.dib-lg { display: inline-block; }
}

@media only screen and (max-width: $m-md) {
	.dn-md { display: none; }
	.db-md { display: block; }
	.di-md { display: inline; }
	.dib-md { display: inline-block; }
}

@media only screen and (max-width: $m-sm) {
	.dn-sm { display: none; }
	.db-sm { display: block; }
	.di-sm { display: inline; }
	.dib-sm { display: inline-block; }
}

@media only screen and (max-width: $m-xs) {
	.dn-xs { display: none; }
	.db-xs { display: block; }
	.di-xs { display: inline; }
	.dib-xs { display: inline-block; }
}

/* visibility / position */
.visible { visibility: visible }
.hidden { visibility: hidden }

.absolute { position: absolute }
.fixed { position: fixed }
.relative { position: relative }
.sticky { position: sticky }
.static { position: static }

.top0 { top: 0 }
.top2 { top: 2rem }
.top3 { top: 3rem }
.top4 { top: 4rem }
.top5 { top: 5rem }
.top6 { top: 6rem }

.right0 { right: 0 }
.right1 { right: 1rem }
.right2 { right: 2rem }
.right3 { right: 3rem }
.right4 { right: 4rem }
.right5 { right: 5rem }

.bottom0 { bottom: 0 }
.bottom1 { bottom: 1rem }
.bottom2 { bottom: 2rem }
.bottom3 { bottom: 3rem }
.bottom4 { bottom: 4rem }
.bottom5 { bottom: 5rem }

.left0 { left: 0 }
.left1 { left: 1rem }
.left2 { left: 2rem }
.left3 { left: 3rem }
.left4 { left: 4rem }
.left5 { left: 5rem }

.z-1 { z-index: -1 }
.z1 { z-index: 1 }
.z10 { z-index: 10 }
.z100 { z-index: 100 }
.z1000 { z-index: 1000 }
.z10000 { z-index: 10000 }


/* float */
.fl { float: left }
.fr { float: right }
.ifl { float: left; margin: 0 1rem .5rem 0; }
.ifr { float: right; margin: 0 0 .5rem 1rem; }
.cl { clear: left }
.cr { clear: right }
.cb { clear: both }

/* flexbox */
.flex { display: flex }
.flex-grow-1 { flex-grow: 1 }

/* typography */
.tal { text-align: left }
.tar { text-align: right }
.tac { text-align: center }
.taj { text-align: justify }

.lh1 { line-height: 1 }
.lh15 { line-height: 1.5 }

.fs-70 { font-size: 70% }
.fs-80 { font-size: 80% }
.fs-90 { font-size: 90% }
.fs-100 { font-size: 100% }
.fs-110 { font-size: 110% }
.fs-120 { font-size: 120% }
.fs-130 { font-size: 130% }
.fs-140 { font-size: 140% }
.fs-150 { font-size: 150% }

.fw100 { font-weight: 100 }
.fw200 { font-weight: 200 }
.fw300 { font-weight: 300 }
.fw400 { font-weight: 400 }
.fw500 { font-weight: 500 }
.fw600 { font-weight: 600 }
.fw700 { font-weight: 700 }
.fw800 { font-weight: 800 }
.fw900 { font-weight: 900 }

.italic { font-style: italic }
.bold { font-weight: bold }
.underline { text-decoration: underline }
.capitalize { text-transform: capitalize }
.uppercase { text-transform: uppercase }
.lowercase { text-transform: lowercase }

.ofh { overflow: hidden }
.nowrap { white-space: nowrap }
.pre { white-space: pre }


/* spacing */
.m-auto { margin: auto }

.m0 { margin: 0 }
.m1 { margin: 1rem }
.m2 { margin: 2rem }
.m3 { margin: 3rem }
.m4 { margin: 4rem }
.m5 { margin: 5rem }

.mt0 { margin-top: 0 }
.mt1 { margin-top: 1rem }
.mt2 { margin-top: 2rem }
.mt3 { margin-top: 3rem }
.mt4 { margin-top: 4rem }
.mt5 { margin-top: 5rem }

.mb0 { margin-bottom: 0 }
.mb1 { margin-bottom: 1rem }
.mb2 { margin-bottom: 2rem }
.mb3 { margin-bottom: 3rem }
.mb4 { margin-bottom: 4rem }
.mb5 { margin-bottom: 5rem }

.ml0 { margin-left: 0 }
.ml1 { margin-left: 1rem }
.ml2 { margin-left: 2rem }
.ml3 { margin-left: 3rem }
.ml4 { margin-left: 4rem }
.ml5 { margin-left: 5rem }

.mr0 { margin-right: 0 }
.mr1 { margin-right: 1rem }
.mr2 { margin-right: 2rem }
.mr3 { margin-right: 3rem }
.mr4 { margin-right: 4rem }
.mr5 { margin-right: 5rem }

.p0 { padding: 0 }
.p1 { padding: 1rem }
.p2 { padding: 2rem }
.p3 { padding: 3rem }
.p4 { padding: 4rem }
.p5 { padding: 5rem }

.pt0 { padding-top: 0 }
.pt1 { padding-top: 1rem }
.pt2 { padding-top: 2rem }
.pt3 { padding-top: 3rem }
.pt4 { padding-top: 4rem }
.pt5 { padding-top: 5rem }

.pb0 { padding-bottom: 0 }
.pb1 { padding-bottom: 1rem }
.pb2 { padding-bottom: 2rem }
.pb3 { padding-bottom: 3rem }
.pb4 { padding-bottom: 4rem }
.pb5 { padding-bottom: 5rem }


/* width / height */
.w-1 { width: 1% }
.w-5 { width: 5% }
.w-10 { width: 10% }
.w-20 { width: 20% }
.w-30 { width: 30% }
.w-33 { width: 33.333% }
.w-40 { width: 40% }
.w-50 { width: 50% }
.w-60 { width: 60% }
.w-70 { width: 70% }
.w-80 { width: 80% }
.w-90 { width: 90% }
.w-100 { width: 100% }

.minw0 { min-width: 0 }
.minw10 { min-width: 10rem }
.minw15 { min-width: 15rem }
.minw20 { min-width: 25rem }
.minw25 { min-width: 20rem }
.minw30 { min-width: 30rem }
.minw40 { min-width: 40rem }
.minw50 { min-width: 50rem }

.maxw0 { max-width: 0 }
.maxw10 { max-width: 10rem }
.maxw15 { max-width: 15rem }
.maxw20 { max-width: 20rem }
.maxw25 { max-width: 25rem }
.maxw30 { max-width: 30rem }
.maxw40 { max-width: 40rem }
.maxw50 { max-width: 50rem }

.minh0 { min-height: 0 }
.minh10 { min-height: 10rem }
.minh15 { min-height: 15rem }
.minh20 { min-height: 20rem }
.minh25 { min-height: 25rem }
.minh30 { min-height: 30rem }
.minh40 { min-height: 40rem }
.minh50 { min-height: 50rem }


/* colors */
.c-primary { color: $c-primary }
.c-secondary { color: $c-secondary }
.c-tertiary { color: $c-tertiary }
.c-success { color: $c-success }
.c-danger { color: $c-danger }
.c-warning { color: $c-warning }
.c-info { color: $c-info }
.c-light { color: $c-light }
.c-dark { color: $c-dark }
.c-muted { color: $c-muted }
.c-white { color: $c-white }

.bg-primary { background-color: $c-primary }
.bg-secondary { background-color: $c-secondary }
.bg-tertiary { background-color: $c-tertiary }
.bg-success { background-color: $c-success }
.bg-danger { background-color: $c-danger }
.bg-warning { background-color: $c-warning }
.bg-info { background-color: $c-info }
.bg-light { background-color: $c-light }
.bg-dark { background-color: $c-dark }
.bg-muted { background-color: $c-muted }
.bg-white { background-color: $c-white }


/* misc - kam s tim? */
.pointer { cursor: pointer }

.circle { border-radius: 50% }
.rounded { border-radius: $radius }

```
