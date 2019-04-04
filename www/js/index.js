/*
 * Author: Tien Dung
 * Email: dungltgt60872@fpt.edu.vn
 */

$(function () {    

    /** App initialize */
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
       
    }

    $('#btn-show-dialog').on('click', function () {
        showConfirmDialog();
    });

    function showConfirmDialog() {
        navigator.notification.confirm(
            'Press "Ring a bell" button to play bell sound, and "Vibrate" button to vibrate',
            onConfirm,
            'Select a function', 
            ['Vibrate','Ring a bell']
        );
    }

    function onConfirm(button) {
        if (button == 1) {
            vibrate();
        } else {
            beep();
        }
    }

    function beep() {
        // Play beep sound 2 times
        navigator.notification.beep(2);
    }
    function vibrate() {
        // Vibrate 3s
        navigator.notification.vibrate(2000);
    }

});



