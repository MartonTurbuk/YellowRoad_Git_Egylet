
var ObjMasterDiv=document.querySelector('#list');
var ObjDetailDiv=document.querySelector('#charview');
//StarWars
var tobeDisplayed=["name","height","mass","hair_color","skin_color","eye_color","birth_year","gender"];


function IdGenerator(){
    for(var i=0;i<StarWars.length;i++){
        StarWars[i].id=i;
    }
}

function DisplayMaster(){
    var Table=document.createElement("TABLE");
    for(var i=0;i<StarWars.length;i++){
        var Row=document.createElement("TR");
        var Data=document.createElement("TD");
        Data.innerHTML=StarWars[i].name;
        Row.appendChild(Data);
        Table.appendChild(Row);
    }
    ObjMasterDiv.appendChild(Table);
}

function DisplayDetails(){
    var Table=document.createElement("TABLE");
    for(var i=0;i<StarWars.length;i++){
        var Row=document.createElement("TR");
        for(var j=0;j<tobeDisplayed.length;j++){
            var Data=document.createElement("TD");
            Data.innerHTML=StarWars[i][tobeDisplayed[j]];
        }
        Row.appendChild(Data);
        Table.appendChild(Row);
    }
    ObjDetailDiv.appendChild(Table);
}