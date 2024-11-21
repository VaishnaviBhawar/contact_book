const contacts = {
    vaishnavi: "8767055734",
    shreya: "5645342312",
    pinky: "56453423122",
    rudrash: "5645346782",
    arjun: "9876543210",
    priya: "8765432109",
    rajesh: "7654321098",
    kavita: "6543210987",
    ankit: "5432109876",
    meera: "4321098765"
};

function search(){
    const searchinput=document.getElementById("search");
    const query=searchinput.value.toLowerCase();
    const mobile = contacts[query];
    const result=document.getElementById("result");
    if(mobile){
        result.innerText= 'name is  '+query+' and moblie is '+mobile;
    }
    else{
        result.innerText='contact was not found';
    }
}

