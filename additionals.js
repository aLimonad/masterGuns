
$(document).ready(
    function () {

	var rifle=getProductBySkuPrefix('R');
	var batt=getProductBySkuPrefix('MG');
	var color=getProductBySkuPrefix('C');
		
		var headerspan=$('div#rec79499256').find('span');
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

				headerspan.text('Шаг 4: выберите аксессуары к '+rifleName+' ' + batt[0].sku);
				
				var url=dinamicUrl(rifle[0].sku+'_' + batt[0].sku+'_' + color[0].sku);
				
				var defaultUrl='NoPhoto';
				
				var fotoDiv=$('#recorddiv79499544').find('.t-cover__carrier');
				
				
				
				var setImage=function()
				{
			//		setTimeout(100,
			//	function(){
					//$('#recorddiv79499544').css('background-image', 'url("'+ url + '")');
					fotoDiv.css('background-image', 'url("'+ url + '")');
					fotoDiv.attr('data-original',url);
					fotoDiv.attr('data-content-cover-bg',url);
			//	});
					
				};
				
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
						url = dinamicUrl(batt[0].sku+'_' + color[0].sku);
						loadImage(url, setImage,
							function()
							{
								url=dinamicUrl(rifle[0].sku+'_' + batt[0].sku);
								
								loadImage(url, setImage,
									function()
									{
										url=dinamicUrl(batt[0].sku);
										
										loadImage(url, setImage,
											function()
											{
												url=dinamicUrl(defaultUrl);
												setImage();
											});
									});	
							});

					});

			}
		}

    });