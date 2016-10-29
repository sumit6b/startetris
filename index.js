import BlockGenerator from "./blocks/BlockGenerator"
import GameGrid from "./GameGrid"
import Renderer from "./Renderer"
import KeyBoardEventHandler from "./KeyBoardEventHandler"

class Game {
  constructor(){
    this.gameState = "started"
    this.gameGrid = new GameGrid(20,10)
    this.renderer = new Renderer(this.gameGrid)
    this.renderer.drawGrid(this.gameGrid, this.gameState)
    KeyBoardEventHandler.init()
  }

  setGameState(state){
    this.gameState = state
    this.renderer.drawGrid(this.gameGrid, this.gameState)
  }

  getGameState(){
    return this.gameState
  }

  isGamePaused(){
    return this.getGameState()=="paused"
  }

  refreshGameGrid(){
    if(!this.gameGrid.isGameOver()){
      if(this.currentBlock.ifEndReached(this.gameGrid)){
        this.gameGrid.clearOutLinesIfAny()
      }else if(!this.isGamePaused()){
        this.currentBlock.pushDown(this.gameGrid)
      }else {
        //game paused do nothing
      }
    }else{
      this.setGameState("finished")
    }
  }

  main(){

    this.currentBlock = BlockGenerator.getRandomBlockObject()
    this.nextBlock = BlockGenerator.getRandomBlockObject()
    setInterval( refreshGameGrid, 1000)
  }
}

var game = new Game()
game.main()
