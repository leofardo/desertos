class Fundo{
	trocarFundo(){
		let fundos = ['fundo-1', 'fundo-2', 'fundo-3']	

		setInterval(function(){
		 for (var i = fundos.length - 1; i >= 0; i--) {
		 	let classAtual = document.getElementById('slide-bg').classList[0]

				if(classAtual == fundos[i]){
					if(i !== 2){
						document.getElementById('slide-bg').classList = fundos[i + 1]
					}else{
						document.getElementById('slide-bg').classList = fundos[0]
					}
					break
				}
			}
		}, 5000);
	}
}

class Menu{
	abrirFecharMenu(){
		if(document.getElementById('menu-opcoes').classList[0] == 'menuOff'){
			document.getElementById('menu-opcoes').classList = 'menuOn'
		}else{
			document.getElementById('menu-opcoes').classList = 'menuOff'
		}
	}
}

class Imagem{
	animarData(child){
		for (var i = 1; i <= 3; i++) {
			if(child == i){
				document.querySelector(`.desertos:nth-child(${i}) .imagem div`).classList = 'anim-data'	
			}
		}
	}

	pararAnimacao(child){
		for (var i = 1; i <= 3; i++) {
			if(child == i){
				document.querySelector(`.desertos:nth-child(${i}) .imagem div`).classList = ''	
			}
		}
	}
}

fundo = new Fundo();
menu = new Menu();
imagem = new Imagem();

fundo.trocarFundo();