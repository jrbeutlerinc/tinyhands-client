export default class LegalActionBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
            this._firText = '';
            this._dofeText = '';
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._no = false;
        this._fir = false;
        this._dofe = false;
    }

    setValues(vif) {
        this._no = vif.legal_action_no;
        this._fir = vif.legal_action_fir;
        this._dofe = vif.legal_action_dofe;
    }

    build(vif) {
        vif.legal_action_no = this._no;
        vif.legal_action_fir = this._fir;
        vif.legal_action_dofe = this._dofe;
        vif.legal_action_fir_value = this._firText;
        vif.legal_action_dofe_value = this._dofeText;
    }

    get no() {
        return this._no;
    }

    set no(value) {
        this._no = value;
    }

    get fir() {
        return this._fir;
    }

    set fir(value) {
        this._fir = value;
    }

    get dofe() {
        return this._dofe;
    }

    set dofe(value) {
        this._dofe = value;
    }
}