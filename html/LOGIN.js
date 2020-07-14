$("#signup-form").validate(
    {
    rules: {
         fname:
         {
            required:true,
            minlength: 4,
            maxlength: 10   
         },
        sname:{required:true,minlength:3,maxlength: 10},
        emailAddress:{required:true,email:true},
        password:{required:true,minlength:8},
        days:{required:true},
        month:{required:true},
        years:{required:true},
        gender:{required:true},
        },messages:{
            fname:{
                required:"enter first name"
            }

        }
        

    
});