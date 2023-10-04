        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\[").replace(/[\]]/, "\]");
            var regex = new RegExp("[\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

        var file = getParameterByName('file');
        var keyid = getParameterByName('keyid');
        var key = getParameterByName('key');
        var getIMG = getParameterByName('img');
        var getRASIO = getParameterByName('rasio');
      var gons = getParameterByName('ns');
