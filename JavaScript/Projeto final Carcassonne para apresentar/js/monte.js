import { allTiles, 
    castleCenterEntry, castleCenterSide, castleCenterSides,
    castleEdge, castleMini,
    castleSidesEdge, castleSidesEdgeRoad,
    castleTube, castleTubeEntry,
    castleWall, castleWallCurveLeft, castleWallCurveRight,
    castleWallEntry, castleWallEntryLeft, castleWallEntryRight,
    castleWallJunction, castleWallRoad,
    monasteryRoad, road, roadCrossSmall, roadCurve, roadEnd, 
    roadJunctionSmall, castleSides,castleSidesRoad,castleTubeEntries
} from './tiles.js'

const monte = []

function addCopies(tile, quantidade) {
    for (let i = 0; i < quantidade; i++) {
        monte.push(tile)
    }
}

// 1. Adiciona 1 peça de cada agrupamento (ou quantas quiser)
addCopies(castleCenterEntry[0], 1)
addCopies(castleCenterSide[0], 1)
addCopies(castleCenterSides[0], 1)
addCopies(castleEdge[0], 1)
addCopies(castleMini[0], 1)
addCopies(castleSidesEdge[0], 1)
addCopies(castleSidesEdgeRoad[0], 1)
addCopies(castleTube[0], 1)
addCopies(castleTubeEntry[0], 0)
addCopies(castleWall[0], 0)
addCopies(castleWallCurveLeft[0], 0)
addCopies(castleWallCurveRight[0], 0)
addCopies(castleWallEntry[0], 0)
addCopies(castleWallEntryLeft[0], 0)
addCopies(castleWallEntryRight[0], 0)
addCopies(castleWallJunction[0], 0)
addCopies(castleWallRoad[0], 0)
addCopies(monasteryRoad[0], 0)
addCopies(road[0], 0)
addCopies(roadCrossSmall[0], 0)
addCopies(roadCurve[0], 0)
addCopies(roadEnd[0], 0)
addCopies(roadJunctionSmall[0], 0)
addCopies(castleSides[0], 0)
addCopies(castleSidesRoad[0], 0)
addCopies(castleTubeEntries[0], 0)

// 2. Define quantidades das peças individuais (que não estão nos agrupamentos)
const quantidadeIndividual = {
    castleCenter0: 1,
    castleSidesQuad0: 1,
    monastery0: 0,
    monasteryJunction0: 1,
    roadCrossLarge0: 1
}

// 3. Adiciona as peças individuais de acordo com a configuração
for (let key in quantidadeIndividual) {
    if (allTiles[key]) {
        addCopies(allTiles[key], quantidadeIndividual[key])
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

shuffle(monte)
export default monte