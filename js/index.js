                
        	var emailTab = '\n <div class="form-group"> \n\t<label for="exampleFormControlInput1">Email address</label>\n\t<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">\n </div>\n';
        	var passWord = '\n <div class="form-group">\n\t<label for="exampleInputPassword1">Password</label>\n\t<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">\n </div>\n';
        	var submit ='\n<button type="submit" class="btn btn-primary">Submit</button>\n';
        	var fileUpload = '\n <div class="form-group">\n\t<label for="exampleFormControlFile1">Example file input</label>\n\t<input type="file" class="form-control-file" id="exampleFormControlFile1">\n </div>\n';
        	var checkbox = '\n <div class="form-check">\n\t<input class="form-check-input" type="checkbox" value="" id="defaultCheck1">\n\t<label class="form-check-label" for="defaultCheck1">Default checkbox</label></div>\n';
        	var inputTab ='\n <div class="form-group"> \n\t<label for="textInput">Input</label>\n\t<input class="form-control" type="text" placeholder="Default input" id="textInput">\n </div>\n'
        	$(".circle").click(function(){
        		$('.myModal').css('z-index','1').animate({
        			top:"0%"
        		},1000);
        	});
        	$(".emailTab").click(function(){
        		$('.outputForm form').append(emailTab);
        		$('.output').html($("<pre></pre>").text($('.outputForm').html().trim()));
        		$('.myModal').animate({
        			top:"-300%"
        		},1000).css('z-index','-2');
        	})
        	$(".passTab").click(function(){
        		$('.outputForm form').append(passWord);
        		$('.output').html($("<pre></pre>").text($('.outputForm').html().trim()));
        		$('.myModal').animate({
        			top:"-300%"
        		},1000).css('z-index','-2');
        	})
        	$(".submitTab").click(function(){
        		$('.outputForm form').append(submit);
        		$('.output').html($("<pre></pre>").text($('.outputForm').html().trim()));
        		$('.myModal').animate({
        			top:"-300%"
        		},1000).css('z-index','-2');
        	})
        	$(".fileTab").click(function(){
        		$('.outputForm form').append(fileUpload);
        		$('.output').html($("<pre></pre>").text($('.outputForm').html().trim()));
        		$('.myModal').animate({
        			top:"-300%"
        		},1000).css('z-index','-2');
        	})
        	$(".checkTab").click(function(){
        		$('.outputForm form').append(checkbox);
        		$('.output').html($("<pre></pre>").text($('.outputForm').html().trim()));
        		$('.myModal').animate({
        			top:"-300%"
        		},1000).css('z-index','-2');
        	})
        	$(".inputTab").click(function(){
        		$('.outputForm form').append(inputTab);
        		$('.output').html($("<pre></pre>").text($('.outputForm').html().trim()));
        		$('.myModal').animate({
        			top:"-300%"
        		},600).css('z-index','-2');
        	})
        	$(".cls").click(function(){
        		
        		$('.myModal').animate({
        			top:"-300%"
        		},500).css('z-index','-2');
        	})
                $(".cp").click(function(){
                       var temp = $('.outputForm').html().trim();
                        
                       temp.value.select();
                })
