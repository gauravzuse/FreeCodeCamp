function truncateString(str, num) {

    let t = str.substr(0, num);
    
    
    if(t!=str)
    {
      t += "...";
    }
    
    return t;
    
    
    }
    truncateString("A-tisket a-tasket A green and yellow basket", 8);