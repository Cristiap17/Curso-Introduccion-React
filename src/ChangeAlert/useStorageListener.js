import React from "react";

function useStorageListener(sincronize) {
    const [storageChange, setStoragechange] = React.useState(false);

        window.addEventListener('storage', (change)=>{
            if (change.key === 'TODOS_V1') {
                console.log('Hubo cambios en TODOS_V1');
                setStoragechange(true)
            }
        })

        const toggleShow = ()=> {
            sincronize();
            setStoragechange(false);
        }

        return {
            show: storageChange,
            toggleShow: toggleShow
        }    
    }    

export { useStorageListener }