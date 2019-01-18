
var nextStepUrl = 'http://mastergun.tilda.ws/selectcolor';

// var getPrefix = function(sku) {
//     if (!sku)
//         return null;

//     for (var i = 0; i < removePrefixes.length; i++) {
//         if (sku.startsWith(removePrefixes[i]))
//             return removePrefixes[i];
//     }

//     return null;
// };


//  var getProductBySkuPrefix = function(prefix) {
//     if (!prefix)
//         return null;

//      var findPredicate = function(a) {
//             return prefix == getPrefix(a.sku);
//         };

// 	return window.tcart.products.filter(findPredicate);
// };
$(document).ready(
    function () {

        var rifle = getProductBySkuPrefix('R');

        var headerSpan = $('div#rec79941261').find('span');

        if (rifle && rifle.length) {
            var rifleName = getRifleName(rifle)
            headerSpan.text('Шаг 2: выберите ложе' +
                (rifleName === '' ? '' : ' к ')
                + rifleName);
        }
        else {
            headerSpan.text('Выберите оружие на предыдущем шаге!');
        }

        setTcart__addProductProduct();

    });