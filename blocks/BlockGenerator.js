import Lee from "./Lee"
import Line from "./Line"
import Zee from "./Zee"
import Tee from "./Tee"
import Square from "./Square"


class BlockGenerator {
  getRandomBlockObject(){
    var number = Math.random(), generatedBlock
    if(number<=0.20){
      generatedBlock = new Lee()
    }else if(number>0.20 && number <= 0.40){
      generatedBlock = new Line()
    }else if(number>0.40 && number <= 0.60){
      generatedBlock = new Zee()
    }else if(number>0.60 && number <= 0.80){
      generatedBlock = new Tee()
    }else{
      generatedBlock = new Square()
    }
    return generatedBlock
  }
}

export default BlockGenerator