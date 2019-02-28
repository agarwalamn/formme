                
var emailTab = '\n <div class="form-group"> \n\t<label for="exampleFormControlInput1">Email address</label><i class="fas fa-trash-alt btn btn-danger del"></i>\n\t<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">\n </div>\n';
var passWord = '\n <div class="form-group">\n\t<label for="exampleInputPassword1">Password</label><i class="fas fa-trash-alt btn btn-danger del"></i>\n\t<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">\n </div>\n';
var submit ='\n<button type="submit" class="btn btn-primary">Submit</button><i class="fas fa-trash-alt btn btn-danger del"></i>\n';
var fileUpload = '\n <div class="form-group">\n\t<label for="exampleFormControlFile1">Example file input</label><i class="fas fa-trash-alt btn btn-danger del"></i>\n\t<input type="file" class="form-control-file" id="exampleFormControlFile1">\n </div>\n';
var checkbox = '\n <div class="form-check">\n\t<input class="form-check-input" type="checkbox" value="" id="defaultCheck1">\n\t<label class="form-check-label" for="defaultCheck1">Default checkbox</label><i class="fas fa-trash-alt btn btn-danger del"></i></div>\n';
var inputTab ='\n <div class="form-group"> \n\t<label for="textInput">Input</label><i class="fas fa-trash-alt btn btn-danger del"></i>\n\t<input class="form-control" type="text" placeholder="Default input" id="textInput">\n </div>\n'
$(".circle").click(function(){
	$('.myModal').animate({
		left:"5%"
	});
});
    $('.outputForm').on('click','.del',function(){
           $(this).parent().remove();
           $('.output').html($("<pre></pre>").text($('.outputForm').html().trim()));
    })
$(".emailTab").click(function(){
	$('.outputForm form').append(emailTab);
	$('.output').html($("<pre></pre>").text($('.outputForm').html().trim()));
	$('.myModal').animate({
		left:"-100%"
	},1000);
})
$(".passTab").click(function(){
	$('.outputForm form').append(passWord);
	$('.output').html($("<pre></pre>").text($('.outputForm').html().trim()));
	$('.myModal').animate({
		left:"-100%"
	},1000);
})
$(".submitTab").click(function(){
	$('.outputForm form').append(submit);
	$('.output').html($("<pre></pre>").text($('.outputForm').html().trim()));
	$('.myModal').animate({
		left:"-100%"
	},1000);
})
$(".fileTab").click(function(){
	$('.outputForm form').append(fileUpload);
	$('.output').html($("<pre></pre>").text($('.outputForm').html().trim()));
	$('.myModal').animate({
		left:"-100%"
	},1000);
})
$(".checkTab").click(function(){
	$('.outputForm form').append(checkbox);
	$('.output').html($("<pre></pre>").text($('.outputForm').html().trim()));
	$('.myModal').animate({
		left:"-100%"
	},1000);
})
$(".inputTab").click(function(){
	$('.outputForm form').append(inputTab);
	$('.output').html($("<pre></pre>").text($('.outputForm').html().trim()));
	$('.myModal').animate({
		left:"-100%"
	});
})
$(".cls").click(function(){
	
	$('.myModal').animate({
		left:"-100%"
	});
})
    $(".cpy").click(function(){
           var aux = document.createElement("input");
           aux.setAttribute("value", document.getElementById('out').innerHTML); 
           document.body.appendChild(aux);
            aux.select();
             document.execCommand("copy");
            document.body.removeChild(aux);
            alert("copied");

    })
