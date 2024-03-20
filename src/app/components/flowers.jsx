"use client"
import { NextReactP5Wrapper } from "@p5-wrapper/next";

export default function Sketch({backgroundColor, frameRate}){
    
    function drawing(p5){
    
        const width = 1800
        const height = 800
        const grid = createGrid(width/10, height/10)
    
        
        function createGrid(width, height){
            let grid = []
        
            for (let x = 0; x < width; x++){
                grid.push([])
                for (let y = 0; y < height; y++){
                    grid[x].push([0, false])
                }
            }
    
            return grid
        }
    
        function setGridCell(x, y, colorNumber){
            const NOT_INSIDE = ((x > width/10 - 1 || x < 1) || (y > height/10 - 1  || y < 1))
            if(NOT_INSIDE) return
            grid[x][y][0] = colorNumber
            grid[x][y][1] = true
        }
    
        function updateGrid(ruleNumber){
        
            for (let x = 1; x < grid.length - 1; x++){
                for (let y = 1; y < grid[x].length -1; y++){
                    if(grid[x][y][1] === false){
                        rule(ruleNumber, [x,y], {
                            up: [x, y-1], 
                            down: [x, y+1], 
                            left: [x-1, y], 
                            right: [x+1, y], 
                            upLeft: [x-1, y-1], 
                            upRight: [x+1, y-1], 
                            downLeft: [x-1, y+1],
                            downRight: [x+1, y+1] 
                        })
                    } 
                }
            }
    
            for (let x = 0; x < grid.length; x++){
                for (let y = 0; y < grid[x].length; y++){
                    grid[x][y][1] = false
                }
            }
        }

        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        
        let stemCount = 0
        let flowerCount = 0
        function rule(ruleNumber, cell, neighbors){
            
            const upClear = (grid[neighbors.up[0]][neighbors.up[1]][0] === 0 && 
                grid[neighbors.upLeft[0]][neighbors.upLeft[1]][0] === 0 && 
                grid[neighbors.upRight[0]][neighbors.upRight[1]][0] === 0 && (
                grid[neighbors.right[0]][neighbors.right[1]][0] === 0 ||
                grid[neighbors.left[0]][neighbors.left[1]][0] === 0))
               
            
            let randNum = getRandomIntInclusive(0,5)

            if( ruleNumber === 0 ) {
                if (grid[cell[0]][cell[1]][0] === 2 && upClear){
                    setGridCell(neighbors.upLeft[0], neighbors.upLeft[1], 3)
                    setGridCell(neighbors.upRight[0], neighbors.upRight[1], 3)
                    setGridCell(neighbors.downLeft[0], neighbors.downLeft[1], 3)
                    setGridCell(neighbors.downRight[0], neighbors.downRight[1], 3)
                }

                if(grid[cell[0]][cell[1]][0] === 1 && upClear ){
                    if(randNum === 0){setGridCell(neighbors.upLeft[0], neighbors.upLeft[1], 1)}
                    if(randNum === 1){setGridCell(neighbors.up[0], neighbors.up[1], 1)}
                    if(randNum === 2){setGridCell(neighbors.upRight[0], neighbors.upRight[1], 1)}
                    if(randNum === 4 && stemCount > 2){
                        setGridCell(neighbors.upLeft[0], neighbors.upLeft[1], 2)
                        stemCount = 0
                    }
                    if (randNum === 5){
                        setGridCell(neighbors.upLeft[0], neighbors.upLeft[1], 1)
                        setGridCell(neighbors.upRight[0], neighbors.upRight[1], 1)
                    }
                    stemCount++ 
                }
            }
            if (ruleNumber === 1){
                if (grid[cell[0]][cell[1]][0] === 2 && upClear ){
                    setGridCell(neighbors.left[0], neighbors.left[1], 4)
                    setGridCell(neighbors.right[0], neighbors.right[1], 4)
                    setGridCell(neighbors.down[0], neighbors.down[1], 4)
                    setGridCell(neighbors.up[0], neighbors.up[1], 4)
                }

                if(grid[cell[0]][cell[1]][0] === 1 && upClear ){
                    if(randNum === 0){setGridCell(neighbors.upLeft[0], neighbors.upLeft[1], 1)}
                    if(randNum === 1){setGridCell(neighbors.up[0], neighbors.up[1], 1)}
                    if(randNum === 2){setGridCell(neighbors.upRight[0], neighbors.upRight[1], 1)}
                    if(randNum === 4 && stemCount > 5){
                        setGridCell(neighbors.upLeft[0], neighbors.upLeft[1], 2)
                        stemCount = 0
                    }
                    if (randNum === 5){
                        setGridCell(neighbors.upLeft[0], neighbors.upLeft[1], 1)
                        setGridCell(neighbors.upRight[0], neighbors.upRight[1], 1)
                    }
                    stemCount++ 
                }
            }
            let randFlower = getRandomIntInclusive(0,1)
            if (ruleNumber === 2){
                
                if (grid[cell[0]][cell[1]][0] === 5){
                    if(upClear && flowerCount < 3){
                        if(randFlower === 0){setGridCell(neighbors.upRight[0], neighbors.upRight[1], 5)}
                        if(randNum === 1){setGridCell(neighbors.upLeft[0], neighbors.upLeft[1], 5)}
                        flowerCount++
                    }else if(upClear){
                        setGridCell(neighbors.up[0], neighbors.up[1], 3)
                        setGridCell(neighbors.upLeft[0], neighbors.upLeft[1], 3)
                        setGridCell(neighbors.upRight[0], neighbors.upRight[1], 3)
                        flowerCount = 0
                    }
                    
                }

                if(grid[cell[0]][cell[1]][0] === 1 && upClear ){
                    if(randNum === 0){setGridCell(neighbors.upLeft[0], neighbors.upLeft[1], 1)}
                    if(randNum === 1){setGridCell(neighbors.up[0], neighbors.up[1], 1)}
                    if(randNum === 2){setGridCell(neighbors.upRight[0], neighbors.upRight[1], 1)}
                    if(randNum === 4 && stemCount > 5){
                        setGridCell(neighbors.upLeft[0], neighbors.upLeft[1], 5)
                        stemCount = 0
                    }
                    if (randNum === 5){
                        setGridCell(neighbors.upLeft[0], neighbors.upLeft[1], 1)
                        setGridCell(neighbors.upRight[0], neighbors.upRight[1], 1)
                    }
                    stemCount++ 
                }
            }
        }
        

        function drawCells(){
            let size = 9

            const GREEN = p5.color("#1ee387")
            const YELLOW = p5.color("#f5e90c")
            const PINK = p5.color("#FF2CFA")
            const BLUE = p5.color("#21d6ff")
            const PURPLE = p5.color("#835EB4")
            const BLACK = p5.color('#292828')

            for (let x = 0; x < grid.length; x++){
                for (let y = 0; y < grid[x].length; y++){
                    if(grid[x][y][0] === 0){
                        p5.fill(0,0,0,0)
                    }
                    if(grid[x][y][0] === 1){
                        p5.fill(GREEN)  
                    }
                    if(grid[x][y][0] === 2){
                        p5.fill(YELLOW)
                    }
                    if(grid[x][y][0] === 3){
                        p5.fill(PINK)
                    }
                    if(grid[x][y][0] === 4){
                        p5.fill(BLUE)
                    }
                    if(grid[x][y][0] === 5){
                        p5.fill(PURPLE)
                    }
                    if(grid[x][y][0] === 6){
                        p5.fill(BLACK)
                    }
                    

                    p5.noStroke()
                    p5.rect(x * 10, y * 10, size, size)
                }
            }
        }
         
        let ruleNum = 0

        
        p5.setup = () => {
            p5.createCanvas(width, height)
            p5.frameRate(frameRate)
        }


        p5.draw = () => {
            p5.background(p5.color(backgroundColor))
            updateGrid(ruleNum)
            drawCells()
            p5.fill(p5.color("#1ee387"))
            p5.rect(Math.round(p5.mouseX/10 -1) * 10, Math.round(p5.mouseY/10 -1 )* 10, 10,10)
        }
        
        p5.mouseReleased = () => {
            setGridCell(Math.round(p5.mouseX/10 -1), Math.round(p5.mouseY/10 -1 ), 1)
            ruleNum = (1+ ruleNum)%3
        }

    }

    return <NextReactP5Wrapper sketch={drawing} />
}