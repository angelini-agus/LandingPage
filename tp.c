#include <stdlib.h>
#include <stdio.h>

int main()
{
    int puntaje, excelente = 0, bueno = 0, regular = 0, deficiente = 0, i;
    float salarioBase, bonif;

    for (i = 1; i <= 3; i++)
    {
        do
        {
            printf("Ingrese el salario base del empleado %d: ", i);
            scanf("%f", &salarioBase);
            if (salarioBase <= 0)
            {
                printf("El salario debe ser mayor a 0\n");
            }
        } while (salarioBase <= 0);

        do
        {
            printf("Ingrese el puntaje de desempenio del empleado %d (1-10)\n", i);
            scanf("%d", &puntaje);
            if (puntaje < 1 || puntaje > 10)
            {
                printf("Valor invalido.\n");
            }
        } while (puntaje < 1 || puntaje > 10);

        if (puntaje <= 10 && puntaje >= 9)
        {
            bonif = salarioBase * 0.20;
            excelente++;
            printf("La categoria de desempenio del empleado %d es: Excelente\n", i);
            printf("El monto de la bonificacion correspondiente es: %.2f\n", bonif);
        }
        else if (puntaje >= 7 && puntaje <= 8)
        {
            bonif = salarioBase * 0.10;
            bueno++;
            printf("La categoria de deseempenio del empleado %d es: Bueno\n", i);
            printf("El monto de la bonificacion correspondiente es: %.2f\n", bonif);
        }
        else if (puntaje >= 5 && puntaje <= 6)
        {
            bonif = salarioBase * 0.05;
            regular++;
            printf("La categoria de deseempenio del empleado %d es: Regular\n", i);
            printf("El monto de la bonificacion correspondiente es: %.2f\n", bonif);
        }
        else
        {
            bonif = 0;
            deficiente++;
            printf("La categoria de desempenio del empleado %d es: Deficiente\n", i);
            printf("El monto de la bonificacion correspondiente es: %.2f\n", bonif);
        }
    }

    printf("\nNumero de empleados con desempenio Excelente: %d\n", excelente);
    printf("Numero de empleados con desempenio Bueno: %d\n", bueno);
    printf("Numero de empleados con desempenio Regular: %d\n", regular);
    printf("Numero de empleados con desempenio Deficiente: %d\n", deficiente);

    system("pause");
    return 0;
}