using ARMdps.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;
using System.IO;
using System.Text.Json;
using System.Linq;
using System.Threading.Tasks;
using ARMdps.Controllers.API;
using ARMdps.Repositories.Implimentations;
using ARMdps.Repositories.Interfaces;


namespace ARMdps.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult GetTable()
        {
            return PartialView("~Views/Partial/_Table");
        }
        public IActionResult GetRegionForm(int id)
        {
            IRegionRepository repository = new RegionRepository();
            return PartialView("~/Views/Partial/_RegionForm", repository.RegionGet(id));
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
