import template from "./components/template.js";
import  style from "../style/style.js";

const Body = `
<div>
<h1> Home </h1>
<button class="get-products">
products
</button>
</div>

<div id="display"> 
</div>
<script type="module" src="script"></script>
`

const home = template('Home',style, Body);

export default home;