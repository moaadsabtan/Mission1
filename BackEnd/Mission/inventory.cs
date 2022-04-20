
namespace Mission
{
    public class inventory
    {
        public int id { get; set; }
        public DateTime addedDate { get; set; } = DateTime.Now;
        public int AmoutProductQuantity { get; set; } = 0;

        internal static void Add(inventory inv)
        {
            throw new NotImplementedException();
        }

        internal static object Find(Func<object, bool> p)
        {
            throw new NotImplementedException();
        }
    }
}
