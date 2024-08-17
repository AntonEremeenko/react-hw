import React from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

class MarkdownEditor extends React.Component {
    componentDidMount() {
        this.editor = new Editor({
            el: document.querySelector('#editor'),
            hideModeSwitch: true,
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: '500px',
        });

        // Добавляем хук для отслеживания изменений
        this.editor.addHook('change', () => {
            const content = this.editor.getMarkdown();
            this.props.onContentChange(content);
        });
    }

    componentWillUnmount() {
        if (this.editor) {
            this.editor.destroy();
        }
    }

    render() {
        return <div id="editor"></div>;
    }
}

export default MarkdownEditor;

