
 const leftRoles = document.getElementById('select-ml');
 const rightRoles = document.getElementById('select-ms');
 const btnAddRole = document.getElementById("btn-add-role");
 const btnRemoveRole = document.getElementById("btn-remove-role");
 let leftSide = [];
 let rightSide = [];
 let leftArray = [];
 let rightArray = [];
             
            btnAddRole.addEventListener("click", function(e){
           addToRight();
            });

            btnRemoveRole.addEventListener("click", function(){
              addToLeft();
            });


            leftRoles.onclick = function(e){

              if(e.target.selected){
                  if(!leftArray.includes(e.target)){
                    let obj = {};
                    obj.index = leftRoles.selectedIndex;
                    obj.option = e.target;
                    leftArray.push(obj);
                    console.log(leftArray)
                  } 
                  
              }else{
                  leftArray.splice(leftRoles.selectedIndex,1);
              }
            }

            rightRoles.onclick = function(e){
    
              if(e.target.selected){
                  let obj = {};
                    obj.index = rightRoles.selectedIndex;
                    obj.option = e.target;
                    rightArray.push(obj);
                
              }else{
                   rightArray.splice(rightRoles.selectedIndex,1);
              }

            }
            

            function addToRight(){
             
              for(let i = 0; i < leftArray.length; i++){
                let index = leftArray[i].index;
                let exOption = leftArray[i].option;
                rightRoles.add(exOption, rightRoles[index]);
              }
              leftArray = [];
            }

            function addToLeft(){
              
              for(let i = 0; i < rightArray.length; i++){
                let index = rightArray[i].index;
                console.log("This is index " + index);
                let exOption = rightArray[i].option;
                leftRoles.add(exOption, leftRoles[index]);
              }
              rightArray = [];
          }