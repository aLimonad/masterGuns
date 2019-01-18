$(function() {
            $('#modelContainer a').click(function() {

                var el = $(this);
                var sku = el.text();

                tcart__addProduct({
                    sku: 'MG',
                    name: sku,
                    price: 0
                });

                location.href='http://mastergun.tilda.ws/selectmodel';

            });
});