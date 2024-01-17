let a = [ 1,2,3,4,5,6,7,8,9,6,7,8]
        let c = []
        for(let i =0 ; i<a.length;i++){
            let b =true
            count =0
            for (k=0; k<a.length;k++){
                if (i!=k && a[k] === a[i]){
                    b = false
                    break
                }
            }
            if(b){
                c.push(a[i])
               if(a.length ===2){
                break
               }
            }
        }
        console.log(c)