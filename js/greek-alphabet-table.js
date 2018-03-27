(function(){
	//console.log(document.scripts)
	var thisScript=document.scripts[document.scripts.length-1];
	var col=parseInt(thisScript.dataset.col);
	switch(col){
		case 1:
		case 2:
		case 3:
		case 4:
		case 6:
		case 8:
		case 12:
		case 24:
			break;
		default:
			col=4;
			break;
	}
	//console.log(col);
	var alphabets=new Array("Α<br />α<br />alpha","Ζ<br />ζ<br />zeta","Λ<br />λ<br />lambda","Π<br />π<br />pi","Φ<br />φ<br />phi","Β<br />β<br />beta","Η<br />η<br />eta","Μ<br />μ<br />mu","Ρ<br />ρ<br />rho","Χ<br />χ<br />chi","Γ<br />γ<br />gamma","Θ<br />θ<br />theta","Ν<br />ν<br />nu","Σ<br />σ<br />sigma","Ψ<br />ψ<br />psi","Δ<br />δ<br />delta","Ι<br />ι<br />iota","Ξ<br />ξ<br />xi","Τ<br />τ<br />tau","Ω<br />ω<br />omega","Ε<br />ε<br />epsilon","Κ<br />κ<br />kappa","Ο<br />ο<br />omicron","Υ<br />υ<br />upsilon");
	document.write("<table class='greek-alphabet-table'>");
	for (var i = 1; i <= 24/col; i++) {
		document.write("<tr class='greek-alphabet-tr'>")
		for (var s = 1;s <= col;s++){
			document.write("<td class='greek-alphabet-td' onclick='greek_alphabet_table_speak(this)' onmousedown='this.className=\"greek-alphabet-td-click\";' onmouseup='this.className=\"greek-alphabet-td\";'>"+alphabets[(i-1)*col+s-1]+"</td>")
		}
		document.write("</tr>");
	}
	document.write("</table>");
	//挂载css
	var css_href="/css/greek-alphabet-table.css"
	var css=document.createElement('link');
	css.rel="stylesheet";
	css.type="text/css";
	css.href=css_href;
	document.head.appendChild(css);
})();


function greek_alphabet_table_speak(item){
	//console.log(item);
	//console.log(item.innerHTML.replace(new RegExp("<.?br>","g"),"_"));
	var mp3_map;
	var mp3_uri="https://raw.githubusercontent.com/ecator/greek-alphabet/master/audio/";
	mp3_map=new Array();
	mp3_map["Α_α_alpha"]="01_Α_α_alpha.mp3";
	mp3_map["Β_β_beta"]="02_Β_β_beta.mp3";
	mp3_map["Γ_γ_gamma"]="03_Γ_γ_gamma.mp3";
	mp3_map["Δ_δ_delta"]="04_Δ_δ_delta.mp3";
	mp3_map["Ε_ε_epsilon"]="05_Ε_ε_epsilon.mp3";
	mp3_map["Ζ_ζ_zeta"]="06_Ζ_ζ_zeta.mp3";
	mp3_map["Η_η_eta"]="07_Η_η_eta.mp3";
	mp3_map["Θ_θ_theta"]="08_Θ_θ_theta.mp3";
	mp3_map["Ι_ι_iota"]="09_Ι_ι_iota.mp3";
	mp3_map["Κ_κ_kappa"]="10_Κ_κ_kappa.mp3";
	mp3_map["Λ_λ_lambda"]="11_Λ_λ_lambda.mp3";
	mp3_map["Μ_μ_mu"]="12_Μ_μ_mu.mp3";
	mp3_map["Ν_ν_nu"]="13_Ν_ν_nu.mp3";
	mp3_map["Ξ_ξ_xi"]="14_Ξ_ξ_xi.mp3";
	mp3_map["Ο_ο_omicron"]="15_Ο_ο_omicron.mp3";
	mp3_map["Π_π_pi"]="16_Π_π_pi.mp3";
	mp3_map["Ρ_ρ_rho"]="17_Ρ_ρ_rho.mp3";
	mp3_map["Σ_σ_sigma"]="18_Σ_σ_sigma.mp3";
	mp3_map["Τ_τ_tau"]="19_Τ_τ_tau.mp3";
	mp3_map["Υ_υ_upsilon"]="20_Υ_υ_upsilon.mp3";
	mp3_map["Φ_φ_phi"]="21_Φ_φ_phi.mp3";
	mp3_map["Χ_χ_chi"]="22_Χ_χ_chi.mp3";
	mp3_map["Ψ_ψ_psi"]="23_Ψ_ψ_psi.mp3";
	mp3_map["Ω_ω_omega"]="24_Ω_ω_omega.mp3";
	mp3=mp3_map[item.innerHTML.replace(new RegExp("<.*?br.*?>","g"),"_")];
	//console.log(mp3);
	var audio;
	audio=document.createElement("audio");
	audio.src=encodeURI(mp3_uri+mp3);
	audio.play();
	//console.log(audio);

}
