const edith = document.getElementById("edith");
const inputField = document.createElement("DIV");
inputField.className = "edith-content";
inputField.contentEditable = true;
inputField.onkeydown = e => {
    e.which === 9 && event.preventDefault()
};
const menu = document.createElement("DIV");
menu.className = "edith-menu";



const run = (command, prop = null) => {
    if (Array.isArray(command)) {
        return document.execCommand(command[0], false, command[1]);
    }
    document.execCommand(command, false, prop);
}

const buttons = [{
        command: ['formatBlock', '<P>'],
        caption: '<b>A</b>',
        tooltip: 'Normal'
    },
    {
        command: 'bold',
        caption: '<b>B</b>',
        tooltip: 'Bold'
    },
    {
        command: 'italic',
        caption: '<i>I</i>',
        tooltip: 'Italic'
    }, {
        command: 'underline',
        caption: '<u>U</u>',
        tooltip: 'Underline'
    }, {
        command: ['formatBlock', '<PRE>'],
        caption: '<b>&lt;/&gt;</b>',
        tooltip: 'Code'
    }
];

buttons.forEach(b => {
    const button = document.createElement("DIV");
    button.className = "edith-button";
    button.innerHTML = b.caption;
    button.title = b.tooltip;
    button.onmousedown = e => {
        e.preventDefault();
        run(b.command)
    };
    menu.appendChild(button);
});

edith.appendChild(menu);
edith.appendChild(inputField);

const saveText = () => console.log(String(inputField.innerHTML))
document.getElementById("edith-save").onclick = saveText;