using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Gol_Teste_API.Models;
using System.Data.Entity;
using Gol_Teste_API.Context;
using Gol_Teste_API.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Gol_Teste_API.Controllers
{
    [Route("api/[airplane]")]
    public class AirplaneController : Controller
    {
        private readonly IAirplaneService _airplaneService;

        public AirplaneController(IAirplaneService airplaneService)
        {
            _airplaneService = airplaneService;
        }


        // GET: api/<Airplane>
        [HttpGet]
        public async Task<IEnumerable<Airplane>> ListaAirplanes()
        {
            var airplanes = await _airplaneService.ListarAirplanes();

            return airplanes;
        }

        // GET api/<Airplane>/5
        [HttpGet("{id}")]
        public async Task<Airplane> ListaAirplanePorCodigo(int Codigo)
        {
            var airplane = await _airplaneService.ListarAirplanePorCodigo(Codigo);

            return airplane;
        }

        // POST api/<Airplane>
        [HttpPost]
        public int AdicionarAirplane([FromBody]Airplane airplane)
        {
            if (airplane != null)
            {
                _airplaneService.Adicionar(airplane);

                return 1;
            }
            else
                return -1;
        }

        // PUT api/<Airplane>/5
        [HttpPut("{id}")]
        public int EditarAirPlane(int id, [FromBody]Airplane airplane)
        {
            if (airplane != null)
            {
                _airplaneService.Editar(airplane);

                return 1;
            }
            else
                return -1;
        }

        // DELETE api/<Airplane>/5
        [HttpDelete("{id}")]
        public int Delete(int codigo)
        {
            if (codigo > 0)
            {
                _airplaneService.Deletar(codigo);

                return 1;
            }
            else
                return -1;
        }
    }
}
