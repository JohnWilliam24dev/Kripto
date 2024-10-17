import React,{useState} from 'react'
import "./Editor2.css"
function Editor2() {
  const [fontSize, setFontSize] = useState(12);
  const handleFontSizeChange = (e) => {
    const value = parseInt(e.target.value); // Converte o valor do input para número inteiro
    if (!isNaN(value)) {
      setFontSize(value); // Atualiza o estado do tamanho da fonte
    }
  };





  
  return (
    <div className='body_editor'>
      <nav className='editor_bar'>
      <button onClick={() => setFontSize(fontSize - 1)}>-</button>
        
        <input
          className='input'
          id="fontSizeInput"
          type="number" 
          value={fontSize} 
          onChange={handleFontSizeChange} 
        />
        <button onClick={() => setFontSize(fontSize + 1)}>+</button>
      </nav>
      <div className='textarea_content'>
      <div
        contentEditable
        name="" 
        id="texto"
        style={{ fontSize: `${fontSize}pt` }}
        ></div>
      </div>

        
    </div>
  )
}

export default Editor2