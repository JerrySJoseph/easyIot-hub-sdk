
const REGISTER_ROUTE='/api/v1/hub/register';

$( "#register_button" ).click(function() {

    //extracting the data from DOM elements 
    const ip=$('#server_ip').val();
    const name=$('#hub_name').val();
    const pass=$('#hub_pass').val();
    const data={
        name:name,
        password:pass
    };

    //fetching the API response
    const url=ip+REGISTER_ROUTE;

    fetch(url,{
        method: "POST",
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(data)
    }).then(response=>response.json())
    .then(jsondata=>{
        if(jsondata.success)
            {
                showAlert(`Your hub has been registered successfully. Close this dialog and Login with Hub name : ${jsondata.msg.name} and the your password`,'alert-success');
            }
            else
            showAlert(`<strong>Error</strong>: ${jsondata.msg}`,'alert-danger')
    })
    .catch(err=>console.log(err));

  });


function showAlert( message, alerttype ) {

    $('#alert_placeholder').html(' <div class="alert '+alerttype+'" id="alertdiv" role="alert">'+message+'</div>')

    // close it in 3 secs
    setTimeout( function() {
            $("#alertdiv").remove();
        }, 10000);

}