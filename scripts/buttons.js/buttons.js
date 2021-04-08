function tenfour() {
    for (let i= 1; i <= 100; i++) {
         if (i % 4 == 0 && i % 10 === 0) {
             console.log("TenFour!");
            
         }
         else if (i % 4 === 0) {
             console.log("Four");
         }
         else if (i % 10 === 0) {
             console.log("ten");
         }
         else {
             console.log(i);
         }

     }
 }

 function whilesumThrees() {
     let sum = 0;
     let i = 0;
     while(i < 1000) {
        sum += i;
        i = i + 3;
    }
    console.log(sum)
 }
 

 