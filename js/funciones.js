

  const comparaNumeros = (a, b, c) => 
    a === b && b === c 
      ? 'Los 3 números son iguales' 
      : a === b 
        ? `El número 1- ${a} es igual al número 2- ${b}, pero diferente de 3- ${c}`
        : a === c 
          ? `El número 1- ${a} es igual al número 3- ${c}, pero diferente de 2- ${b}`
          : b === c 
            ? `El número 2- ${b} es igual al número 3- ${c}, pero diferente de 1- ${a}`
            : 'Todos los números son diferentes';

  const validarNumeros = (a, b, c) => {
      const mayor = Math.max(a, b, c);
      const menor = Math.min(a, b, c);
      return `El mayor es: ${mayor}, el menor es: ${menor}`;
    }

  
  console.log(comparaNumeros(4, 4, 5));  
  console.log(validarNumeros(4, 4, 4)); 