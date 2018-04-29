module.exports =  {
    name: 'no-jquery',
    desc: 'unable to use jquery',
    lint: function (getCfg, document, reporter) {
        var scripts = document.querySelectorAll('script:not([type]), script[type="text/javascript"]');
        var reg = /jquery|Jquery+/g;
        scripts.forEach(element => {
            if( element.attribs.src && reg.test(element.attribs.src)) {
                reporter.warn(
                    element.startIndex,
                    '056',
                    ' <script> unable to use jquery !'
                );
            }   
        });
    }
}