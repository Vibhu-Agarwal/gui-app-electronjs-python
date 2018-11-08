function getName()
{
    var ps = require("python-shell")
    var path = require("path")
    
    var name = document.getElementById("name").value
    document.getElementById("name").value = "";
    
    var options = {
        scriptPath : path.join(__dirname, '/../engine/'),
        pythonPath : '/usr/bin/python3',
        args : [name]
    }
    
    ps.PythonShell.run('feature1.py', options,
        function (err, results) { if (err) throw err; swal(results[0]); });
}