function frankenSplice(arr1, arr2, n) {


    let copyarr = arr2.slice();
    
      copyarr.splice(n,0, ...arr1);
      return copyarr;
    }
    
    frankenSplice([1, 2, 3], [4, 5, 6], 1);