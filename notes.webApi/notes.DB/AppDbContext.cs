using Microsoft.EntityFrameworkCore;

namespace notes.DB
{
    public class AppDbContext: DbContext
    {
        public DbSet<Note> Notes { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                @"Server=DESKTOP-38N1J1R\SQLEXPRESS;Database=NotesDB;Integrated Security=True"
                );
        }
    }
}
