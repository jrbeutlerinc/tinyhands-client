export default class IndiaBuilder {
    constructor(vif = null) {
        if(vif == null) {
            this.clearAll();
            this._otherText = '';
        } else {
            this.setValues(vif);
        }
    }

    clearAll() {
        this._delhi = false;
        this._mumbai = false;
        this._surat = false;
        this._rajastan = false;
        this._kolkata = false;
        this._pune = false;
        this._jaipur = false;
        this._bihar = false;
        this._didntKnow = false;
        this._other = false;
    }

    setValues(vif) {
        this._delhi = vif.victim_where_going_india_delhi;
        this._mumbai = vif.victim_where_going_india_mumbai;
        this._surat = vif.victim_where_going_india_surat;
        this._rajastan = vif.victim_where_going_india_rajastan;
        this._kolkata = vif.victim_where_going_india_kolkata;
        this._pune = vif.victim_where_going_india_pune;
        this._jaipur = vif.victim_where_going_india_jaipur;
        this._bihar = vif.victim_where_going_india_bihar;
        this._didntKnow = vif.victim_where_going_india_didnt_know;
        this._other = vif.victim_where_going_india_other;
        this._otherText = vif.victim_where_going_india_other_value;
    }

    build(vif) {
        vif.victim_where_going_india_delhi = this._delhi;
        vif.victim_where_going_india_mumbai = this._mumbai;
        vif.victim_where_going_india_surat = this._surat;
        vif.victim_where_going_india_rajastan = this._rajastan;
        vif.victim_where_going_india_kolkata = this._kolkata;
        vif.victim_where_going_india_pune = this._pune;
        vif.victim_where_going_india_jaipur = this._jaipur;
        vif.victim_where_going_india_bihar = this._bihar;
        vif.victim_where_going_india_didnt_know = this._didntKnow;
        vif.victim_where_going_india_other = this._other;
        vif.victim_where_going_india_other_value = this._otherText;
    }
    
    get delhi() {
        return this._delhi;
    }
    
    set delhi(value) {
        this.clearAll();
        this._delhi = value;
    }
    
    get mumbai() {
        return this._mumbai;
    }
    
    set mumbai(value) {
        this.clearAll();
        this._mumbai = value;
    }
    
    get surat() {
        return this._surat;
    }
    
    set surat(value) {
        this.clearAll();
        this._surat = value;
    }
    
    get rajastan() {
        return this._rajastan;
    }
    
    set rajastan(value) {
        this.clearAll();
        this._rajastan = value;
    }
    
    get kolkata() {
        return this._kolkata;
    }
    
    set kolkata(value) {
        this.clearAll();
        this._kolkata = value;
    }
    
    get pune() {
        return this._pune;
    }
    
    set pune(value) {
        this.clearAll();
        this._pune = value;
    }
    
    get jaipur() {
        return this._jaipur;
    }
    
    set jaipur(value) {
        this.clearAll();
        this._jaipur = value;
    }
    
    get bihar() {
        return this._bihar;
    }
    
    set bihar(value) {
        this.clearAll();
        this._bihar = value;
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