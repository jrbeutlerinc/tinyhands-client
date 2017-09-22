import radioTemplate from './radio.html';


class RadioController {
    constructor() {
    }

    $onInit(){
    }
}

export default {
    templateUrl: radioTemplate,
    controller: RadioController,
    bindings: {
        question: '<',
    }
}