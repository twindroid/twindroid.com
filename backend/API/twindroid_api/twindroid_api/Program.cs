using Microsoft.Extensions.Options;
using MongoDB.Driver;
using twindroid_api.Models;
using twindroid_api.Models.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.Configure<ProductStoreDatabaseSettings>(
    builder.Configuration.GetSection(nameof(ProductStoreDatabaseSettings)));

builder.Services.AddSingleton<IProductStoreDatabaseSettings>(sp=>
   sp.GetRequiredService<IOptions<ProductStoreDatabaseSettings>>().Value);

builder.Services.AddSingleton<IMongoClient>(s =>
   new MongoClient(builder.Configuration.GetValue<string>("ProductStoreDatabaseSettings:ConnectionString")));

builder.Services.AddScoped<IProductService, ProductService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000"));
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
