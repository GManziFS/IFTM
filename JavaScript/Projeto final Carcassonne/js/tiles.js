class Tile{
    constructor(img, conteudo = {}){
        this.img = img
        this.conteudo = conteudo
    }    
}

/*
1 = grama
2 = estrada
3 = cidade
4 = monasterio
*/

const castleCenter0 = new Tile(
    'img/tiles/CastleCenter0.png',
    {topo: 3, direita: 3, baixo: 3, esquerda: 3, centro: 3}
)

const castleCenterEntry0 = new Tile(
    'img/tiles/CastleCenterEntry0.png',
    {topo: 3, direita: 3, baixo: 2, esquerda: 3, centro: 3}
)

const castleCenterEntry1 = new Tile(
    'img/tiles/CastleCenterEntry1.png',
    {topo: 3, direita: 3, baixo: 3, esquerda: 2, centro: 3}
)

const castleCenterEntry2 = new Tile(
    'img/tiles/CastleCenterEntry2.png',
    {topo: 2, direita: 3, baixo: 3, esquerda: 3, centro: 3}
)

const castleCenterEntry3 = new Tile(
    'img/tiles/CastleCenterEntry3.png',
    {topo: 3, direita: 2, baixo: 3, esquerda: 3, centro: 3}
)

const castleCenterSide0 = new Tile(
    'img/tiles/CastleCenterSide0.png',
    {topo: 3, direita: 3, baixo: 1, esquerda: 3, centro: 3}
)

const castleCenterSide1 = new Tile(
    'img/tiles/CastleCenterSide1.png',
    {topo: 3, direita: 3, baixo: 3, esquerda: 1, centro: 3}
)

const castleCenterSide2 = new Tile(
    'img/tiles/CastleCenterSide2.png',
    {topo: 1, direita: 3, baixo: 3, esquerda: 3, centro: 3}
)

const castleCenterSide3 = new Tile(
    'img/tiles/CastleCenterSide3.png',
    {topo: 3, direita: 1, baixo: 3, esquerda: 3, centro: 3}
)

const castleCenterSides0 = new Tile(
    'img/tiles/CastleCenterSides0.png',
    {topo: 1, direita: 1, baixo: 3, esquerda: 1, centro: 3}
)

const castleCenterSides1 = new Tile(
    'img/tiles/CastleCenterSides1.png',
    {topo: 1, direita: 1, baixo: 1, esquerda: 3, centro: 3}
)

const castleCenterSides2 = new Tile(
    'img/tiles/CastleCenterSides2.png',
    {topo: 3, direita: 1, baixo: 1, esquerda: 1, centro: 3}
)

const castleCenterSides3 = new Tile(
    'img/tiles/CastleCenterSides3.png',
    {topo: 1, direita: 3, baixo: 1, esquerda: 1, centro: 3}
)

const castleEdge0 = new Tile(
    'img/tiles/CastleEdge0.png',
    {topo: 3, direita: 3, baixo: 1, esquerda: 1, centro: 3}
)

const castleEdge1 = new Tile(
    'img/tiles/CastleEdge1.png',
    {topo: 1, direita: 3, baixo: 3, esquerda: 1, centro: 3}
)

const castleEdge2 = new Tile(
    'img/tiles/CastleEdge2.png',
    {topo: 1, direita: 1, baixo: 3, esquerda: 3, centro: 3}
)

const castleEdge3 = new Tile(
    'img/tiles/CastleEdge3.png',
    {topo: 3, direita: 1, baixo: 1, esquerda: 3, centro: 3}
)

const castleMini0 = new Tile(
    'img/tiles/CastleMini0.png',
    {topo: 1, direita: 1, baixo: 2, esquerda: 1, centro: 3}
)

const castleMini1 = new Tile(
    'img/tiles/CastleMini1.png',
    {topo: 1, direita: 1, baixo: 1, esquerda: 2, centro: 3}
)

const castleMini2 = new Tile(
    'img/tiles/CastleMini2.png',
    {topo: 2, direita: 1, baixo: 1, esquerda: 1, centro: 3}
)

const castleMini3 = new Tile(
    'img/tiles/CastleMini3.png',
    {topo: 1, direita: 2, baixo: 1, esquerda: 1, centro: 3}
)

