# simple-dropdown

A lightweight, reusable dropdown menu in plain JavaScript.

## Installation

npm install simple-dropdown

## Usage

Add this markup where you want your dropdown to appear:

<div class="menucontainer">
  <button class="menubtn">Menu</button>
  <div class="dropdown invisible">
    <ul>
      <li><button>Option 1</button></li>
      <li><button>Option 2</button></li>
    </ul>
  </div>
</div>

Import and initialize the dropdown in your JavaScript:

import { initDropdowns } from "simple-dropdown";
import "simple-dropdown/dist/styles.css"; // optional: use default styles

initDropdowns();

## Custom Styling

If you want to style the dropdown yourself, override the default CSS:

.menucontainer { /_ container for button + dropdown _/ }
.menubtn { /_ button that toggles dropdown _/ }
.dropdown { /_ dropdown container _/ }
.invisible { display: none; } /_ hides dropdown _/

## Local Development

If you’re developing locally and bundling styles with Webpack, install these loaders:

npm install --save-dev style-loader css-loader

Then include them in your Webpack config under module.rules.
