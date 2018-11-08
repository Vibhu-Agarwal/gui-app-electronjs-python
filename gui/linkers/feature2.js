function feat2()
{
    //import {python} from 'python-shell';
    var ps = require("python-shell")
    var path = require("path")
    
    var options = {
        scriptPath : path.join(__dirname, '/../engine/'),
        pythonPath : '/usr/bin/python3'
    }

    ps.PythonShell.run('feature2.py', options,
        function (err, results) { if (err) throw err; swal(results[0]); });
}