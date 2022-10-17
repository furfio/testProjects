namespace JwtLogin.Auth;

using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using JwtLogin.Entity;
using JwtLogin.Helpers;

public interface IJwtUtils
{
    public string GenerateToken(User user);
    public int? ValidateToken(string token);
}

public class JwtUtils : IJwtUtils
{
    private readonly AppSettings _appSettings;

    public JwtUtils(IOptions<AppSettings> appSettings)
    {
        _appSettings = appSettings.Value;
    }

    public string GenerateToken(User user)
    {
        var claims = new[]
        {
            new Claim("id", user.Id.ToString()),
            new Claim(ClaimTypes.Role, user.Role.ToString())
        };
        var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.Secret));

        var algorithm = SecurityAlgorithms.HmacSha256;

        var signingCredentials = new SigningCredentials(secretKey, algorithm);

        var jwtSecurityToken = new JwtSecurityToken(
            _appSettings.Issuer,     //Issuer
            _appSettings.Audience,   //Audience
            claims,                          //Claims,
            DateTime.Now,                    //notBefore
            DateTime.Now.AddSeconds(300),    //expires
            signingCredentials               //Credentials
        );

        var token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);

        return token;
    }

    public int? ValidateToken(string token)
    {
        if (token == null) 
            return null;

        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
        try
        {
            tokenHandler.ValidateToken(token, new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false,
                // set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)
                ClockSkew = TimeSpan.Zero
            }, out SecurityToken validatedToken);

            var jwtToken = (JwtSecurityToken)validatedToken;
            var userId = int.Parse(jwtToken.Claims.First(x => x.Type == "id").Value);

            // return user id from JWT token if validation successful
            return userId;
        }
        catch
        {
            // return null if validation fails
            return null;
        }
    }
}