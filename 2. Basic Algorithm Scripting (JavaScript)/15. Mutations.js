function mutation(arr) {

    let a = arr[0].toLowerCase();
    let b = arr[1].toLowerCase();
    
    for(let i=0; i<b.length; i++)
    {
      let match = a.indexOf(b[i]);
    
      if(match ===-1)
    
    {
      return false;
    }}
    
      return true;
    }
    
    mutation(["hello", "hey"]);