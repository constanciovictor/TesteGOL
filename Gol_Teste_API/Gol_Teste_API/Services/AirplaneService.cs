using AutoMapper;
using Gol_Teste_API.Context;
using Gol_Teste_API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gol_Teste_API.Services
{
    public class AirplaneService : IAirplaneService
    {
        private readonly AppDbContext _context;

        public AirplaneService(AppDbContext context)
        {
            _context = context;
        }

        public void Adicionar(Airplane airplane)
        {
            _context.Set<Airplane>().Add(airplane);
        }
        public void Deletar(int Codigo)
        {
            var airplane = _context.Set<Airplane>().FirstOrDefault(x => x.Codigo == Codigo);
            if (airplane != null)
            {
                _context.Set<Airplane>().Remove(airplane);
            }
        }
        public void Editar(Airplane airplane)
        {
            var result = _context.Airplanes.SingleOrDefault(b => b.Codigo == airplane.Codigo);

            if (result != null)
            {
                _context.Entry(airplane).State = EntityState.Modified;
                _context.Set<Airplane>().Update(airplane);
            }
        }
        public async Task<IEnumerable<Airplane>> ListarAirplanes()
        {
            var aiplanes = _context.Set<Airplane>().AsEnumerable<Airplane>();

            return aiplanes;
        }

        public async Task<Airplane> ListarAirplanePorCodigo(int Codigo)
        {
            var airplane = _context.Airplanes.SingleOrDefault(x => x.Codigo == Codigo);

            return Mapper.Map<Airplane>(airplane);
        }

        public void Salvar() => _context.SaveChanges();

    }
}