const castleSides0 = new Tile(
    'img/tiles/CastleSides0.png',
    {topo: 3, direita: 1, baixo: 3, esquerda: 1, centro: 1}
)

const castleSides1 = new Tile(
    'img/tiles/CastleSides1.png',
    {topo: 1, direita: 3, baixo: 1, esquerda: 3, centro: 1}
)

const castleSidesEdge0 = new Tile(
    'img/tiles/CastleSidesEdge0.png',
    {topo: 3, direita: 1, baixo: 1, esquerda: 3, centro: 1}
)

const castleSidesEdge1 = new Tile(
    'img/tiles/CastleSidesEdge1.png',
    {topo: 3, direita: 3, baixo: 1, esquerda: 1, centro: 1}
)

const castleSidesEdge2 = new Tile(
    'img/tiles/CastleSidesEdge2.png',
    {topo: 1, direita: 3, baixo: 3, esquerda: 1, centro: 1}
)

const castleSidesEdge3 = new Tile(
    'img/tiles/CastleSidesEdge3.png',
    {topo: 1, direita: 1, baixo: 3, esquerda: 3, centro: 1}
)

const castleSidesEdgeRoad0 = new Tile(
    'img/tiles/CastleSidesEdgeRoad0.png',
    {topo: 3, direita: 2, baixo: 2, esquerda: 3, centro: 2}
)

const castleSidesEdgeRoad1 = new Tile(
    'img/tiles/CastleSidesEdgeRoad1.png',
    {topo: 3, direita: 3, baixo: 2, esquerda: 2, centro: 2}
)

const castleSidesEdgeRoad2 = new Tile(
    'img/tiles/CastleSidesEdgeRoad2.png',
    {topo: 2, direita: 3, baixo: 3, esquerda: 2, centro: 2}
)

const castleSidesEdgeRoad3 = new Tile(
    'img/tiles/CastleSidesEdgeRoad3.png',
    {topo: 2, direita: 2, baixo: 3, esquerda: 3, centro: 2}
)

const castleSidesQuad0 = new Tile(
    'img/tiles/CastleSidesQuad0.png',
    {topo: 3, direita: 3, baixo: 3, esquerda: 3, centro: 1}
)

const castleSidesRoad0 = new Tile(
    'img/tiles/CastleSidesRoad0.png',
    {topo: 3, direita: 2, baixo: 3, esquerda: 2, centro: 2}
)

const castleSidesRoad1 = new Tile(
    'img/tiles/CastleSidesRoad1.png',
    {topo: 2, direita: 3, baixo: 2, esquerda: 3, centro: 2}
)

const castleTube0 = new Tile(
    'img/tiles/CastleTube0.png',
    {topo: 1, direita: 3, baixo: 1, esquerda: 3, centro: 3}
)

const castleTube1 = new Tile(
    'img/tiles/CastleTube1.png',
    {topo: 3, direita: 1, baixo: 3, esquerda: 1, centro: 3}
)

const castleTube2 = new Tile(
    'img/tiles/CastleTube2.png',
    {topo: 1, direita: 3, baixo: 1, esquerda: 3, centro: 3}
)

const castleTube3 = new Tile(
    'img/tiles/CastleTube3.png',
    {topo: 3, direita: 1, baixo: 3, esquerda: 1, centro: 3}
)

const castleTubeEntries0 = new Tile(
    'img/tiles/CastleTubeEntries0.png',
    {topo: 2, direita: 3, baixo: 2, esquerda: 3, centro: 3}
)

const castleTubeEntries1 = new Tile(
    'img/tiles/CastleTubeEntries1.png',
    {topo: 3, direita: 2, baixo: 3, esquerda: 2, centro: 3}
)

const castleTubeEntry0 = new Tile(
    'img/tiles/CastleTubeEntry0.png',
    {topo: 1, direita: 3, baixo: 2, esquerda: 3, centro: 3}
)

const castleTubeEntry1 = new Tile(
    'img/tiles/CastleTubeEntry1.png',
    {topo: 3, direita: 1, baixo: 3, esquerda: 2, centro: 3}
)

const castleTubeEntry2 = new Tile(
    'img/tiles/CastleTubeEntry2.png',
    {topo: 2, direita: 3, baixo: 1, esquerda: 3, centro: 3}
)

