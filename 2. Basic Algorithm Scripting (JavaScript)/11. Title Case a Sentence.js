function titleCase(str) {

    let newStr = str.toLowerCase().split(" ");
    
    for(let i =0 ; i<newStr.length; i++)
    {
      newStr[i] = newStr[i].charAt(0).toUpperCase()+newStr[i].substr(1);
    
    }
    
    
    
    
      return newStr.join(' ');
    }
    
    titleCase("I'm a little tea pot");