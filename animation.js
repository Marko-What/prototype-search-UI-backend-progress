
	$('select#search option').on('click', function(){ 
		if($('div#NoUserBox.display'){ confirm('exist ...');}

		} /* end of if */
		if($('select#searchPerson').val() == 'all'){
			$('div#sideline.left').animate({"height":"500px"}, 150, function(){
				$('div#line.bottom').animate({"width":"480px"}, 80, function(){
					$('div#sideline.right').animate({"height":"500px"}, 150, function(){
						$('div#line.top').animate({"width":"480px"}, 110, function(){
								$('div#sideline').removeAttr('style');
								$('div#line').removeAttr('style');
						});
					});
				});
			});
		} /* end of if val == all */
	});
