class Renderer {
  constructor(grid){
    this.grid = grid
    this.gameElement = this.getGridElement()
    this.gameGrid = document.createElement("div")
    this.nextElement = document.createElement("div")
    this.playPause = document.createElement("div")  
  }

  getGridElement(){
    var gameElement = document.getElementById("game")

    return gameElement
  }

  getNextElement(){
    var getNextElement
  }

  getPlayPauseButton(){

  }

  drawGrid(grid, state){
  	this.gameElement.addChild

  }
}