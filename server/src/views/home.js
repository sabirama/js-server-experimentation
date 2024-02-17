import template from "./components/template.js";
import style from "../style/style.js";
import {header, footer} from "./components/common.js";

const Body = `
${header}
<main>
    <div>
        <h1> Home </h1>
        <button class="get-products">
        products
        </button>
    </div>
    <div id="display"></div>
</main>
<script src="script" type="module"></script>
${footer}
`

const home = template('Home',style, Body);

export default home;