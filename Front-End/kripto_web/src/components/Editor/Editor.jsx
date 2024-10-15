import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importa os estilos padrão do Quill
import "./Editor.css";

function Editor() {
  const [content, setContent] = useState(
    localStorage.getItem("note") 
  );

  // Função para salvar o conteúdo no localStorage
  const saveContent = () => {
    localStorage.setItem("note", content);
    alert("Nota salva!");
  };

  return (
    <div className="App">
      <div className="editor-container">
        <ReactQuill
          theme="snow" // Tema de neve (o mais comum)
          value={content} // Define o conteúdo do editor
          onChange={setContent} // Atualiza o estado ao modificar o texto
          modules={modules} // Configurações do editor (opcional)
          formats={formats} // Formatos permitidos (opcional)
          placeholder="Escreva aqui seu texto..."
          
        />
        <button className="button_editor" onClick={saveContent}>Salvar Nota</button>
      </div>
    </div>
  );
}

// Módulos: ferramentas disponíveis no editor
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ size: ["12px", "16px", "20px", "24px"] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image", "code-block"],
  ],
};

// Formatos permitidos no editor
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
  "image",
  "color",
  "background",
  "align",
  "code-block",
];

export default Editor;

