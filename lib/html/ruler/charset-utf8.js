module.exports =  {
    name: 'charset-utf8',
    desc: 'charset must be utf8!',
    lint: function (getCfg, document, reporter) {
        var head = document.querySelector('head');
        var charsetMeta = head.querySelector('meta[charset]');
        if (!charsetMeta) {
            reporter.warn(head.startIndex, '006', '<meta charset> recommended.');
        }
        var charset = [
            'utf-8',
            'utf8'
        ]
        if(charsetMeta.attribs.charset && charset.indexOf(charsetMeta.attribs.charset) === -1){
            reporter.warn(
                charsetMeta.startIndex,
                '055',
                ' <mata> charset must be utf8 !'
            );
        }

    }
}