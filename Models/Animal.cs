using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace hc_pet_tag_lookup.Models
{
    // context
    public partial class AnimalContext : DbContext
    {
        public AnimalContext(DbContextOptions<AnimalContext> options) : base(options)
        {}

        public virtual DbSet<Animal> Animals { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Animal>(entity =>
            {
                entity.HasKey(e => e.PkId).HasName("PkId");
                entity.Property(e => e.TagNumber).HasColumnName("TagNumber");
                entity.Property(e => e.TagTail).HasColumnName("tagtail");
                entity.Property(e => e.Tattoo).HasColumnName("tattoo");
                entity.Property(e => e.OwnerName).HasColumnName("OwnerName");
                entity.Property(e => e.Phone).HasColumnName("Phone");
                entity.Property(e => e.PetName).HasColumnName("PetName");
                entity.Property(e => e.PetType).HasColumnName("PetType");
                entity.Property(e => e.Breed).HasColumnName("Breed");
                entity.Property(e => e.Color).HasColumnName("Color");
                entity.Property(e => e.TagExpDate).HasColumnName("TagExpDate");
                entity.Property(e => e.VacExpDate).HasColumnName("VacExpDate");
            });
        }
    }

    // model
    [Table("vwWebTagLookup")]
    public partial class Animal
    {
        public string PkId { get; set; }
        public string TagNumber { get; set; }
        public string TagTail { get; set; }
        public string Tattoo { get; set; }
        public string OwnerName { get; set; }
        public string Phone { get; set; }
        public string PetName { get; set; }
        public string PetType { get; set; }
        public string Breed { get; set; }
        public string Color { get; set; }
        public string TagExpDate { get; set; }
        public string VacExpDate { get; set; }
        // public string AnimalId { get; set; }
    }
}
