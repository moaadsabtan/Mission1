using Microsoft.EntityFrameworkCore;

namespace Mission.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        
            public DbSet<users> users { get; set; }0
            public DbSet<product> products { get; set; }
            public DbSet<inventory> inventory { get; set; }


            
        
    }
}
