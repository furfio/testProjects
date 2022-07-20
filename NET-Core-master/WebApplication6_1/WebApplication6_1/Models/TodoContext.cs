using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace WebApplication6_1.Models
{
    public class TodoContext: DbContext 
    {
        public TodoContext(DbContextOptions<TodoContext> options): base(options)
        {

        }

        public DbSet<TodoItem> todoItems { get; set; } = null;
    }
}
