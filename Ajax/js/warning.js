// getDeptList
function getDeptList(success,fail){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        console.log("readyState="+xhttp.readyState);
        if(xhttp.readyState == 4){

            if (xhttp.status>=200 && xhttp.status<400){
                var obj = JSON.parse(xhttp.responseText);
                success(obj.items);
            }else{
                fail("getDeptList() 호출에러 status="+xhttp.status)
            }
        }
    }; 

    xhttp.open('GET','http://localhost:8081/ords/scott/warning/');
    xhttp.send();
}

// getDept(deptno,success,fail)
function getDept(hazard_statements,success,fail){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        console.log("readyState="+xhttp.readyState);
        if(xhttp.readyState == 4){

            if (xhttp.status>=200 && xhttp.status<400){
                var item= JSON.parse(xhttp.responseText);
                console.log(item);
                success(item);
            }else{
                fail("getDept() 호출에러 status="+xhttp.status)
            }
        }
    }; 

    xhttp.open("GET","http://localhost:8081/ords/scott/warning/"+hazard_statements);
    xhttp.send();
}

// postDept
function postDept(warning, success,fail){
        console.log(warning);
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        console.log("readyState="+xhttp.readyState);
        if(xhttp.readyState == 4){
            if (xhttp.status>=200 && xhttp.status<400){
                var item = JSON.parse(xhttp.responseText);
                success(item);
            }else{
                fail("postDept() 호출에러 status="+xhttp.status)
            }
        }
    }; 

    xhttp.open("POST","http://localhost:8081/ords/scott/warning/");
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send(JSON.stringify(warning));
}

//putDept
function putDept(warning, success,fail){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        console.log("readyState="+xhttp.readyState);
        if(xhttp.readyState == 4){
            if (xhttp.status>=200 && xhttp.status<400){
                var item = JSON.parse(xhttp.responseText);
                success(item);
            }else{
                fail("putDept() 호출에러 status="+xhttp.status)
            }
        }
    }; 

    xhttp.open("PUT","http://localhost:8081/ords/scott/warning/"+warning.hazard_statements);
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send(JSON.stringify(warning));
}


// deleteDept(deptno,success,fail)
function deleteDept(hazard_statements,success,fail){
    console.log("hazard statements"+hazard_statements);
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        console.log("readyState="+xhttp.readyState);
        if(xhttp.readyState == 4){

            if (xhttp.status>=200 && xhttp.status<400){
                var result= JSON.parse(xhttp.responseText);
                console.log(result);
                success(result);
            }else{
                fail("deleteDept() 호출에러 status="+xhttp.status)
            }
        }
    }; 

    xhttp.open("DELETE","http://localhost:8081/ords/scott/warning/"+hazard_statements);
    xhttp.send();
}