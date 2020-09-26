import Estado from "./Estado"

export default class Depth {
    
    private visitados: Estado[]

    constructor() {
        this.visitados = []
    }
    
    public search(estado: Estado, lab: string[][], estado_final: Estado) {
        
        
        if(this.visitados.filter( (stdo) => {
            if((stdo.getX() === estado.getX()) && (stdo.getY() === estado.getY())) {
                return true
            } else {
                return false
            }
        }).length > 0) {
            return
        }
        
        this.visitados.push(new Estado(estado.getX(), estado.getY()))

        if(estado.getX() === estado_final.getX() && estado.getY() === estado_final.getY()) {
            console.log('Achei a saída')
            console.log(this.toString(estado, lab, estado_final))
            process.exit()
        }

        console.log(this.toString(estado, lab, estado_final))

        this.search(this.mover_baixo(estado, lab), lab, estado_final)
        this.search(this.mover_direita(estado, lab), lab, estado_final)
        this.search(this.mover_cima(estado, lab), lab, estado_final)
        this.search(this.mover_esquerda(estado, lab), lab, estado_final)
        
    }
    

    private mover_baixo(estado: Estado, lab: string[][]) {
        if(lab[estado.getX()+1][estado.getY()] !== '#') {
            lab[estado.getX()][estado.getY()] = '2'
            return new Estado(estado.getX()+1, estado.getY())
        } else {
            return estado
        }
    }
    
    private mover_direita(estado: Estado, lab: string[][]) {
        if(lab[estado.getX()][estado.getY()+1] !== '#') {
            lab[estado.getX()][estado.getY()+1] = '2'
            return new Estado(estado.getX(), estado.getY()+1)
        } else {
            return estado
        }
    }

    private mover_cima(estado: Estado, lab: string[][]) {
        if(lab[estado.getX()-1][estado.getY()] !== '#') {
            lab[estado.getX()-1][estado.getY()] = '2'
            return new Estado(estado.getX()-1, estado.getY())
        } else {
            return estado
        }
    }

    private mover_esquerda(estado: Estado, lab: string[][]) {
        if(lab[estado.getX()][estado.getY()-1] !== '#') {
            lab[estado.getX()][estado.getY()-1] = '2'
            return new Estado(estado.getX(), estado.getY()-1)
        } else {
            return estado
        }
    }

    private toString(estado: Estado, lab: string[][], posicao_final: Estado) {
        let resultado = ''
        let parede = '▒'
        parede += parede

        for(let i = 0; i < lab.length; i++) {
            for(let j = 0; j < lab[i].length; j ++){
                let atual = lab[i][j]
                if(i === estado.getX() && j === estado.getY()) {
                    resultado += 'LS'
                } else if(i === posicao_final.getX() && j === posicao_final.getY()) {
                    resultado += '__'
                }else if (atual == '0') {
                    resultado += '  '
                } else if (atual == '#') {
                    resultado += parede
                } else if (atual == '2') {
                    resultado  += '**'
                }
            }
            resultado += '\n'
        }
        return resultado
    }
}