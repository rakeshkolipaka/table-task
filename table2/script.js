function loadData(data){

	for(var i=0;i<data.length;i++){
    $("#table1").append("<tr><td>"+data[i].userId+"</td><td>"+data[i].id+"</td><td>"+data[i].title+"</td><td>"+data[i].body+"</td><td><button type='button' class='btn btn-default' id='edit1'><span class='glyphicon glyphicon-pencil'><button type='button' class='btn btn-default' id='delet' ><span class='glyphicon glyphicon-trash'>"+"</span></button></span></button></td></tr>");
  
  
}
};

$.ajax('http://jsonplaceholder.typicode.com/posts', {
	method:'GET'
}).then(function(data){
	loadData(data);

});
$("#submit").click(function(){
	var x=$("#userId").val();
	var y=$("#title").val();
	var z=$("#body").val();
  $.ajax('http://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  data: {
    title: y,
    body: z,
    userId: x
  }
}).then(function(data) {
  console.log(data);
});

});