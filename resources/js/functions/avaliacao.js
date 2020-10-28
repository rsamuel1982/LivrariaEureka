/* VALIDAÇÃO FORMULARIO FRONT-END */

        function onSuccess(response) {
             
            if (response.success == true) {
                swal({                 
                    text: response.Message,
                    type: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#16ab39',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK'
                }).then(function () {
                    window.location.href = "/Home";
                });
            }
            else {

                swal({                    
                    text: response.Message,
                    type: 'warning',
                    showCancelButton: false,
                    confirmButtonColor: '#16ab39',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK'
                });
            }
        }

        function onFailure(response) {
             if (response.success == false) {               

                swal({
                    text: response.Message,
                    type: 'error',
                    showCancelButton: false,
                    confirmButtonColor: '#16ab39',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK'
                }).then(function () {
                    window.location.href = "/Home";
                });
            }
        }
  