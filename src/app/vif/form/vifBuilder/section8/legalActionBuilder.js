export default class LegalActionBuilder {
    constructor(vif = null) {
        if(vif === null) {
            console.log("Clear all");
            this.clearAll();
            this._firText = '';
            this._dofeText = '';
        } else {
            console.log("Set values");
            this.setValues(vif);
        }
    }

    clearAll() {
        this._no = false;
        this._fir = false;
        this._dofe = false;
    }

    setValues(vif) {
        this._no = vif.legal_action_against_traffickers_no;
        this._fir = vif.legal_action_against_traffickers_fir_filed;
        this._dofe = vif.legal_action_against_traffickers_dofe_complaint;
    }

    build(vif) {
        vif.legal_action_against_traffickers_no = this._no;
        vif.legal_action_against_traffickers_fir_filed = this._fir;
        vif.legal_action_against_traffickers_dofe_complaint = this._dofe;
        vif.legal_action_fir_against_value = this._firText;
        vif.legal_action_dofe_against_value = this._dofeText;
    }

    get no() {
        return this._no;
    }

    set no(value) {
        this.clearAll();
        this._no = value;
    }

    get fir() {
        return this._fir;
    }

    set fir(value) {
        this.clearAll();
        this._fir = value;
    }

    get dofe() {
        return this._dofe;
    }

    set dofe(value) {
        this.clearAll();
        this._dofe = value;
    }

    get firText() {
        return this._firText;
    }

    set firText(value) {
        this.clearAll();
        this._fir = value;
    }

    get dofeText() {
        return this._dofeText;
    }

    set dofeText(value) {
        this.clearAll();
        this._dofeText = value;
    }
}