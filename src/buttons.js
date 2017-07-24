export const buttons = [
  [
    {
      command: ["formatBlock", "<P>"],
      caption: "<p>P</p>",
      tooltip: "Paragraph"      
    },
    {
      command: "bold",
      caption: "<b>B</b>",
      tooltip: "Bold Ctrl+B",
      key: "b"
    },
    {
      command: "italic",
      caption: "<i>I</i>",
      tooltip: "Italic Ctrl+I",
      key: "i"
    },
    {
      command: "underline",
      caption: "<u>U</u>",
      tooltip: "Underline Ctrl+U",
      key: "u"
    },
    {
      command: "strikeThrough",
      caption: "<strike>S</strike>",
      tooltip: "Strike Through"      
    }
  ],
  [
    {
      command: ["formatBlock", "<PRE>"],
      caption: "<b>&lt;&nbsp;&gt;</b>",
      tooltip: "Code"
    },
    {
      command: ["formatBlock", "<BLOCKQUOTE>"],
      caption: "<b>&#8220;&#8221;</b>",
      tooltip: "Quote"
    }
  ],
  [
    {
      command: ["formatBlock", "<H1>"],
      caption: "<p>H1</p>",
      tooltip: "H1"
    },
    {
      command: ["formatBlock", "<H2>"],
      caption: "<p>H2</p>",
      tooltip: "H2"
    },
    {
      command: ["formatBlock", "<H3>"],
      caption: "<p>H3</p>",
      tooltip: "H3"
    },
    {
      command: ["formatBlock", "<H4>"],
      caption: "<p>H4</p>",
      tooltip: "H4"
    }
  ]
];
