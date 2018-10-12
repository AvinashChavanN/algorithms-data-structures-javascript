using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            using (var webClient = new WebClient())
            {
                // String represen
                String rawJSON = webClient.DownloadString("https://jsonplaceholder.typicode.com/posts");
                List<Uer> userCollection = JsonConvert.DeserializeObject<List<Uer>>(rawJSON);
                Console.WriteLine(userCollection);
            }
            return View();
        }

        [HttpGet]
        public ActionResult getData(int email)
        {
            List<Uer> userCollection = new List<Uer>();
            using (var webClient = new WebClient())
            {
                // String represen
                String rawJSON = webClient.DownloadString("https://jsonplaceholder.typicode.com/posts?id="+email);
                userCollection = JsonConvert.DeserializeObject<List<Uer>>(rawJSON);
                Console.WriteLine(userCollection);
            }
            return Json(userCollection,JsonRequestBehavior.AllowGet);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

    }
}

<!--
@{
    ViewBag.Title = "Home Page";
}

<div class="jumbotron">
    <h1>ASP.NET</h1>
    <p class="lead">ASP.NET is a free web framework for building great Web sites and Web applications using HTML, CSS and JavaScript.</p>
    <p><a href="https://asp.net" class="btn btn-primary btn-lg">Learn more &raquo;</a></p>
</div>
<form>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <button type="button" id="btnSubmit" class="btn btn-primary">Search</button>
</form>
<div id="demo"></div>
@section scripts{

<script type="text/javascript">
    var txt = "";
    $(document).ready(function () {

        $('#btnSubmit').click(function () {
            var email = $('#exampleInputEmail1').val();
            $.ajax({
                type: "GET",
                url: '@Url.Action("getData")',
                data: { email: email},
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {

                    //myObj = JSON.parse(data);
                    txt += "<table border='1'>"
                    for (x in data) {
                        txt += "<tr><td>" + data[x].Body + "</td></tr>";
                    }
                    txt += "</table>"
                    document.getElementById("demo").innerHTML = txt;
                }
            });

        });
    });
</script>    
}
-->
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Uer
    {
        int userId;
        int id;
        string title;
        string body;

        public string Body { get => body; set => body = value; }
        public int UserId { get => userId; set => userId = value; }
        public int Id { get => id; set => id = value; }
        public string Title { get => title; set => title = value; }
    }
}
