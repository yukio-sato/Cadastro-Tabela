var tabela = []
var username

userdt = function userDT()
{
if (username != "" && username != " ")
    {
    var elem = document.createElement("h2");
    elem.textContent = (tabela.length)+"- "+username;
    elem.id = username;
    document.getElementById("userDataTable").appendChild(elem);
    }
}

function updt()
{
    username = document.getElementById("userName").value
    document.getElementById("labelName").textContent = "Salvo com Sucesso!"
    if (username != "" && username != " ")
    {
    tabela.push(username);
    }
    userdt();
    setTimeout(function(){
            document.getElementById("labelName").textContent = ""
    }, 1500);
}
function clr()
{
    for (var i=0; i< tabela.length; i++)
    {
    document.getElementById("userDataTable").removeChild(document.getElementById(tabela[i]));
    }
    tabela = [];
}

