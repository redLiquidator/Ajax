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

    xhttp.open('GET','http://localhost:8081/ords/scott/acidity/');
    xhttp.send();
}

// getDept(deptno,success,fail)
function getDept(acidity,success,fail){
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

    xhttp.open("GET","http://localhost:8081/ords/scott/acidity/"+acidity);
    xhttp.send();
}

// postDept
function postDept(acidity, success,fail){
        console.log(acidity);
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

    xhttp.open("POST","http://localhost:8081/ords/scott/acidity/");
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send(JSON.stringify(acidity));
}

//putDept
function putDept(acidity, success,fail){
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

    xhttp.open("PUT","http://localhost:8081/ords/scott/acidity/"+acidity.acidity);
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send(JSON.stringify(acidity));
}


// deleteDept(deptno,success,fail)
function deleteDept(acidity,success,fail){
    console.log("acidity"+acidity);
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

    xhttp.open("DELETE","http://localhost:8081/ords/scott/acidity/"+acidity);
    xhttp.send();
}