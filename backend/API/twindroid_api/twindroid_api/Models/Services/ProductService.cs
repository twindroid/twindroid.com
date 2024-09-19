using MongoDB.Driver;

namespace twindroid_api.Models.Services
{
    public class ProductService : IProductService
    {
        private readonly IMongoCollection<Products> _products;

        public ProductService(IProductStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _products = database.GetCollection<Products>(settings.ProductCollectionName);

        }

        public Products Create(Products product)
        {
            _products.InsertOne(product);
            return product;
        }

        public List<Products> Get()
        {
            return _products.Find(product => true).ToList();
        }

        public Products Get(string id)
        {
            return _products.Find(product => product.Id == id).FirstOrDefault();
        }

        public void Remove(string id)
        {
            _products.DeleteOne(product => product.Id == id);
        }

        public void Update(string id, Products product)
        {
            _products.ReplaceOne(product => product.Id == id, product);
                }
    }
}
