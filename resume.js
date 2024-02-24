let resume = {
  "contact_info" :{
  "name" : "SURESH S",
  "email" : "suresh361994@gmail.com",
  "mobile_no" : "8610771527"
  },
  "carrer_objective" :`A dedicated and highly qualified Support Engineer with experience in providing technical support
  to end-users in financial industries. Seeking to utilize my expertise by providing support to enterprise organization.`,
  "education_qualification" : {
    "degree" : "BE.EEE - 67%",
    "12 std" : "State board - 67%"
  },
  "Technical_skills" : {
    "computer_lang" : ["C","C++","JAVA","Python"],
    "OS" : ["Windows","Linux"],
    "Other" :"MS_EXCEL"
  },
  "Professional_Experiance" : {
    "Company1":{
      "name" : "Computer Age Management Services",
      "year" : "6+",
      "Designation" : "PO"
    },
    "Company2":{
      "name" : "Globe Tier Infotech Pvt ltd",
      "year" : "3 months",
      "Designation" : "Application Support Engineer L1"
    }
  },
  "Personel_profile" : {
    "Full Name" : "Suresh S",
    "Gender" : "Male",
    "Languages known" : ["Tamil", "English"],
    "Hobbies" : ["Watching Movies", "Listening Songs"],
    "Address" : {
        "door no" : "40/71",
        "Street" : "South Street Main Road", 
        "city": "Aruppukottai",
        "Pincode" : 626101
  }

}

}
const keys = Object.keys(resume);
const val = Object.values(resume);
// for loop
for(let i=0; i<keys.length; i++){
  console.log(keys[i], resume[keys[i]]);
}

// for in loop

for(let keys in resume){
  console.log(keys,resume[keys]);
}

// for of loop

for(let [key,value]  of Object.entries(resume)){
  console.log(key,value);
}

//for each loop

Object.keys(resume).forEach(key=>{
  const value =resume[key];
  console.log(key,value);
})