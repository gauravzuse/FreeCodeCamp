function factorialize(num) {

    let newNum=1;
    
    for(let i = 1; i<=num; i++)
    {
    
    newNum *= i;
    
    }
    
      return newNum;
    }
    
    factorialize(5);