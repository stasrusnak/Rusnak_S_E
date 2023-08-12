<template>
    <el-tiptap
            :content="content"
            :extensions="extensions"
            :enable-char-count="false"
            lang="en"
            placeholder="Напишите что-то..."
            @onUpdate="onEditorUpdate"
    />

    {{ content }}
</template>

<script>
  import {
    Doc,
    Text,
    Paragraph,
    Heading,
    Bold,
    Underline,
    Italic,
    TextAlign,
    FontSize,
    Image,
    Strike,
    BulletList,
    OrderedList,
    Table,
    Link,
    Iframe,
    CodeBlock,
    Blockquote,
    TaskList,
    Indent,
    LineHeight,
    HorizontalRule,
    HardBreak,
    History,
    FormatClear,
    Color,
    Highlight,
    Fullscreen,
    SelectAll,
    FontFamily,
    Gapcursor
  } from "element-tiptap-vue3-fixed";
  export default {
    name: "App",
    components: {},
    data() {
      return {
        extensions: [
          Doc,
          Text,
          Paragraph,
          Bold,
          Underline.configure({ bubble: true }),
          Italic.configure({ bubble: true }),
          TextAlign.configure({ bubble: true }),
          FontSize,
          Heading,
          Image,
          Strike,
          BulletList,
          OrderedList,
          Table.configure({ resizable: true }),
          Link,
          Iframe,
          CodeBlock,
          Blockquote,
          TaskList,
          Indent,
          LineHeight,
          HorizontalRule,
          HardBreak,
          History,
          FormatClear,
          Color,
          Highlight,
          Fullscreen,
          SelectAll,
          FontFamily,
          Gapcursor
        ],
        content: ``,
      };
    },
    methods: {
      onEditorUpdate(val) {
        this.content = val;
      },
    },
  };
</script>

<style>
    .tippy-box {
        display: none;
    }
</style>
