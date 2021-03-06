import Depth from "./Depth"
import Estado from "./Estado"

const labirinto = [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '0', '0', '0', '#', '0', '0', '0', '#', '0', '0', '#'],
    ['#', '#', '#', '0', '0', '0', '#', '0', '0', '0', '#', '#'],
    ['#', '0', '0', '0', '#', '0', '#', '0', '#', '0', '0', '#'],
    ['#', '#', '0', '#', '#', '0', '#', '0', '#', '#', '0', '#'],
    ['#', '#', '0', '#', '0', '0', '0', '#', '0', '0', '0', '#'],
    ['#', '0', '0', '#', '0', '#', '0', '#', '#', '0', '#', '#'],
    ['#', '0', '#', '0', '#', '0', '0', '0', '#', '0', '0', '#'],
    ['#', '0', '#', '0', '#', '0', '#', '0', '#', '0', '#', '#'],
    ['#', '0', '#', '0', '#', '0', '#', '0', '#', '0', '#', '#'],
    ['#', '0', '0', '0', '0', '#', '0', '0', '#', '0', '0', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '0', '#'],
]

const depth = new Depth()
const estadoInicial = new Estado(1,1)
const estadoFinal = new Estado(labirinto.length-1, labirinto.length-2)

depth.search(estadoInicial, labirinto, estadoFinal)