import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import { MarkdownToolbar } from "./MarkodownToolbar";
import MarkdownShortcuts from "quill-markdown-shortcuts";
// import "quill-markdown-toolbar/dist/markdownToolbar.min.js";

// Quill.register({ "modules/markdown-toolbar": MarkdownToolbar });
Quill.register("modules/markdownShortcuts", MarkdownShortcuts);

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline", "color", "strike"],
      ["link", "image", "video"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["clean"],
    ],
  },
  markdownShortcuts: {},
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const RichTextEditor = ({ field }) => {
  /*constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }*/
  const { text, setText } = useState(field.value);

  //const handleChange = value => setText({ text: value });
  const handleChange = (value) => {
    console.log("field: ", field.value);
    console.log("content is now: ", value);
    return setText({ text: value });
  };

  return (
    <ReactQuill
      style={{
        backgroundColor: "#fff",
        color: "#000",
      }}
      theme="snow"
      value={field.value}
      formats={formats}
      modules={modules}
      onChange={field.onChange(field.name)}
    />
  );
};

export default RichTextEditor;
