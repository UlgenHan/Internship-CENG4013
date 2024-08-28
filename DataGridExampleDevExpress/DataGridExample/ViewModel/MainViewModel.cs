using DataGridExample.Models;
using DevExpress.Mvvm.DataAnnotations;
using DevExpress.Mvvm.Xpf;
using DevExpress.Mvvm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DataGridExample.ViewModel
{
    public class MainViewModel : ViewModelBase
    {
        NorthwindEntities northwindDBContext;

        public ICollection<Order> Orders
        {
            get => GetValue<ICollection<Order>>();
            private set => SetValue(value);
        }
        public ICollection<Shipper> Shippers
        {
            get => GetValue<ICollection<Shipper>>();
            private set => SetValue(value);
        }

        public MainViewModel()
        {
            northwindDBContext = new NorthwindEntities();

            northwindDBContext.Orders.Load();
            Orders = northwindDBContext.Orders.Local;

            northwindDBContext.Shippers.Load();
            Shippers = northwindDBContext.Shippers.Local;
        }
        [Command]
        public void ValidateAndSave(RowValidationArgs args)
        {
            northwindDBContext.SaveChanges();
        }
    }
}
