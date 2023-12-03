using Microsoft.AspNetCore.Mvc;

namespace Wordle.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WordleOperationController : ControllerBase
    {
      
        private readonly ILogger<WordleOperationController> _logger;

        public WordleOperationController(ILogger<WordleOperationController> logger)
        {
            _logger = logger;
        }

     
    }
}
