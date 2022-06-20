function chunkArrayInGroups(arr, size) {

    let chunks = [];
    
    for(let i =0; i<arr.length; i += size)
    {
    chunks.push(arr.slice(i, i+size));
    
    }
    
    return chunks;
    
    }
    
    chunkArrayInGroups(["a", "b", "c", "d"], 2);


    //OP -> [[a,b],[c,d]]