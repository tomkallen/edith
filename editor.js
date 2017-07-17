// Editor holder div
const edith = document.getElementById("edith");

// Text formatting via commandexec wrapper
const run = (command, prop = null) => Array.isArray(command) ?
    document.execCommand(command[0], false, command[1]) :
    document.execCommand(command, false, prop);

// Text format actions. Each subarray is a section of a menu
const menu = document.createElement("DIV");
menu.className = "edith-menu";
const buttons = [
    [{
            command: ['formatBlock', '<P>'],
            caption: '<p>A</p>',
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
        },
        {
            command: 'strikeThrough',
            caption: '<strike>S</strike>',
            tooltip: 'Strike Through'
        }
    ],
    [{
            command: ['formatBlock', '<PRE>'],
            caption: '<b>&lt;&nbsp;&gt;</b>',
            tooltip: 'Code'
        },
        {
            command: ['formatBlock', '<BLOCKQUOTE>'],
            caption: '<b>&#8220;&#8221;</b>',
            tooltip: 'Quote'
        }
    ],
    [{
            command: ['formatBlock', '<H1>'],
            caption: '<p>H1</p>',
            tooltip: 'H1'
        },
        {
            command: ['formatBlock', '<H2>'],
            caption: '<p>H2</p>',
            tooltip: 'H2'
        },
        {
            command: ['formatBlock', '<H3>'],
            caption: '<p>H3</p>',
            tooltip: 'H3'
        },
        {
            command: ['formatBlock', '<H4>'],
            caption: '<p>H4</p>',
            tooltip: 'H4'
        }
    ]
];

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