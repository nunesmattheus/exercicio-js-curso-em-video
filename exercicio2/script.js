function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
   
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '' 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')      
        img.setAttribute('width', '250px')
        img.setAttribute('heigth', '250px')  
             
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){                
                img.setAttribute('src', 'fotobebe-m.jpg')                
            }    
            else if(idade < 21){                
                img.setAttribute('src', 'fotojovem-m.jpg')
            }
            else if(idade < 50){               
                img.setAttribute('src', 'fotoadulto-m.jpg')
            }
            else{                
                img.setAttribute('src', 'fotoidoso-m.jpg')
                
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotobebe-f.jpg')
            }
            else if(idade < 21){
                img.setAttribute('src', 'fotojovem-f.jpg')
            }
            else if(idade < 50){
                img.setAttribute('src', 'fotoadulto-f.jpg')
            }
            else{
                img.setAttribute('src', 'fotoidoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}