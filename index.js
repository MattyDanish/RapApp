$(function(){

$('#search').keypress(function(e){
  $('.result').html('')
  let rhymeWord = $('#search').val().trim()
  let urlString = `https://api.datamuse.com/words?rel_rhy=${rhymeWord}`

  	$.get(urlString, function(data) {
  		//$( ".result" ).html( "data = "+data );
      if(Object.keys(data).length===0) {
      $('.result').html('No Results, Playa')
      
      }
  		for(let key in data) {
  			$( ".result" ).append(data[key].word+"<br />")
  		}
});
})
})