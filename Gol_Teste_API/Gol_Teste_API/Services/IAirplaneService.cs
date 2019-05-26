using Gol_Teste_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gol_Teste_API.Services
{
    public interface IAirplaneService
    {
        void Adicionar(Airplane airplane);

        Task<Airplane> ListarAirplanePorCodigo(int Codigo);

        void Salvar();

        Task<IEnumerable<Airplane>> ListarAirplanes();

        void Editar(Airplane airplane);

        void Deletar(int Codigo);
    }
}
