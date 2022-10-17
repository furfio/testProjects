using JwtLogin.Auth;
using JwtLogin.Database;
using JwtLogin.Helpers;
using JwtLogin.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

// add services to DI container
{
    var services = builder.Services;
    var env = builder.Environment;

    // use sql server db in production and sqlite db in development
    if (!env.IsProduction())
        services.AddDbContext<DataContext>();
    else
        services.AddDbContext<DataContext, SqliteDataContext>();

    services.AddCors();
    services.AddControllers();
    // configure automapper with all automapper profiles from this assembly
    services.AddAutoMapper(typeof(Program));

    // configure strongly typed settings object
    services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));

    // configure DI for application services
    services.AddScoped<IJwtUtils, JwtUtils>();
    services.AddScoped<IUserService, UserService>();

    services.AddAuthentication(options =>
    {
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuer = true, //是否验证Issuer
            ValidIssuer = configuration["AppSettings:Issuer"], //发行人Issuer
            ValidateAudience = true, //是否验证Audience
            ValidAudience = configuration["AppSettings:Audience"], //订阅人Audience
            ValidateIssuerSigningKey = true, //是否验证SecurityKey
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["AppSettings:Secret"])), //SecurityKey
            ValidateLifetime = true, //是否验证失效时间
            ClockSkew = TimeSpan.FromSeconds(30), //过期时间容错值，解决服务器端时间不同步问题（秒）
            RequireExpirationTime = true,
        };
    });
    services.AddAuthorization(options =>
    {
        options.AddPolicy(AuthConstant.AdminRole, policy => policy.AddRequirements(new PermissionAuthorizationRequirement(AuthConstant.AdminRole)));
    });
    services.AddSingleton<IAuthorizationHandler, PermissionAuthorizationHandler>();
}

var app = builder.Build();

// migrate any database changes on startup (includes initial db creation)
using (var scope = app.Services.CreateScope())
{
    var dataContext = scope.ServiceProvider.GetRequiredService<DataContext>();
    dataContext.Database.Migrate();
}

// configure HTTP request pipeline
{
    // global cors policy
    app.UseCors(x => x
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());

    // global error handler
    app.UseMiddleware<ErrorHandlerMiddleware>();

    // custom jwt auth middleware
    //app.UseMiddleware<JwtMiddleware>();

    //调用中间件：UseAuthentication（认证），必须在所有需要身份认证的中间件前调用，比如 UseAuthorization（授权）。
    app.UseAuthentication();
    app.UseAuthorization();

    app.MapControllers();
}

app.Run();
