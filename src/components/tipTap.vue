<template>
    <form class="title">
        <el-input
                placeholder="Заголовок"
                v-model="title"
        >
        </el-input>
        <el-input class="btn_submit" @click.prevent="addNewTodo" type="submit" value="Add"></el-input>
    </form>
    <el-tiptap
            v-model:content="content"
            :extensions="extensions"
            :key="componentKey"
            :enable-char-count="true"
            lang="ru"
            placeholder="Напишите что-то..."
            @onUpdate="onEditorUpdate"
    />

    {{ content }}
    {{ title }}
</template>
<script>
  import { ref ,reactive} from "vue";
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

  export default {
    name: "AddTodo",
    setup() {
      const store = useStore();
      const title = ref("");
      const content =  ref("");
      const componentKey = ref(0);

      const notify = () => {
        toast.success("Заметка добавлена!", {
          autoClose: 1000,
          theme:"colored"
        }); // ToastOptions
      }


      const addNewTodo = () => {
        // e.preventDefault();
        // store.dispatch("onAddTodo", {
        //   title: title.value,
        //   content: content.value
        // });
        title.value = "";
        content.value = "";
        componentKey.value += 1;
        notify();
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
    .tippy-box {
        display: none;
    }
    .title {
        display: flex;
    }

    .btn_submit {
        width: 20%;
    }
</style>
