class KeyBoardEventHandler {
  init(){
    document.addEventListener("keyup", (event)=>{
      console.log(event);
    }, false)
  }
}

export default KeyBoardEventHandler