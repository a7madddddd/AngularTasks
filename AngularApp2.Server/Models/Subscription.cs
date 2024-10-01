using System;
using System.Collections.Generic;

namespace AngularApp2.Server.Models;

public partial class Subscription
{
    public int SubscriptionId { get; set; }

    public string? SubscriptionName { get; set; }

    public string? SubscriptionAmount { get; set; }

    public string? SubscriptionDescription { get; set; }

    public virtual ICollection<ServiceSubscription> ServiceSubscriptions { get; set; } = new List<ServiceSubscription>();
}
