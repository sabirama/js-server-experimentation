import template from "./components/template.js";
import style from "../style/style.js";
import { header, footer } from "./components/common.js";

const Body = `
${header}
<main>
    <h1>About</h1>
</main>
${footer}
`
const about = template("About", style, Body);

export default about;