namespace HexaTest.Domain
{
    public sealed class CellModel
    {
        public readonly HexCoord Coord;
        public StackModel Stack;

        public CellModel(HexCoord coord) { Coord = coord; }

        public bool IsEmpty => Stack == null || Stack.IsEmpty;
    }
}
