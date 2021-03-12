$(document).ready(function(){
   const accessToken=window.localStorage.getItem('accessToken');
   if(!accessToken)
        {
            alert('No access Token');
            return;
        }
    else
    {
        alert(accessToken)
    }
})