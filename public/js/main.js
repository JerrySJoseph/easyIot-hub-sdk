
const REGISTER_ROUTE='/api/v1/hub/register';
const LOGIN_ROUTE='/api/v1/hub/login';



//registering events

$( "#register_button" ).click(function() {
        register();
  });

$( "#registermodal" ).keypress(function(e) {
    
    if(e.which===13)
        register();
});
$( "#loginmodal" ).keypress(function(e) {
    
    if(e.which===13)
        login();
});
  $("#login_button").click(function() {
        login();
  });


// methods

function register()
{
    var proceed=true;

    //extracting the data from DOM elements 
    const ip=$('#server_ip_register').val();
    const name=$('#hub_name_register').val();
    const pass=$('#hub_pass_register').val();
    const data={
        name:name,
        password:pass
    };
    if(!ip || ip.length<1)
    {
        $('#server_ip_register').error()
    }
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
                showAlertRegister(`Your hub has been registered successfully. Close this dialog and Login with Hub name : ${jsondata.msg.name} and the your password`,'alert-success');
            }
            else
            showAlertRegister(`<strong>Error</strong>: ${jsondata.msg}`,'alert-danger')
    })
    .catch(err=>console.log(err));
}

function login() {
    //extracting the data from DOM elements 
    const ip=$('#server_ip_login').val();
    const name=$('#hub_name_login').val();
    const pass=$('#hub_pass_login').val();
    const data={
        name:name,
        password:pass
    };

    //fetching the API response
    const url=ip+LOGIN_ROUTE;

    fetch(url,{
        method: "POST",
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(jsondata=>{

        if(jsondata.success)
            {
                
                
                window.location.href='/dashboard.html'
            }
            else
            showAlertLogin(`<strong>Error</strong>: ${jsondata.msg}`,
                'alert-danger');
    })
    .catch(err=>console.log(err));
}

function showAlertRegister( message, alerttype ) {

    $('#alert_placeholder_register').html(' <div class="alert '+alerttype+'" id="alertdiv" role="alert">'+message+'</div>')

    // close it in 3 secs
    setTimeout( function() {
            $("#alertdiv").remove();
        }, 10000);

}


function showAlertLogin( message, alerttype ) {

    $('#alert_placeholder_login').html(' <div class="alert '+alerttype+'" id="alertdiv" role="alert">'+message+'</div>')

    // close it in 3 secs
    setTimeout( function() {
            $("#alertdiv").remove();
        }, 10000);

}