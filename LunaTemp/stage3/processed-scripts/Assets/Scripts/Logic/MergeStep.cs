using HexaTest.Domain;

namespace HexaTest.Logic
{
    public abstract class MergeStep { }

    public sealed class TransferStep : MergeStep
    {
        public HexCoord From;
        public HexCoord To;
        public HexColorId Color;
        public int Count;
    }

    public sealed class ClearStep : MergeStep
    {
        public HexCoord Cell;
        public HexColorId Color;
        public int Count;
    }
}
