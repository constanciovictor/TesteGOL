using Gol_Teste_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Gol_Teste_API.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {   
        }

        public DbSet<Airplane> Airplanes { get; set; }
    }
}