

var ObjMasterDiv=document.querySelector('#list');
var ObjDetailDiv=document.querySelector('#charview');
//kiirandó adatok listája
var tobeDisplayed=["name","height","mass","hair_color","skin_color","eye_color","birth_year","gender"];

//beszédes az elnevezés, csak ha esetleg szükség lenne rá, id-zi a táblát
function IdGenerator(){
    for(var i=0;i<StarWars.length;i++){
        StarWars[i].id=i;
    }
}

//Master oldal megjelenítés, táblázat, for ciklusra kilistázza külön sorokba a name értékeket
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

// a tobeDisplayed tömbbe írt adatokat listázza ki
function DisplayDetails(){
    var oncklickValue=event.target.value;
    var Table=document.createElement("TABLE");
    var Row=document.createElement("TR");
    for(var j=0;j<tobeDisplayed.length;j++){
        var Data=document.createElement("TD");
        Data.innerHTML=StarWars[oncklickValue][tobeDisplayed[j]];
        Row.appendChild(Data);
    }
    Table.appendChild(Row);
    ObjDetailDiv.appendChild(Table);
}
