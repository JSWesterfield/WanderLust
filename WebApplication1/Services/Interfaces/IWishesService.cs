using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using WikiDataProvider.Data.Extensions;
using WikiDataProvider.Data.Interfaces;
using WikiWebStarter.Example.Models;


namespace WebApplication1.Services.Interfaces
{
    public interface IWishesService
    {
        List<Wish> SelectAll();
        int Insert(Wish w);
        void Update(Wish w);
        void Delete(int id);
        Wish GetById(int id);
    }
}