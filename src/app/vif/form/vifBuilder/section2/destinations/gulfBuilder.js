export default class GulfBuilder {
    constructor(vif = null) {
        if(vif === null) {
            this.clearAll();
            this._otherText = '';
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._lebanon = false;
        this._dubai = false;
        this._saudiArabia = false;
        this._kuwait = false;
        this._malaysia = false;
        this._oman = false;
        this._qatar = false;
        this._didntKnow = false;
        this._other = false;
    }

    setValues(vif) {
        this._lebanon = vif.victim_where_going_gulf_lebanon;
        this._dubai = vif.victim_where_going_gulf_dubai;
        this._saudiArabia = vif.victim_where_going_gulf_saudi_arabia;
        this._kuwait = vif.victim_where_going_gulf_kuwait;
        this._malaysia = vif.victim_where_going_gulf_malaysia;
        this._oman = vif.victim_where_going_gulf_oman;
        this._qatar = vif.victim_where_going_gulf_qatar;
        this._didntKnow = vif.victim_where_going_gulf_didnt_know;
        this._other = vif.victim_where_going_gulf_other;
        this._otherText = vif.victim_where_going_gulf_other_value;
    }

    build(vif) {
        vif.victim_where_going_gulf_lebanon = this._lebanon;
        vif.victim_where_going_gulf_dubai = this._dubai;
        vif.victim_where_going_gulf_saudi_arabia = this._saudiArabia;
        vif.victim_where_going_gulf_kuwait = this._kuwait;
        vif.victim_where_going_gulf_malaysia = this._malaysia;
        vif.victim_where_going_gulf_oman = this._oman;
        vif.victim_where_going_gulf_qatar = this._qatar;
        vif.victim_where_going_gulf_didnt_know = this._didntKnow;
        vif.victim_where_going_gulf_other = this._other;
        vif.victim_where_going_gulf_other_value = this._otherText;
    }
    
    get lebanon() {
        return this._lebanon;
    }
    
    set lebanon(value) {
        this.clearAll();
        this._lebanon = value;
    }
    
    get dubai() {
        return this._dubai;
    }
    
    set dubai(value) {
        this.clearAll();
        this._dubai = value;
    }
    
    get saudiArabia() {
        return this._saudiArabia;
    }
    
    set saudiArabia(value) {
        this.clearAll();
        this._saudiArabia = value;
    }
    
    get kuwait() {
        return this._kuwait;
    }
    
    set kuwait(value) {
        this.clearAll();
        this._kuwait = value;
    }
    
    get malaysia() {
        return this._malaysia;
    }
    
    set malaysia(value) {
        this.clearAll();
        this._malaysia = value;
    }
    
    get oman() {
        return this._oman;
    }
    
    set oman(value) {
        this.clearAll();
        this._oman = value;
    }
    
    get qatar() {
        return this._qatar;
    }
    
    set qatar(value) {
        this.clearAll();
        this._qatar = value;
    }
    
    get didntKnow() {
        return this._didntKnow;
    }
    
    set didntKnow(value) {
        this.clearAll();
        this._didntKnow = value;
    }
    
    get other() {
        return this._other;
    }
    
    set other(value) {
        this.clearAll();
        this._other = value;
    }
    
    get otherText() {
        return this._otherText;
    }
    
    set otherText(value) {
        this._otherText = value;
    }

}