function getName()
{
    alert("function getName called");
    var python = require("python-shell")
    var path = require("path")
    
    var name = document.getElementById("name").value
    document.getElementById("name").value = "";
    
    var options = {
        scriptPath : path.join(__dirname, '/../engine/'),
        pythonPath : 'usr/bin/python3',
        args : [name]
    }
    
    var namePrint = new python('feature1.py', options);
    namePrint.on('message', function(message)
                {
        swal(message);
    })
}