

var ObjMasterDiv=document.querySelector('#list');
var ObjDetailDiv=document.querySelector('#charview');
//kiirandó adatok listája
var tobeDisplayed=["name","height","mass","hair_color","skin_color","eye_color","birth_year","gender"];
var tobeDisplayed2=["Name","Height","Mass","Hair color","Skin color","Eye color","Birth year","Gender"];

var DataMaster=[];

//beszédes az elnevezés, csak ha esetleg szükség lenne rá, id-zi a táblát
function IdGenerator(){
    for(var i=0;i<StarWars.length;i++){
        StarWars[i].id=i;
    }
}

//Master oldal megjelenítés, táblázat, for ciklusra kilistázza külön sorokba a name értékeket
window.onload=DisplayMaster(StarWars);

function DisplayMaster(StarWars){
    strippedData();
        ObjMasterDiv.innerHTML=' ';
        var Table=document.createElement("TABLE");
        for(var i=0;i<StarWars.length;i++){
            DataMaster.push(' ');
            var Row=document.createElement("TR");
            DataMaster[i]=document.createElement("TD");
            DataMaster[i].classList.add("swNamesTD");
            Row.classList.add("swNamesTR");
            DataMaster[i].innerHTML=StarWars[i].name;
            DataMaster[i].setAttribute('id',i);
            DataMaster[i].currentList=StarWars;
            DataMaster[i].addEventListener('click',function(event){
                DisplayDetails(event.target.id,event.target.currentList);
            })
            Row.appendChild(DataMaster[i]);
            Table.appendChild(Row);
        }
        ObjMasterDiv.appendChild(Table);
}


// a tobeDisplayed tömbbe írt adatokat listázza ki
function DisplayDetails(incomingID,StarWars){
    ObjDetailDiv.innerHTML=" ";
    var Table=document.createElement("TABLE");
    
    for(var j=0;j<tobeDisplayed.length;j++){
        var Row=document.createElement("TR");
        var DataX=document.createElement("TD");
        DataX.innerHTML=tobeDisplayed2[j];
        var Data=document.createElement("TD");
        Data.classList.add("swDataTD");
        DataX.classList.add("swDataTD");
        Row.classList.add("swDataTR");
        Data.innerHTML=StarWars[incomingID][tobeDisplayed[j]];
        Row.appendChild(DataX);
        Row.appendChild(Data);
        Table.appendChild(Row);
    }
    
    ObjDetailDiv.appendChild(Table);
}

