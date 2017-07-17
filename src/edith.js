import {buttons} from './buttons';
// Editor holder div
const edith = document.getElementById("edith");

// Text formatting via commandexec wrapper
const run = (command, prop = null) => Array.isArray(command) ?
    document.execCommand(command[0], false, command[1]) :
    document.execCommand(command, false, prop);

// Text format actions. Each subarray is a section of a menu
const menu = document.createElement("DIV");
menu.className = "edith-menu"; 


// Acton buttons blocks builder
buttons.forEach(a => {
    const section = document.createElement("DIV");
    section.className = "edith-section";
    a.forEach(b => {
        const button = document.createElement("DIV");
        button.className = "edith-button";
        button.innerHTML = b.caption;
        button.title = b.tooltip;
        button.onmousedown = e => {
            e.preventDefault();
            run(b.command);
        };
        section.appendChild(button);
    });
    menu.appendChild(section);
});
edith.appendChild(menu);

// Main input field
const inputField = document.createElement("DIV");
inputField.className = "edith-content";
inputField.contentEditable = true;
edith.appendChild(inputField);