function feat2()
{
    var python = require("python-shell")
    var path = require("path")
    
    var options = {
        scriptPath : path.join(__dirname, '/../engine/'),
        pythonPath : 'usr/bin/python3'
    }
    
    var namePrint = new python('feature2.py', options);
    namePrint.on('message', function(message)
                {
        swal(message);
    })
}