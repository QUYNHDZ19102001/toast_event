function toast(
    {title ='', 
    message='', 
    type='', 
    duration=3000

}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        const autoRemove = setTimeout(function() {
            main.removeChild(toast);
        }, 3000)
        toast.onclick = function(e){
            
            if (e.target.closest('.toast__close')) {
                
                main.removeChild(toast);
                clearTimeout(autoRemove);

               
            }
        }
        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            waring: 'fa-solid fa-triangle-exclamation',
            error: 'fa-solid fa-triangle-exclamation'
        }
        const icon = icons[type];

        toast.classList.add('toast', `toast--${type}`);
       
        toast.innerHTML = `
                            <div class="toast__icon">
                       <i class="${icon}"></i>
                           </div>
                         <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
            
                         <p class ="toast__msg">${message}</p>
            
 
                        </div>
                         <div class="toast__close">
                        <i class="fa-solid fa-xmark"></i>
  
                             </div>
                               `;
        main.appendChild(toast);
        
    }
    
}

function showSuccess(){
    toast({
        title: 'success', 
        message: 'Troubleshooting',
        type: 'success',
        duration: 3000
    })

}
function showInfo(){
    toast({
        title: 'info', 
        message: 'Troubleshooting',
        type: 'info',
        duration: 3000
    })

}
function showWaring(){
    toast({
        title: 'waring', 
        message: 'Troubleshooting',
        type: 'waring',
        duration: 3000
    })

}
function showError(){
    toast({
        title: 'error', 
        message: 'Troubleshooting',
        type: 'error',
        duration: 3000
    })

}