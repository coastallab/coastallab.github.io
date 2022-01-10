function toggleBibtex(articleid) {
	var bib = document.getElementById('bib_'+articleid);
	if (bib) {
		if(bib.className.indexOf('bibtex') != -1) {
		bib.className.indexOf('noshow') == -1?bib.className = 'bibtex noshow':bib.className = 'bibtex';
		}
	} else {
		return;
	}
}


function setAffixSize() {
	var $affixElement = $('div[data-spy="affix"]');
    $affixElement.width($affixElement.parent().width());
}

window.onresize = function(){setAffixSize()}; /* on resize */
window.onload   = function(){setAffixSize()}; /*on page ready */

/* Sets the 'Publications' Navbar header to something
   specific when displaying pubs by keyword
 */
function setPubsHeaderText(newText){
	document.getElementById("snh1HeaderText").innerHTML = newText;
}