const castleTubeEntry3 = new Tile(
    'img/tiles/CastleTubeEntry3.png',
    {topo: 3, direita: 2, baixo: 3, esquerda: 1, centro: 3}
)

const castleWall0 = new Tile(
    'img/tiles/CastleWall0.png',
    {topo: 3, direita: 1, baixo: 1, esquerda: 1, centro: 1}
)

const castleWall1 = new Tile(
    'img/tiles/CastleWall1.png',
    {topo: 1, direita: 3, baixo: 1, esquerda: 1, centro: 1}
)

const castleWall2 = new Tile(
    'img/tiles/CastleWall2.png',
    {topo: 1, direita: 1, baixo: 3, esquerda: 1, centro: 1}
)

const castleWall3 = new Tile(
    'img/tiles/CastleWall3.png',
    {topo: 1, direita: 1, baixo: 1, esquerda: 3, centro: 1}
)

const castleWallCurveLeft0 = new Tile(
    'img/tiles/CastleWallCurveLeft0.png',
    {topo: 3, direita: 1, baixo: 2, esquerda: 2, centro: 2}
)

const castleWallCurveLeft1 = new Tile(
    'img/tiles/CastleWallCurveLeft1.png',
    {topo: 2, direita: 3, baixo: 1, esquerda: 2, centro: 2}
)

const castleWallCurveLeft2 = new Tile(
    'img/tiles/CastleWallCurveLeft2.png',
    {topo: 2, direita: 2, baixo: 3, esquerda: 1, centro: 2}
)

const castleWallCurveLeft3 = new Tile(
    'img/tiles/CastleWallCurveLeft3.png',
    {topo: 1, direita: 2, baixo: 2, esquerda: 3, centro: 2}
)

const castleWallCurveRight0 = new Tile(
    'img/tiles/CastleWallCurveRight0.png',
    {topo: 3, direita: 2, baixo: 2, esquerda: 1, centro: 2}
)

const castleWallCurveRight1 = new Tile(
    'img/tiles/CastleWallCurveRight1.png',
    {topo: 1, direita: 3, baixo: 2, esquerda: 2, centro: 2}
)

const castleWallCurveRight2 = new Tile(
    'img/tiles/CastleWallCurveRight2.png',
    {topo: 2, direita: 1, baixo: 3, esquerda: 2, centro: 2}
)

const castleWallCurveRight3 = new Tile(
    'img/tiles/CastleWallCurveRight3.png',
    {topo: 2, direita: 2, baixo: 1, esquerda: 3, centro: 2}
)

const castleWallEntry0 = new Tile(
    'img/tiles/CastleWallEntry0.png',
    {topo: 3, direita: 1, baixo: 2, esquerda: 1, centro: 1}
)

const castleWallEntry1 = new Tile(
    'img/tiles/CastleWallEntry1.png',
    {topo: 1, direita: 2, baixo: 1, esquerda: 3, centro: 1}
)

const castleWallEntry2 = new Tile(
    'img/tiles/CastleWallEntry2.png',
    {topo: 2, direita: 1, baixo: 3, esquerda: 1, centro: 1}
)

const castleWallEntry3 = new Tile(
    'img/tiles/CastleWallEntry3.png',
    {topo: 1, direita: 2, baixo: 1, esquerda: 3, centro: 1}
)

const castleWallEntryLeft0 = new Tile(
    'img/tiles/CastleWallEntryLeft0.png',
    {topo: 3, direita: 1, baixo: 1, esquerda: 2, centro: 1}
)

const castleWallEntryLeft1 = new Tile(
    'img/tiles/CastleWallEntryLeft1.png',
    {topo: 2, direita: 3, baixo: 1, esquerda: 1, centro: 1}
)

const castleWallEntryLeft2 = new Tile(
    'img/tiles/CastleWallEntryLeft2.png',
    {topo: 1, direita: 2, baixo: 3, esquerda: 1, centro: 1}
)

const castleWallEntryLeft3 = new Tile(
    'img/tiles/CastleWallEntryLeft3.png',
    {topo: 1, direita: 1, baixo: 2, esquerda: 3, centro: 1}
)

