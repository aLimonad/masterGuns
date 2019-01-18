function setTcart__addProductProduct() {

    if (!oldtcart__addProduct) {

        var oldtcart__addProduct = tcart__addProduct;

        tcart__addProduct = function (n) {

            var currentPrefix = getPrefix(n.sku);
            var removePredicate = function (a) {
                return currentPrefix == getPrefix(a.sku);
            };

            if (currentPrefix != null &&
                window.tcart.products.filter(removePredicate).length) {
                window.tcart.products =
                    window.tcart.products.filter(
                        function (el) {
                            return !removePredicate(el);
                        });
                tcart__saveLocalObj();
            }

            var result = oldtcart__addProduct(n);

            location.href = nextStepUrl;
			
            return result;
        }

    }
}

var removePrefixes = ['R', 'C', 'MG','D'];

function getPrefix(sku) {
    if (!sku)
        return null;

    for (var i = 0; i < removePrefixes.length; i++) {
        if (sku.startsWith(removePrefixes[i]))
            return removePrefixes[i];
    }

    return null;
}

function getProductBySkuPrefix(prefix) {
    if (!prefix)
        return null;

    var findPredicate = function (a) {
        return prefix == getPrefix(a.sku);
    };

    return window.tcart.products.filter(findPredicate);
}

function getRifleName(rifle){

    if(rifle[0].name === 'Другое'){
        return '';
    }
    return rifle[0].name;
}


