$(document).ready(function () {
    $('#dailyNotesForm').bootstrapValidator({
        feedbackIcons: {
          //  valid: 'glyphicon glyphicon-ok',
          // invalid: 'glyphicon glyphicon-remove',
          //  validating: 'glyphicon glyphicon-refresh'
        },
           container: 'tooltip',
        fields: {

          clientName: {
            validators: {
                notEmpty: {
                    message: 'The Client Name is required and cannot be empty'
                }
            }
        },

          providerName: {
            validators: {
                notEmpty: {
                    message: 'The Provider Name is required and cannot be empty'
                }
            }
        },

        placeofService: {
          validators: {
              notEmpty: {
                  message: 'The Place of Service is required and cannot be empty'
              }
          }
      },




            dateOfService: {
                validators: {
                    date: {
                        format: 'MM/DD/YYYY',
                      //  message: 'The value is not a valid date'
                    },

                    notEmpty: {
                        message: 'The Date of Service is required and cannot be empty'
                    }
                }
            }
        }
    });

});
