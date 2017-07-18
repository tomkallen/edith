import { buttons } from './buttons';
import { settings } from './settings';

export const load = (init) => {
    const config = Object.assign(settings, init);
    const edith = document.getElementById(config.edithId);

    // Text formatting via commandexec wrapper
    const run = (command, prop = null) => Array.isArray(command) ?
        document.execCommand(command[0], false, command[1]) :
        document.execCommand(command, false, prop);

    // Text format actions. Each subarray is a section of a menu
    const menu = document.createElement("DIV");
    menu.className = config.menuClassName;

    // Acton buttons blocks builder
    buttons.forEach(a => {
        const section = document.createElement("DIV");
        section.className = config.sectionClassName;
        a.forEach(b => {
            const button = document.createElement("DIV");
            button.className = config.buttonClassName;
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

    // Main input field
    const inputField = document.createElement("DIV");
    inputField.className = config.contentClassName;
    inputField.contentEditable = true;
    edith.appendChild(inputField);
    edith.appendChild(menu);
};