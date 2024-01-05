using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Wordle.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WordleOperationController : ControllerBase
    {
      
        private readonly ILogger<WordleOperationController> _logger;
        private static string WordAndTips = "";
        public WordleOperationController(ILogger<WordleOperationController> logger)
        {
            _logger = logger;


        }
        public static void GenerateWordAndTips()
        {
            string[] linhas = System.IO.File.ReadAllLines("../wordle.client/src/assets/Words.txt");
            Random _random = new Random();
            string linhaAleatoria = linhas[_random.Next(linhas.Length)];

            WordAndTips = linhaAleatoria;
        }

        [HttpPost("FetchWordAndTips")]
        public IActionResult FetchWordsAndTips()
        {
            try
            {
                HttpContext.Response.Headers.Add("Access-Control-Allow-Origin", "*");
                HttpContext.Response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
                HttpContext.Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type, Authorization");

                if (string.IsNullOrEmpty(WordAndTips))
                {
                    GenerateWordAndTips();
                }

                return Ok(WordAndTips);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Erro ao ler arquivo");
                return StatusCode(500, "Erro interno ao ler arquivo");
            }
        }


    }
}

