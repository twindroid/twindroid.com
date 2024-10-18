namespace twindroid_api.Models
{
    public class ProductStoreDatabaseSettings : IProductStoreDatabaseSettings
    {
        public string ProductCollectionName { get; set; } = "products";
        public string ConnectionString { get; set; } = string.Empty;
        public string DatabaseName { get; set; } = string.Empty;   
    }
}
