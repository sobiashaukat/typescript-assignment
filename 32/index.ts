const  current_users =["ali","zaib","zain","zaid","sufi","Sani"];
const new_users =["andy","sani",'pinki',"sunny","aine"];
for(let i =0 ; i<new_users.length;i++){
    if(current_users.some(presentusername =>presentusername.toLowerCase() === new_users[i].toLowerCase())){
        console.log(`The User'${new_users[i]}  will need to enter a new username`);
    }else{
        console.log(` The username '${new_users[i]}' is available.`)
    }

   
   
   
      
}