namespace twindroid_api.Models.Services
{
    public interface IProductService
    {
        List<Products> Get();
        Products Get(string id);
        Products Create(Products product);
        void Update(string id, Products product);
        void Remove(string id);
    }
}
