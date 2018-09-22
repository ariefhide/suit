var tanya = true;

while(tanya){
		//menangkap pilihan player
	var p =prompt('pilih : gunting, batu, kertas');

	//menangkap pilihan komputer
	//membangkitkan bilangan random
	var comp = Math.random();
	console.log(comp);

	if(comp < 0.34){
		comp = 'gunting';
	}else if(comp >= 0.34 && comp <0.67){
		comp='batu';
	}else{
		comp='kertas';
	}
	console.log(comp)

	hasil = '';
	//menentukan rules
	if (p == comp){
		hasil = 'hasil seri';
	}else if (p == 'gunting'){
		hasil = (comp =='kertas') ? 'MENANG!' : 'KALAH!';
	}else if (p == 'batu'){
		hasil = (comp =='gunting') ? 'MENANG!' : 'KALAH!';
	}else if (p == 'kertas'){
		hasil = (comp =='batu') ? 'MENANG!' : 'KALAH!';
	}else{
		hasil = 'anda salah input';
	}

	//tampilkan hasilnya
	alert('kamu memilih : ' +p+ ' dan komputer memilih : '+comp+' \n hasilnya kamu '+hasil);
tanya = confirm('lagi ga bosqu?');
}

alert('thanks for watching');