using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gol_Teste_API.Models
{
    public class Airplane
    {
        public int Codigo { get; set; }

        public string Modelo { get; set; }

        public int QtdePassageiros { get; set; }

        public DateTime DataCriacao { get; set; }
    }
}
