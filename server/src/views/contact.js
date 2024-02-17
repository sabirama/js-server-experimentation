import template from "./components/template.js";
import style from "../style/style.js";
import { header, footer } from "./components/common.js";

const Body = `
${header}
<main>
    <h1>Contact</h1>
</main>
${footer}
`;
const contact = template("Contact", style, Body);

export default contact;
