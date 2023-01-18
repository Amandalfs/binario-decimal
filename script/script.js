let btnClick = document.querySelector('.btnClick');
btnClick.addEventListener('click', enter)

function enter(){
    let binario = document.querySelector('.txtBinario');
    let errorBinario = document.querySelector('.Container-post-Error');
    let post = document.querySelector('.Container-post-res');
    binario = String(binario.value)
    let numeroMax = 1
    let decimal = 0;
    if (verificar(binario)) {
        /* vendo o valor maximo que um numero pode adquirir por vez*/
        post.innerHTML = '';
        for(let c = 0; c<binario.length-1; c++) {
            numeroMax *= 2
            
        }
        for(let el of binario) {
            if(el==1) {
                if(numeroMax<0) {
                numeroMax = 1
                }
                decimal += numeroMax
            }
            numeroMax /= 2;
            
            
        }
        post.innerHTML = `<p>o valor de ${binario} Binario em Decimal é ${decimal}</p>`;
    } else {
        errorBinario.style.display = 'block';
        errorBinario.innerHTML = "numero binario invalido"
    }


}
/* Verificar se o numero de input nao tem outro numero alem de 0 e 1 */
function verificar(binario){
    for(let el of binario) {
        if(el==0 || el==1) {

        } else {
            return false
        }
    }
    return true
}