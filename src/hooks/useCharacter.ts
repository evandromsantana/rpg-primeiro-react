import { useState } from 'react';
import { CharacterSides } from '../types/CharacterSides';
import { mapSpots } from '../data/mapSpots';

export const useCharacter = () => {
    const [pos, setPos] = useState({ x: 3, y: 5 });
    const [side, setSide] = useState<CharacterSides>('down');

    //mover para esquerda
    const moveLeft = () => {
        setPos(pos => ({
            x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x, 
            y: pos.y
        }));              
        setSide('left');
    }
    //mover para direita
    const moveRight = () => {
        setPos(pos => ({
            x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x, 
            y: pos.y
        }));    
        setSide('right');
    }
    //Mover para baixo
    const moveDown = () => {
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y + 1) ? pos.y + 1 : pos.y
        }));
        setSide('down');
    }
    //Mover para cima
    const moveUp = () => {
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y
        }));
        setSide('up');
    }

    //função para verificar se pode mover o boneco
    const canMove = (x: number, y: number) => {   
        if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
            return (mapSpots[y][x] === 1);
        }        
        return false;
    }

    return {
        x: pos.x,
        y: pos.y, 
        side,
        moveLeft, 
        moveRight,  
        moveDown,
        moveUp
    };
}