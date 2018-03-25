//console.log(document.scripts)
document.write("<table>");
document.write("<tr><td onclick='greek_alphabet_table_speak(this)'>Α</br>α</br>alpha</td><td onclick='greek_alphabet_table_speak(this)'>Β</br>β</br>beta</td><td onclick='greek_alphabet_table_speak(this)'>Γ</br>γ</br>gamma</td><td onclick='greek_alphabet_table_speak(this)'>Δ</br>δ</br>delta</td></tr>");
document.write("<tr><td onclick='greek_alphabet_table_speak(this)'>Ε</br>ε</br>epsilon</td><td onclick='greek_alphabet_table_speak(this)'>Ζ</br>ζ</br>zeta</td><td onclick='greek_alphabet_table_speak(this)'>Η</br>η</br>eta</td><td onclick='greek_alphabet_table_speak(this)'>Θ</br>θ</br>theta</td></tr>");
document.write("<tr><td onclick='greek_alphabet_table_speak(this)'>Ι</br>ι</br>iota</td><td onclick='greek_alphabet_table_speak(this)'>Κ</br>κ</br>kappa</td><td onclick='greek_alphabet_table_speak(this)'>Λ</br>λ</br>lambda</td><td onclick='greek_alphabet_table_speak(this)'>Μ</br>μ</br>mu</td></tr>");
document.write("<tr><td onclick='greek_alphabet_table_speak(this)'>Ν</br>ν</br>nu</td><td onclick='greek_alphabet_table_speak(this)'>Ξ</br>ξ</br>xi</td><td onclick='greek_alphabet_table_speak(this)'>Ο</br>ο</br>omicron</td><td onclick='greek_alphabet_table_speak(this)'>Π</br>π</br>pi</td></tr>");
document.write("<tr><td onclick='greek_alphabet_table_speak(this)'>Ρ</br>ρ</br>rho</td><td onclick='greek_alphabet_table_speak(this)'>Σ</br>σ</br>sigma</td><td onclick='greek_alphabet_table_speak(this)'>Τ</br>τ</br>tau</td><td onclick='greek_alphabet_table_speak(this)'>Υ</br>υ</br>upsilon</td></tr>");
document.write("<tr><td onclick='greek_alphabet_table_speak(this)'>Φ</br>φ</br>phi</td><td onclick='greek_alphabet_table_speak(this)'>Χ</br>χ</br>chi</td><td onclick='greek_alphabet_table_speak(this)'>Ψ</br>ψ</br>psi</td><td onclick='greek_alphabet_table_speak(this)'>Ω</br>ω</br>omega</td></tr>");
document.write("</table>");

function greek_alphabet_table_speak(item){
	//console.log(item);
	//console.log(item.innerHTML.replace(new RegExp("<.?br>","g"),"_"));
	var mp3_map;
	var mp3_uri="";
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
	mp3=mp3_map[item.innerHTML.replace(new RegExp("<.?br>","g"),"_")];
	//console.log(mp3);
	var audio;
	audio=document.createElement("audio");
	audio.src=mp3_uri+"/audio/"+mp3;
	audio.play();
	//console.log(audio);

}
