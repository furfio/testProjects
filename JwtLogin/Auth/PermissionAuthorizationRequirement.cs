using Microsoft.AspNetCore.Authorization;

namespace JwtLogin.Auth
{
    public class PermissionAuthorizationRequirement : IAuthorizationRequirement
    {
        public PermissionAuthorizationRequirement(string name)
        {
            Name = name;
        }
        public string Name { get; set; }
    }
}