const castleWallEntryRight0 = new Tile(
    'img/tiles/CastleWallEntryRight0.png',
    {topo: 3, direita: 2, baixo: 1, esquerda: 1, centro: 1}
)

const castleWallEntryRight1 = new Tile(
    'img/tiles/CastleWallEntryRight1.png',
    {topo: 1, direita: 3, baixo: 2, esquerda: 1, centro: 1}
)

const castleWallEntryRight2 = new Tile(
    'img/tiles/CastleWallEntryRight2.png',
    {topo: 1, direita: 1, baixo: 3, esquerda: 2, centro: 1}
)

const castleWallEntryRight3 = new Tile(
    'img/tiles/CastleWallEntryRight3.png',
    {topo: 2, direita: 1, baixo: 1, esquerda: 3, centro: 1}
)

const castleWallJunction0 = new Tile(
    'img/tiles/CastleWallJunction0.png',
    {topo: 3, direita: 2, baixo: 2, esquerda: 2, centro: 1}
)

const castleWallJunction1 = new Tile(
    'img/tiles/CastleWallJunction1.png',
    {topo: 2, direita: 3, baixo: 2, esquerda: 2, centro: 1}
)

const castleWallJunction2 = new Tile(
    'img/tiles/CastleWallJunction2.png',
    {topo: 2, direita: 2, baixo: 3, esquerda: 2, centro: 1}
)

const castleWallJunction3 = new Tile(
    'img/tiles/CastleWallJunction3.png',
    {topo: 2, direita: 2, baixo: 2, esquerda: 3, centro: 1}
)

const castleWallRoad0 = new Tile(
    'img/tiles/CastleWallRoad0.png',
    {topo: 3, direita: 2, baixo: 1, esquerda: 2, centro: 2}
)

const castleWallRoad1 = new Tile(
    'img/tiles/CastleWallRoad1.png',
    {topo: 2, direita: 3, baixo: 2, esquerda: 1, centro: 2}
)

const castleWallRoad2 = new Tile(
    'img/tiles/CastleWallRoad2.png',
    {topo: 1, direita: 2, baixo: 3, esquerda: 2, centro: 2}
)

const castleWallRoad3 = new Tile(
    'img/tiles/CastleWallRoad3.png',
    {topo: 2, direita: 1, baixo: 2, esquerda: 3, centro: 2}
)

const monastery0 = new Tile(
    'img/tiles/Monastery0.png',
    {topo: 1, direita: 1, baixo: 1, esquerda: 1, centro: 4}
)

const monastery1 = new Tile(
    'img/tiles/Monastery1.png',
    {topo: 1, direita: 1, baixo: 1, esquerda: 1, centro: 4}
)

const monasteryJunction0 = new Tile(
    'img/tiles/MonasteryJunction0.png',
    {topo: 2, direita: 2, baixo: 2, esquerda: 2, centro: 4}
)

const monasteryRoad0 = new Tile(
    'img/tiles/MonasteryRoad0.png',
    {topo: 1, direita: 1, baixo: 2, esquerda: 1, centro: 4}
)

const monasteryRoad1 = new Tile(
    'img/tiles/MonasteryRoad1.png',
    {topo: 1, direita: 1, baixo: 1, esquerda: 2, centro: 4}
)

const monasteryRoad2 = new Tile(
    'img/tiles/MonasteryRoad2.png',
    {topo: 2, direita: 1, baixo: 1, esquerda: 1, centro: 4}
)

const monasteryRoad3 = new Tile(
    'img/tiles/MonasteryRoad3.png',
    {topo: 1, direita: 2, baixo: 1, esquerda: 1, centro: 4}
)

const road0 = new Tile(
    'img/tiles/Road0.png',
    {topo: 2, direita: 1, baixo: 2, esquerda: 1, centro: 2}
)

const road1 = new Tile(
    'img/tiles/Road1.png',
    {topo: 1, direita: 2, baixo: 1, esquerda: 2, centro: 2}
)

const road2 = new Tile(
    'img/tiles/Road2.png',
    {topo: 2, direita: 1, baixo: 2, esquerda: 1, centro: 2}
)

const road3 = new Tile(
    'img/tiles/Road3.png',
    {topo: 1, direita: 2, baixo: 1, esquerda: 2, centro: 2}
)

