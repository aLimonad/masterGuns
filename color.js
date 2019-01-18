var nextStepUrl = 'http://mastergun.tilda.ws/additionals';

$(document).ready(
    function () {

	var rifle=getProductBySkuPrefix('R');
	var batt=getProductBySkuPrefix('MG');
		
		var headerspan=$('div#rec79978224').find('span');
		if(!rifle || rifle.length <=0)
		{
			headerspan.text('Выберите оружие на предыдущем шаге!');
		}
		else
		{
			if(!batt || batt.length<=0)
			{
				headerspan.text('Выберите ложе на предыдущем шаге!');
			}
			else
			{
				var rifleName = getRifleName(rifle);

				headerspan.text('Шаг 3: выберите цвет к '+rifleName+' ' + batt[0].sku);
				
				var defaultUrl='NoPhoto.png';
				
				var fotoDiv=$('#rec79995119').find('.t-bgimg');
				
				var baseUrl='http://support.nitrix-it.ru/download/MasterGun/modelPhoto/';
				
				var setImage=function()
				{
					fotoDiv.css('background-image', 'url("'+ url + '")');
					fotoDiv.attr('data-original',url);
				};
				
				//var url=baseUrl+rifle[0].sku+'_' + batt[0].sku+'.png';
				var url = dinamicUrl(rifle[0].sku+'_' + batt[0].sku);
				
				var loadImage=function(url, success, error)
				{
						var img = document.createElement('img');
						img.onload = success;
						img.onerror = error;
						img.src = url;
				};
				
				loadImage(url, setImage,
					function()
					{
						//url=baseUrl+ batt[0].sku+'.png';
						url = dinamicUrl(batt[0].sku);
						
						loadImage(url, setImage,
							function()
							{
								url=baseUrl+defaultUrl;
								setImage();
							});
					});	
			}
		}
				 
				
        setTcart__addProductProduct();

    });