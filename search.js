

$('div#button.onOff').on('click',function(){
	
	if($('select').val() == "all" ){	
	$('div#button.onOff').addClass('active');
	$('div#buttonAdvanced').removeClass('buttonAdvancedActive');
	$('div#button.offbuttoNone').removeClass('active');

	
		$('div#toggle').css('display','block');
		$('input#searchPerson').css('display','none');

		$('form#single').css('display','none');

	} /* end of if */

	

});

$('div#button.offbuttoNone').on('click',function(){
	
	if($('select').val() != "all" ){  		
	
	$('form#single').css('display','block');
	
	$('div#button.offbuttoNone').addClass('active');
	$('div#buttonAdvanced').addClass('buttonAdvancedActive');
	$('div#button.onOff').removeClass('active');
	
	
		/*value = $('select').val();*/
		value = $('select').attr('value');
		/*confirm(value);*/
	/*	test = $('input#value');
		confirm(test);	*/
		$('label.value').text(value);	
		$('div#toggle').css('display','none');
		$('input#searchPerson').css('display','block');
	} /* end of if */
	
});


$('select#searchPerson option').on('click', function(){ 
	if($('select').val() != "all" ){  
	
	$('div#button.offbuttoNone').click();

	value = $(this).attr('value');

	$('form#single label.value').text(value);	
	
	/* modify name reference and id before passing value to post request ... */
	$('form#single input#searchPerson').attr('name',value);
	

	} /* end of if ...*/

	if($('select').val() == "all" ){ 


	/* functionality responsible for reseting input lements styles either after ...*/
		$('input').removeClass('empty');	
		$('label').removeClass('lableEmpty');


		multi ="multi";
	$('form').attr('name',multi);
	$('div#button.onOff').click();
	}
});






$('select#search option').on('click', function(){ 

	

	if($(this).val() == "salesforce" ){ 
		$('div#contentheader').first().css('background-color','rgb(60, 174, 246)');
	} 
	if($(this).val() == "eloqua" ){ 
		$('div#contentheader').first().css('background-color','rgb(87, 24, 86)');

	} else {
		$('div#contentheader').first().css('background-color','rgb(60, 174, 246)');
	}
	



	/*	toggle form input type functionality*/
	/* if all form input type multi if not all form type single */
	typeOfFormInput = $('select#searchPerson').val();

	if(typeOfFormInput != 'all') {
			confirm('signle');

				/* if form  empty */
			if(!$('input#searchPerson').val()){
					$('input#searchPerson').addClass('empty');
					$('label.value').addClass('lableEmpty');
			}

			
			/* if forn not empty */
			if($('input#searchPerson').val()){
				$('input#searchPerson').removeClass('empty');	
				$('label.value').removeClass('lableEmpty');
				$('form#single').submit();
			}
			
	}	 /* end of single forminput type conditional */



	if(typeOfFormInput == 'all') {
			confirm('multiFormInputType');
			$('label').removeClass('lableEmpty');	
			$('input').removeClass('empty');

			checkInputValues ="false";

			if(!$('input#first_name').val()){
				$('input#first_name').addClass('empty');
				$('label#first_name').addClass('lableEmpty');
				checkInputValues ="true";
			}

			if(!$('input#last_name').val()){
				$('input#last_name').addClass('empty');
				$('label#last_name').addClass('lableEmpty');
				checkInputValues ="true";
			}

			if(!$('input#contact').val()){
					$('input#contact').addClass('empty');
					$('label#contact').addClass('lableEmpty');
					checkInputValues ="true";
			}

			if(!$('input#email').val()){
					$('input#email').addClass('empty');
					$('label#email').addClass('lableEmpty');
					checkInputValues ="true";
			}

			if(checkInputValues =="false"){

				$('form#singleNot').submit();
			}
			

	} /* end of multi forminput type conditional */
	
	

});






/*	front end search*/




/* form submittion ... */

/*	contentContainer = $('div#contentContainer.default').clone(true);*/


	function noUser(){


		function simpleRotate(){
					$('input').addClass('empty');
					$('label').addClass('lableEmpty');
					$('input').addClass('leftRot');
					setTimeout("$('input').removeClass('leftRot').addClass('rightRot');", 150);
					setTimeout("$('input').removeClass('rightRot').addClass('leftRot');", 250);
					setTimeout("$('input').removeClass('leftRot');", 550);
					setTimeout("$('input').addClass('lights');", 550);
					setTimeout("$('input').removeClass('lights');", 950);
				}




	/*	confirm('user does not exist in a database...');*/
				$('div#NoUserBox').addClass('display');
				$('div#NoUserBox').animate({'margin-left':'65%'}, 430, function(){
						$('div#NoUserBox').animate({'margin-left':'-5%'}, 260, function(){
							$('div#NoUserBox').animate({'margin-left':'0%'}, 150, function(){
							$('div#NoUserBox').animate({'margin-left':'20%'}, 20, function(){
								simpleRotate();
				});
							
					
			});
							
					});
					
					
				});






				


	} /* end of noUser function */
	$('input').on('click', function(){
		$(this).removeClass('empty');
		nameRefLab = $(this).attr('name');
		$("label#"+nameRefLab).removeClass('lableEmpty');
		$("form#single label").removeClass('lableEmpty');
	});	



	$('div#closeButton').on('click', function(){
			$('div#NoUserBox').removeClass('display');
			$('div#NoUserBox').removeAttr('style');	
	});

		
            $(function() {
                $("#single, #singleNot").on("submit", function(e) { confirm('ajaxRequest');
                    e.preventDefault();
		
			variable = $('div#contentContainer').size();
			if(variable > 2) {
				$('div#wrapperOutput').addClass('scrollable');	
		
			}
            
                      $.ajax({
                        url: $(this).attr("action"),
                        type: 'POST',
                        data: $(this).serialize(),
                        beforeSend: function() {
                          /*  $("#message").html("sending...");*/
			/*	$("div#contentvalues").html("sending...");*/
				
                        },
                        success: function(data) { 
                        	/*$("div#contentvalues").html(data);	*/
                          /*  $("#message").hide(); */
            	          /* $("#response").html(data); */
		
            	          if(!$.trim(data)){ /*  */ 
            	          		noUser();
		 

							 } else {
				
				$('div#contentContainer.default').clone(true).removeClass('default').prependTo('div#wrapperOutput');
				$('div#wrapperOutput').children('div#contentContainer').first().children('div#contentvalues').html(data);

							 }
            

                        }

                    });
                });
            });
					



