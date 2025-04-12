using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace exercicio2
{
    class Program
    {
        static void Main(string[] args)
        {
            double numeroUm, numeroDois, diferenca;

            Console.WriteLine("Digite o primeiro número: ");
            numeroUm = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Digite o segundo número: ");
            numeroDois = Convert.ToDouble(Console.ReadLine());

            if (numeroUm > numeroDois)
            {
                diferenca = numeroUm - numeroDois;
                diferenca.ToString("0.00");
                Console.WriteLine("O valor da diferença é: " + diferenca);
                Console.ReadKey();
            }
            else
            {
                diferenca = numeroDois - numeroUm;
                diferenca.ToString("0.00");
                Console.WriteLine("O valor da diferença é: " + diferenca);
                Console.ReadKey();
            }
        }
    }
}
