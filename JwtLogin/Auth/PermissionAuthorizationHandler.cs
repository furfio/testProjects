using JwtLogin.Entity;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace JwtLogin.Auth
{
    public class PermissionAuthorizationHandler : AuthorizationHandler<PermissionAuthorizationRequirement>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, PermissionAuthorizationRequirement requirement)
        {
            var role = context.User.Claims.Where(_ => _.Type == ClaimTypes.Role).Select(_ => _.Value).ToList();
            foreach(var roleClaim in role)
            {
                Console.WriteLine(roleClaim);
            }
            if (role.Any(_ => _.Equals(Role.Admin.ToString())))
            {
                Console.WriteLine("successd");
                context.Succeed(requirement);
            }
            return Task.CompletedTask;
        }
    }
}