const roadCrossLarge0 = new Tile(
    'img/tiles/RoadCrossLarge0.png',
    {topo: 2, direita: 2, baixo: 2, esquerda: 2, centro: 2}
)

const roadCrossSmall0 = new Tile(
    'img/tiles/RoadCrossSmall0.png',
    {topo: 1, direita: 2, baixo: 2, esquerda: 2, centro: 2}
)

const roadCrossSmall1 = new Tile(
    'img/tiles/RoadCrossSmall1.png',
    {topo: 2, direita: 1, baixo: 2, esquerda: 2, centro: 2}
)

const roadCrossSmall2 = new Tile(
    'img/tiles/RoadCrossSmall2.png',
    {topo: 2, direita: 2, baixo: 1, esquerda: 2, centro: 2}
)

const roadCrossSmall3 = new Tile(
    'img/tiles/RoadCrossSmall3.png',
    {topo: 2, direita: 2, baixo: 2, esquerda: 1, centro: 2}
)

const roadCurve0 = new Tile(
    'img/tiles/RoadCurve0.png',
    {topo: 1, direita: 1, baixo: 2, esquerda: 2, centro: 2}
)

const roadCurve1 = new Tile(
    'img/tiles/RoadCurve1.png',
    {topo: 2, direita: 1, baixo: 1, esquerda: 2, centro: 2}
)

const roadCurve2 = new Tile(
    'img/tiles/RoadCurve2.png',
    {topo: 2, direita: 2, baixo: 1, esquerda: 1, centro: 2}
)

const roadCurve3 = new Tile(
    'img/tiles/RoadCurve3.png',
    {topo: 1, direita: 2, baixo: 2, esquerda: 1, centro: 2}
)

const roadEnd0 = new Tile(
    'img/tiles/RoadEnd0.png',
    {topo: 1, direita: 1, baixo: 2, esquerda: 1, centro: 1}
)

const roadEnd1 = new Tile(
    'img/tiles/RoadEnd1.png',
    {topo: 1, direita: 1, baixo: 1, esquerda: 2, centro: 1}
)

const roadEnd2 = new Tile(
    'img/tiles/RoadEnd2.png',
    {topo: 2, direita: 1, baixo: 1, esquerda: 1, centro: 1}
)

const roadEnd3 = new Tile(
    'img/tiles/RoadEnd3.png',
    {topo: 1, direita: 2, baixo: 1, esquerda: 1, centro: 1}
)

const roadJunctionLarge0 = new Tile(
    'img/tiles/RoadJunctionLarge0.png',
    {topo: 2, direita: 2, baixo: 2, esquerda: 2, centro: 1}
)

const roadJunctionSmall0 = new Tile(
    'img/tiles/RoadJunctionSmall0.png',
    {topo: 1, direita: 2, baixo: 2, esquerda: 2, centro: 1}
)

const roadJunctionSmall1 = new Tile(
    'img/tiles/RoadJunctionSmall1.png',
    {topo: 2, direita: 1, baixo: 2, esquerda: 2, centro: 1}
)

const roadJunctionSmall2 = new Tile(
    'img/tiles/RoadJunctionSmall2.png',
    {topo: 2, direita: 2, baixo: 1, esquerda: 2, centro: 1}
)

const roadJunctionSmall3 = new Tile(
    'img/tiles/RoadJunctionSmall3.png',
    {topo: 2, direita: 2, baixo: 2, esquerda: 1, centro: 1}
)

