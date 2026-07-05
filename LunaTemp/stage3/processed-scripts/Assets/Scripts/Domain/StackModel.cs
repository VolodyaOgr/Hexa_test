using System.Collections.Generic;

namespace HexaTest.Domain
{
    public sealed class StackModel
    {
        private readonly List<HexColorId> _discs = new List<HexColorId>();

        public IReadOnlyList<HexColorId> Discs => _discs;
        public int Count => _discs.Count;
        public bool IsEmpty => _discs.Count == 0;
        public HexColorId TopColor => _discs[_discs.Count - 1];

        public void Set(IEnumerable<HexColorId> discs)
        {
            _discs.Clear();
            _discs.AddRange(discs);
        }

        public void Push(HexColorId c) => _discs.Add(c);

        public void PushRange(HexColorId c, int n)
        {
            for (int i = 0; i < n; i++) _discs.Add(c);
        }

        public int TopRunLength()
        {
            if (IsEmpty) return 0;
            HexColorId? c = TopColor;
            int n = 0;
            for (int i = _discs.Count - 1; i >= 0 && _discs[i] == c; i--) n++;
            return n;
        }

        public void RemoveTop(int n)
        {
            n = n < _discs.Count ? n : _discs.Count;
            _discs.RemoveRange(_discs.Count - n, n);
        }

        public StackModel Clone()
        {
            StackModel s = new StackModel();
            s._discs.AddRange(_discs);
            return s;
        }
    }
}
