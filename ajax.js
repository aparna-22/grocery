function ajax(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
        var response=JSON.parse(this.responseText);
        console.log(response);
        var Jproduct=response.products;
        console.log(Jproduct);

        var col=[];
        for (var i=0;i<Jproduct.length;i++)
        {
            for(var key in Jproduct[i]){
                if(col.indexOf(key)===-1){
                    col.push(key);
                }
            }
        }
        //table creation
        var table=document.createElement("table");

        var tr=table.insertRow(-1);            //table row
        for(var i=0;i<col.length; i++){
            var th =document.createElement("th");      //table header
            th.innerHTML=col[i];
            tr.appendChild(th);
        }
        //add json data as rows to the table
        for (var i=0; i<Jproduct.length;i++){
            tr=table.insertRow(-1);
            for (var j=0;j<col.length;j++){
                var tabCell=tr.insertCell(-1);
            tabCell.innerHTML=Jproduct[i][col[j]];
            
            }
        }
        var divContainer=document.getElementById("table_list");
        divContainer.innerHTML="";
        divContainer.appendChild(table);

        }
    }
    xhttp.open("GET","ajax.json",true);
    xhttp.send();
}