using System;
using System.Collections.Generic;

namespace AngularApp2.Server.Models;

public partial class User
{
    public int UserId { get; set; }

    public string UserName { get; set; } = null!;

    public string PasswordHash { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Phone { get; set; }

    public string? Address { get; set; }

    public bool? IsAdmin { get; set; }

    public bool? IsSupplier { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual ICollection<ServiceSubscription> ServiceSubscriptions { get; set; } = new List<ServiceSubscription>();
}
