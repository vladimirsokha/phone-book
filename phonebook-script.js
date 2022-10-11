 document.getElementById('js-show-all').addEventListener('click', function(){

   document.getElementById('show-panel').style.display = 'block';
   
   document.getElementById('search-panel').style.display = 'none';
   document.getElementById('contact-panel').style.display = 'none';
 });
 
 document.getElementById('js-search').addEventListener('click', function(){
   document.getElementById('show-panel').style.display = 'none';
   document.getElementById('search-panel').style.display = 'block';
   document.getElementById('contact-panel').style.display = 'none';
 });
 
 document.getElementById('js-add-new').addEventListener('click', function(){
   document.getElementById('show-panel').style.display = 'none';
   document.getElementById('search-panel').style.display = 'none';
   document.getElementById('contact-panel').style.display = 'block';
 });