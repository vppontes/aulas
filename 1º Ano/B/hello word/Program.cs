using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hello_word
{
    class Program
    {
        static void Main(string[] args)
        {
            int numero = 0;
            Console.WriteLine("Digite um número: ");

 
            numero = int.Parse(Console.ReadLine());
            //imprime na tela
            Console.WriteLine("Você digitou: {0}", numero);

            int soma = 0, diferenca = 0, produto = 0, resto = 0;

            double divisao = 0;

            Console.WriteLine("Insira um número: ");
            int num1 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Insira um número: ");
            int num2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine();

            soma = num1 + num2;
            diferenca = num1 - num2;
            produto = num1 * num2;
            divisao = num1 / num2;
            resto = 3 % num2;

            Console.WriteLine("num1 = {0}, num2 = {1}", num1, num2);

            Console.WriteLine();

            Console.WriteLine("Soma de {0} e {1} é {2}", num1, num2, soma);
            Console.WriteLine("Diferença de {0} e {1} é {2}", num1, num2, diferenca);
            Console.WriteLine("Produto de {0} e {1} é {2}", num1, num2, produto);
            Console.WriteLine("Quociente de {0} e {1} é {2}", num1, num2, divisao);

            Console.WriteLine();
            
            Console.WriteLine("resto de 3 quando é dividido por {0} é {1}", num2 ,resto.ToString());
        }
    }
}

