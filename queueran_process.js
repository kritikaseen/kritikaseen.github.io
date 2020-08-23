function run(){
	var els = document.getElementsByClassName("verses");
	var sel_el = document.getElementById("verseSelector");

	for(var i=0;i<els.length;i++){
		var elem_id = els[i].id;
		var option_txt = 'Verse ' + elem_id.replace("_",".");


		var option = document.createElement('option');
    	option.setAttribute('value', elem_id);
    	option.appendChild(document.createTextNode(option_txt));
    	sel_el.appendChild(option);
	}
}

function displayVerse(){
	var elem = document.getElementById("verseSelector");
	var value = elem.options[elem.selectedIndex].value;

	var verse_elem = document.getElementsByClassName("verses");


	if(value === "all"){
		for(var i=0;i<verse_elem.length;i++){
			verse_elem[i].style.display = 'block';
		}
	}else{
		for(var i=0;i<verse_elem.length;i++){
			verse_elem[i].style.display = 'none';
		}
		var show_elem = document.getElementById(value);
		show_elem.style.display = 'block';
	}
}