class Tile{
    constructor(img, conteudo = {}){
        this.img = img
        this.conteudo = conteudo
        this.element = null
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

const castleEdgeRoad0 = new Tile(
    'img/tiles/CastleEdgeRoad0.png',
    {topo: 3, direita: 3, baixo: 2, esquerda: 2, centro: 23}
)

const castleEdgeRoad1 = new Tile(
    'img/tiles/CastleEdgeRoad1.png',
    {topo: 2, direita: 3, baixo: 3, esquerda: 2, centro: 23}
)

const castleEdgeRoad2 = new Tile(
    'img/tiles/CastleEdgeRoad2.png',
    {topo: 2, direita: 2, baixo: 3, esquerda: 3, centro: 23}
)

const castleEdgeRoad3 = new Tile(
    'img/tiles/CastleEdgeRoad3.png',
    {topo: 3, direita: 2, baixo: 2, esquerda: 3, centro: 23}
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
    {topo: 3, direita: 2, baixo: 3, esquerda: 1, centro: 3}
)

const castleTubeEntry2 = new Tile(
    'img/tiles/CastleTubeEntry2.png',
    {topo: 2, direita: 3, baixo: 1, esquerda: 3, centro: 3}
)

const castleTubeEntry3 = new Tile(
    'img/tiles/CastleTubeEntry3.png',
    {topo: 3, direita: 1, baixo: 3, esquerda: 2, centro: 3}
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
    {topo: 1, direita: 3, baixo: 2, esquerda: 1, centro: 2}
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
    {topo: 1, direita: 3, baixo: 1, esquerda: 2, centro: 1}
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

const castleCenterEntry = [castleCenterEntry0, castleCenterEntry1, castleCenterEntry2];
const castleCenterSide = [castleCenterSide0, castleCenterSide1, castleCenterSide2, castleCenterSide3];
const castleCenterSides = [castleCenterSides0, castleCenterSides1, castleCenterSides2, castleCenterSides3];
const castleEdge = [castleEdge0, castleEdge1, castleEdge2, castleEdge3];
const castleEdgeRoad = [castleEdgeRoad0, castleEdgeRoad1, castleEdgeRoad2, castleEdgeRoad3];
const castleMini = [castleMini0, castleMini1, castleMini2, castleMini3];
const castleSidesEdge = [castleSidesEdge0, castleSidesEdge1, castleSidesEdge2, castleSidesEdge3];
const castleSidesEdgeRoad = [castleSidesEdgeRoad0, castleSidesEdgeRoad1, castleSidesEdgeRoad2, castleSidesEdgeRoad3];
const castleTube = [castleTube0, castleTube1, castleTube2, castleTube3];
const castleTubeEntry = [castleTubeEntry0, castleTubeEntry1, castleTubeEntry2, castleTubeEntry3];
const castleWall = [castleWall0, castleWall1, castleWall2, castleWall3];
const castleWallCurveLeft = [castleWallCurveLeft0, castleWallCurveLeft1, castleWallCurveLeft2, castleWallCurveLeft3];
const castleWallCurveRight = [castleWallCurveRight0, castleWallCurveRight1, castleWallCurveRight2, castleWallCurveRight3];
const castleWallEntry = [castleWallEntry0, castleWallEntry1, castleWallEntry2, castleWallEntry3];
const castleWallEntryLeft = [castleWallEntryLeft0, castleWallEntryLeft1, castleWallEntryLeft2, castleWallEntryLeft3];
const castleWallEntryRight = [castleWallEntryRight0, castleWallEntryRight1, castleWallEntryRight2, castleWallEntryRight3];
const castleWallJunction = [castleWallJunction0, castleWallJunction1, castleWallJunction2, castleWallJunction3];
const castleWallRoad = [castleWallRoad0, castleWallRoad1, castleWallRoad2, castleWallRoad3];
const monasteryRoad = [monasteryRoad0, monasteryRoad1, monasteryRoad2, monasteryRoad3];
const road = [road0, road1, road2, road3];
const roadCrossSmall = [roadCrossSmall0, roadCrossSmall1, roadCrossSmall2, roadCrossSmall3];
const roadCurve = [roadCurve0, roadCurve1, roadCurve2, roadCurve3];
const roadEnd = [roadEnd0, roadEnd1, roadEnd2, roadEnd3];
const roadJunctionSmall = [roadJunctionSmall0, roadJunctionSmall1, roadJunctionSmall2, roadJunctionSmall3];
const castleSides = [castleSides0, castleSides1];
const castleSidesRoad = [castleSidesRoad0, castleSidesRoad1];
const castleTubeEntries = [castleTubeEntries0, castleTubeEntries1];

const allTiles = {
    castleCenter0, castleCenterEntry0, castleCenterEntry1, castleCenterEntry2,
    castleCenterSide0, castleCenterSide1, castleCenterSide2, castleCenterSide3,
    castleCenterSides0, castleCenterSides1, castleCenterSides2, castleCenterSides3,
    castleEdge0, castleEdge1, castleEdge2, castleEdge3,
    castleEdgeRoad0, castleEdgeRoad1, castleEdgeRoad2, castleEdgeRoad3,
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

export{
    allTiles,
    castleCenterEntry,
    castleCenterSide,
    castleCenterSides,
    castleEdge,
    castleEdgeRoad,
    castleMini,
    castleSidesEdge,
    castleSidesEdgeRoad,
    castleSides,
    castleSidesRoad,
    castleTube,
    castleTubeEntry,
    castleTubeEntries,
    castleWall,
    castleWallCurveLeft,
    castleWallCurveRight,
    castleWallEntry,
    castleWallEntryLeft,
    castleWallEntryRight,
    castleWallJunction,
    castleWallRoad,
    monasteryRoad,
    road,
    roadCrossSmall,
    roadCurve,
    roadEnd,
    roadJunctionSmall
}