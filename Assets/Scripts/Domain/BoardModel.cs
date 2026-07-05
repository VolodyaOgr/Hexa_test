using System.Collections.Generic;

namespace HexaTest.Domain
{
    public sealed class BoardModel
    {
        private readonly Dictionary<HexCoord, CellModel> _cells = new Dictionary<HexCoord, CellModel>();

        public IEnumerable<CellModel> Cells => _cells.Values;

        public void Add(CellModel cell) => _cells[cell.Coord] = cell;

        public bool TryGet(HexCoord c, out CellModel cell) => _cells.TryGetValue(c, out cell);

        public CellModel Get(HexCoord c) => _cells.TryGetValue(c, out CellModel cell) ? cell : null;

        public IEnumerable<CellModel> Neighbors(HexCoord c)
        {
            for (int dir = 0; dir < 6; dir++)
                if (_cells.TryGetValue(c.Neighbor(dir), out CellModel n))
                    yield return n;
        }

        public static BoardModel BuildHexagon(int radius)
        {
            BoardModel board = new BoardModel();
            for (int q = -radius; q <= radius; q++)
                for (int r = -radius; r <= radius; r++)
                {
                    HexCoord c = new HexCoord(q, r);
                    if (c.DistanceToCenter() <= radius)
                        board.Add(new CellModel(c));
                }
            return board;
        }

        public BoardModel Clone()
        {
            BoardModel copy = new BoardModel();
            foreach (CellModel cell in _cells.Values)
            {
                CellModel nc = new CellModel(cell.Coord);
                if (cell.Stack != null) nc.Stack = cell.Stack.Clone();
                copy.Add(nc);
            }
            return copy;
        }
    }
}