export const castleCenterEntry = [castleCenterEntry0, castleCenterEntry1, castleCenterEntry2, castleCenterEntry3];
export const castleCenterSide = [castleCenterSide0, castleCenterSide1, castleCenterSide2, castleCenterSide3];
export const castleCenterSides = [castleCenterSides0, castleCenterSides1, castleCenterSides2, castleCenterSides3];
export const castleEdge = [castleEdge0, castleEdge1, castleEdge2, castleEdge3];
export const castleMini = [castleMini0, castleMini1, castleMini2, castleMini3];
export const castleSidesEdge = [castleSidesEdge0, castleSidesEdge1, castleSidesEdge2, castleSidesEdge3];
export const castleSidesEdgeRoad = [castleSidesEdgeRoad0, castleSidesEdgeRoad1, castleSidesEdgeRoad2, castleSidesEdgeRoad3];
export const castleTube = [castleTube0, castleTube1, castleTube2, castleTube3];
export const castleTubeEntry = [castleTubeEntry0, castleTubeEntry1, castleTubeEntry2, castleTubeEntry3];
export const castleWall = [castleWall0, castleWall1, castleWall2, castleWall3];
export const castleWallCurveLeft = [castleWallCurveLeft0, castleWallCurveLeft1, castleWallCurveLeft2, castleWallCurveLeft3];
export const castleWallCurveRight = [castleWallCurveRight0, castleWallCurveRight1, castleWallCurveRight2, castleWallCurveRight3];
export const castleWallEntry = [castleWallEntry0, castleWallEntry1, castleWallEntry2, castleWallEntry3];
export const castleWallEntryLeft = [castleWallEntryLeft0, castleWallEntryLeft1, castleWallEntryLeft2, castleWallEntryLeft3];
export const castleWallEntryRight = [castleWallEntryRight0, castleWallEntryRight1, castleWallEntryRight2, castleWallEntryRight3];
export const castleWallJunction = [castleWallJunction0, castleWallJunction1, castleWallJunction2, castleWallJunction3];
export const castleWallRoad = [castleWallRoad0, castleWallRoad1, castleWallRoad2, castleWallRoad3];
export const monasteryRoad = [monasteryRoad0, monasteryRoad1, monasteryRoad2, monasteryRoad3];
export const road = [road0, road1, road2, road3];
export const roadCrossSmall = [roadCrossSmall0, roadCrossSmall1, roadCrossSmall2, roadCrossSmall3];
export const roadCurve = [roadCurve0, roadCurve1, roadCurve2, roadCurve3];
export const roadEnd = [roadEnd0, roadEnd1, roadEnd2, roadEnd3];
export const roadJunctionSmall = [roadJunctionSmall0, roadJunctionSmall1, roadJunctionSmall2, roadJunctionSmall3];
export const castleSides = [castleSides0, castleSides1];
export const castleSidesRoad = [castleSidesRoad0, castleSidesRoad1];
export const castleTubeEntries = [castleTubeEntries0, castleTubeEntries1];

export const allTiles = {
    castleCenter0, castleCenterEntry0, castleCenterEntry1, castleCenterEntry2, castleCenterEntry3,
    castleCenterSide0, castleCenterSide1, castleCenterSide2, castleCenterSide3,
    castleCenterSides0, castleCenterSides1, castleCenterSides2, castleCenterSides3,
    castleEdge0, castleEdge1, castleEdge2, castleEdge3,
    castleMini0, castleMini1, castleMini2, castleMini3,
    castleSides0, castleSides1,
    castleSidesEdge0, castleSidesEdge1, castleSidesEdge2, castleSidesEdge3,
    castleSidesEdgeRoad0, castleSidesEdgeRoad1, castleSidesEdgeRoad2, castleSidesEdgeRoad3,
    castleSidesQuad0, castleSidesRoad0, castleSidesRoad1,
    castleTube0, castleTube1, castleTube2, castleTube3,
    castleTubeEntries0, castleTubeEntries1,
    castleTubeEntry0, castleTubeEntry1, castleTubeEntry2, castleTubeEntry3,
    castleWall0, castleWall1, castleWall2, castleWall3,
    castleWallCurveLeft0, castleWallCurveLeft1, castleWallCurveLeft2, castleWallCurveLeft3,
    castleWallCurveRight0, castleWallCurveRight1, castleWallCurveRight2, castleWallCurveRight3,
    castleWallEntry0, castleWallEntry1, castleWallEntry2, castleWallEntry3,
    castleWallEntryLeft0, castleWallEntryLeft1, castleWallEntryLeft2, castleWallEntryLeft3,
    castleWallEntryRight0, castleWallEntryRight1, castleWallEntryRight2, castleWallEntryRight3,
    castleWallJunction0, castleWallJunction1, castleWallJunction2, castleWallJunction3,
    castleWallRoad0, castleWallRoad1, castleWallRoad2, castleWallRoad3, monastery0, monastery1, monasteryJunction0,
    monasteryRoad0, monasteryRoad1, monasteryRoad2, monasteryRoad3, road0, road1, road2, road3,
    roadCrossLarge0, roadCrossSmall0, roadCrossSmall1, roadCrossSmall2, roadCrossSmall3,
    roadCurve0, roadCurve1, roadCurve2, roadCurve3,
    roadEnd0, roadEnd1, roadEnd2, roadEnd3,
    roadJunctionLarge0, roadJunctionSmall0, roadJunctionSmall1, roadJunctionSmall2, roadJunctionSmall3
}

