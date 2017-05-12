

var ObjMasterDiv=document.querySelector('#list');
var ObjDetailDiv=document.querySelector('#charview');
//kiirandó adatok listája
var tobeDisplayed=["name","height","mass","hair_color","skin_color","eye_color","birth_year","gender"];

var DataMaster=[];

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
        DataMaster.push(' ');
        var Row=document.createElement("TR");
        DataMaster[i]=document.createElement("TD");
        DataMaster[i].innerHTML=StarWars[i].name;
        DataMaster[i].setAttribute('id',i);
        DataMaster[i].addEventListener(click,function(event){
            DisplayDetails(event.target.id);
        })
        Row.appendChild(Data);
        Table.appendChild(Row);
    }
    ObjMasterDiv.appendChild(Table);
}

// a tobeDisplayed tömbbe írt adatokat listázza ki
function DisplayDetails(incomingID){
    ObjDetailDiv.innerHTML=" ";
    var Table=document.createElement("TABLE");
    var Row=document.createElement("TR");
    for(var j=0;j<tobeDisplayed.length;j++){
        var Data=document.createElement("TD");
        Data.innerHTML=StarWars[incomingID][tobeDisplayed[j]];
        Row.appendChild(Data);
    }
    Table.appendChild(Row);
    ObjDetailDiv.appendChild(Table);
}
