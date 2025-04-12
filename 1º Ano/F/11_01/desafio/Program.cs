using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace desafio
{
    class Program
    {
        static void Main(string[] args)
        {
            double salario, correcao;

            Console.WriteLine("Insira seu salário: ");
            salario = Convert.ToDouble(Console.ReadLine());

            if (salario < 3000)
            {
                correcao = (salario * 0.5);
                Console.WriteLine("O seu novo salário é de :" + (salario + correcao));
                Console.ReadKey();
            }
            else if (salario >= 3000 && salario <= 10000)
            {
                correcao = (salario * 0.2);
                Console.WriteLine("O seu novo salário é de :" + (salario + correcao));
                Console.ReadKey();
            }
            else
            {
                correcao = (salario * 0.15);
                Console.WriteLine("O seu novo salário é de :" + (salario + correcao));
                Console.ReadKey();
            }
        }
    }
}