export const maxRotations = {
    castleCenter0: 1,
    castleCenterEntry0: 4,
    castleCenterEntry1: 4,
    castleCenterEntry2: 4,
    castleCenterEntry3: 4,
    castleCenterSide0: 4,
    castleCenterSide1: 4,
    castleCenterSide2: 4,
    castleCenterSide3: 4,
    castleCenterSides0: 4,
    castleCenterSides1: 4,
    castleCenterSides2: 4,
    castleCenterSides3: 4,
    castleEdge0: 4,
    castleEdge1: 4,
    castleEdge2: 4,
    castleEdge3: 4,
    castleMini0: 4,
    castleMini1: 4,
    castleMini2: 4,
    castleMini3: 4,
    castleSides0: 2,
    castleSides1: 2,
    castleSidesEdge0: 4,
    castleSidesEdge1: 4,
    castleSidesEdge2: 4,
    castleSidesEdge3: 4,
    castleSidesEdgeRoad0: 4,
    castleSidesEdgeRoad1: 4,
    castleSidesEdgeRoad2: 4,
    castleSidesEdgeRoad3: 4,
    castleSidesQuad0: 1,
    castleSidesRoad0: 2,
    castleSidesRoad1: 2,
    castleTube0: 4,
    castleTube1: 4,
    castleTube2: 4,
    castleTube3: 4,
    castleTubeEntries0: 2,
    castleTubeEntries1: 2,
    castleTubeEntry0: 4,
    castleTubeEntry1: 4,
    castleTubeEntry2: 4,
    castleTubeEntry3: 4,
    castleWall0: 4,
    castleWall1: 4,
    castleWall2: 4,
    castleWall3: 4,
    castleWallCurveLeft0: 4,
    castleWallCurveLeft1: 4,
    castleWallCurveLeft2: 4,
    castleWallCurveLeft3: 4,
    castleWallCurveRight0: 4,
    castleWallCurveRight1: 4,
    castleWallCurveRight2: 4,
    castleWallCurveRight3: 4,
    castleWallEntry0: 4,
    castleWallEntry1: 4,
    castleWallEntry2: 4,
    castleWallEntry3: 4,
    castleWallEntryLeft0: 4,
    castleWallEntryLeft1: 4,
    castleWallEntryLeft2: 4,
    castleWallEntryLeft3: 4,
    castleWallEntryRight0: 4,
    castleWallEntryRight1: 4,
    castleWallEntryRight2: 4,
    castleWallEntryRight3: 4,
    castleWallJunction0: 4,
    castleWallJunction1: 4,
    castleWallJunction2: 4,
    castleWallJunction3: 4,
    castleWallRoad0: 4,
    castleWallRoad1: 4,
    castleWallRoad2: 4,
    castleWallRoad3: 4,
    monastery0: 1,
    monastery1: 1,
    monasteryJunction0: 1,
    monasteryRoad0: 4,
    monasteryRoad1: 4,
    monasteryRoad2: 4,
    monasteryRoad3: 4,
    road0: 4,
    road1: 4,
    road2: 4,
    road3: 4,
    roadCrossLarge0: 1,
    roadCrossSmall0: 4,
    roadCrossSmall1: 4,
    roadCrossSmall2: 4,
    roadCrossSmall3: 4,
    roadCurve0: 4,
    roadCurve1: 4,
    roadCurve2: 4,
    roadCurve3: 4,
    roadEnd0: 4,
    roadEnd1: 4,
    roadEnd2: 4,
    roadEnd3: 4,
    roadJunctionLarge0: 1,
    roadJunctionSmall0: 4,
    roadJunctionSmall1: 4,
    roadJunctionSmall2: 4,
    roadJunctionSmall3: 4
};

for (const key in allTiles) {
    if (allTiles.hasOwnProperty(key)) {
        allTiles[key].id = key;
    }
}
