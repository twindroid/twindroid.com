using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver.Core.Misc;

namespace twindroid_api.Models
{
    [BsonIgnoreExtraElements]
    public class Products
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; } = String.Empty;

        [BsonElement("name")]
        public string Name { get; set; } = String.Empty;

        [BsonElement("features")]
        public Dictionary<string, string>[] Features { get; set; } = [];
    }
}
