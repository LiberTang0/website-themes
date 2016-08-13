odoo.define('facebook_instant_article.facebook_instant_article', function (require) {
    'use strict';

    var ajax = require('web.ajax');
    var core = require('web.core');

    $(document).ready(function () {
        var $fb_import_id = $("input[name='fb_import_id']");
        if (typeof $fb_import_id === 'undefined'){
            return;
        }
        if (typeof $fb_import_id.val() === 'undefined'){
            return;
        }
        if($fb_import_id.val() !== ""){
            console.log("import id");
            console.log($fb_import_id.val());
            //check import status
            ajax.jsonRpc('/fb_instant_article/check_import', 'call', {'fb_import_id': '1476960168997006'})
                .then(function(data){
                    console.log(data);
                    if(data == true){
                        $("span[id='fb_import_ok']").show();
                        $("span[id='fb_import_error']").hide();
                    }
                    else{
                        $("span[id='fb_import_ok']").hide();
                        // $("span[id='fb_import_error']").show();
                    }
                });
        }
        else{
            ajax.jsonRpc('/fb_instant_article/check_import', 'call', {fb_import_id: '1476960168997006'})
                .then(function(data){
                    console.log(data);
                });
        }
    });

});
