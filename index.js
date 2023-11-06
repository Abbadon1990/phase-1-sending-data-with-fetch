// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   // method: "POST" is missing from the object below
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });



function submitData(userName, userEmail) {
    const formData = {
        name: userName,
        email: userEmail 
    }
    
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
    return fetch("http://localhost:3000/users", configObj)
    .then(function (response) {
        return response.json();
        })
        .then(function (object) {
            
            document.body.innerHTML = object.id       
             
        })
        .catch(function (error) {
            alert("Unauthorized Access");
            document.body.innerHTML = error.message;
        });
}