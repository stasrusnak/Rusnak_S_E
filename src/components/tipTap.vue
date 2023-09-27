<template>
    <form class="title">
        <el-input placeholder="Заголовок" v-model="title"> </el-input>
        <el-button class="btn_submit" type="success" @click.prevent="addNewTodo">Add</el-button>
    </form>
    <el-tiptap
            v-model="content"
            :extensions="extensions"
            :key="componentKey"
            :enable-char-count="true"
            lang="ru"
            placeholder="Напишите что-то..."
            @onUpdate="onEditorUpdate"
    />
</template>
<script>
  import { ref } from "vue";
  import { useStore } from "vuex";
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
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';
  import {notifySuccess,notifyWarning} from '../utils/toast.js'

  export default {
    name: "AddTodo",
    setup() {
      const store = useStore();
      const title = ref("");
      const content =  ref("");
      const componentKey = ref(0);

      const addNewTodo = () => {
        if( title.value && content.value) {
          store.dispatch("onAdd", {
            title: title.value,
            content: content.value,
            complete: false
          });
          title.value = "";
          content.value = "";
          componentKey.value += 1;
          notifySuccess("Заметка добавлена!");
        }else{
          notifyWarning("Заполните поля");
        }



      };
      const onEditorUpdate = val => content.value = val;

      const extensions = [
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
      ]

      return {
        title,
        content,
        addNewTodo,
        extensions,
        componentKey,
        onEditorUpdate
      };
    }
  };
</script>

<style scoped>

    .title {
        display: flex;
    }

    .btn_submit {
        width: 20%;
    }
</style>
