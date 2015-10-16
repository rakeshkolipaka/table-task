function loadData(){
  $.ajax('http://localhost:3000/comments', {
    method:'GET'
  }).then(function(data){
    console.log("loadData in ajax gettop");
      for(var i=0;i<data.length;i++){
      $("#formContainer").append("<div class='row datarow'><div class='col-md-1 col-sm-1 col-xs-2'><span>"+data[i].userId+"</span></div><div class='col-md-1 col-sm-1 col-xs-2' data-toggle='modal' data-target='#myModal2' onclick='control2("+i+")'><span>"+data[i].id+"</span></div><div class='col-md-2 col-sm-2 col-xs-8'><span>"+data[i].title+"</span></div><div class='col-md-6 col-sm-6 col-xs-12'><span>"+data[i].body+"</span></div><div class='col-md-2 col-sm-2 col-xs-2'><span><button type='button' class='btn btn-warning' id='edit1' data-toggle='modal' data-target='#myModal' onclick='control("+i+")' ><span class='glyphicon glyphicon-pencil'></span></button>"+"<button type='button' class='btn btn-danger' id='delet' onclick='control1("+data[i].id+")' data-toggle='tooltip' data-placement='top' title='This will Delet the data' ><span class='glyphicon glyphicon-trash'>"+"</span></button></span></div></div>");  
      //$("#table1").append("<tr><td>"+data[i].userId+"</td><td>"+data[i].id+"</td><td>"+data[i].title+"</td><td class='col-md-3'>"+data[i].body+"</td><td><button type='button' class='btn btn-warning' id='edit1' data-toggle='modal' data-target='#myModal' onclick='control("+data[i].id+")' ><span class='glyphicon glyphicon-pencil'></span></button><button type='button' class='btn btn-danger' id='delet' onclick='control1("+data[i].id+")' data-toggle='tooltip' data-placement='top' title='This will Delet the data' ><span class='glyphicon glyphicon-trash'>"+"</span></button></td></tr>");  
  }
  });
};

$(document).ready(function(){
  loadData();
  
  });


$("#submit").click(function(){
  	var x=$("#userId").val();
  	var y=$("#title").val();
  	var z=$("#body").val();
    if(x!=""&&y!=""&&z!=""){
      $.ajax('http://localhost:3000/comments', {
      method: 'POST',
      data: {
        title: y,
        body: z,
        userId: x
      }
      }).then(function(data) {
        loadData();
      });
    }
    else {
      alert("every feild is Required")
    }
});
function control1(no){

    $.ajax('http://localhost:3000/comments/'+no+'', {
    method: 'DELETE'
    }).then(function(data){
      $(".datarow").remove();
      loadData();
      });
    $("#deleted").show();
}

function control(lo){ 
    var j=lo;
      $.ajax('http://localhost:3000/comments', {
        method:'GET'
      }).then(function(data){

          
        document.getElementById("uidNew").innerHTML=data[j].userId;
        document.getElementById("tNew").innerHTML=data[j].title;
        document.getElementById("bodyNew").innerHTML=data[j].body;
      $("#submit2").click(function(){ 
            var a=$("#uidNew").val();
            var b=$("#tNew").val();
            var c=$("#bodyNew").val();
        if(a!=""&&b!=""&&c!=""){
          $.ajax('http://localhost:3000/comments/'+data[j].id+'', {
            method: 'PATCH',
            data: {
              title: b,
              userId:a,
              body:c 
            }
          }).then(function(data) {
            $(".datarow").remove();
           loadData();
          });
        }
        else{
          alert("every feild required");654
        }
      });

});
}
function control2(k){

  $.ajax('http://localhost:3000/comments', {
        method:'GET'
      }).then(function(data){

          console.log('log:'+k+"="+data[k].id);
        document.getElementById("userIdEdit").innerHTML=data[k].userId;
        document.getElementById("titleEdit").innerHTML=data[k].title;
        document.getElementById("bodyEdit").innerHTML=data[k].body;
        $("#submit1").click(function(){ 
            var g=$("#userIdEdit").val();
            var h=$("#titleEdit").val();
            var l=$("#bodyEdit").val();
        if(g!=""&&h!=""&&l!=""){
          $.ajax('http://localhost:3000/comments/'+data[k].id+'', {
            method: 'PATCH',
            data: {
              title: h,
              userId:g,
              body:l 
            }
          }).then(function(data) {
            $(".datarow").remove();
           loadData();
          });
        }
        else{
          alert("every feild required");654
        }
      });
});
}

$("#reload").click(function(){
  $("#editDetails")[0].reset();
  });
$("#reload1").click(function(){
  $("#addNewRow")[0].reset();
  });
$("#reload2").click(function(){
  $("#editD")[0].reset();
  });
