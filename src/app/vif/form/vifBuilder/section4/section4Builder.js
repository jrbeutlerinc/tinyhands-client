import EventsBuilder from './eventsBuilder';
import FreeToGoOutBuilder from './freeToGoOutBuilder';
import HidePresenceBuilder from './hidePresenceBuilder';
import MeetAgainInIndiaBuilder from './meetAgainInIndiaBuilder';
import MoneyChangeHandsBuilder from './moneyChangeHandsBuilder';
import PassportBuilder from './passportBuilder';
import TravelBuilder from './travelBuilder';
import TravelWithCompanionBuilder from './travelWithCompanionBuilder';

export default class Section4Builder {
    constructor(vif = null, eventsBuilder = null, freeToGoOutBuilder = null, hidePresenceBuilder = null,
        meetAgainInIndiaBuilder = null, moneyChangeHandsBuilder = null, passportBuilder = null,
        travelBuilder = null, travelWithCompanionBuilder = null) {

        this.events = eventsBuilder || new EventsBuilder(vif);
        this.freeToGoOut = freeToGoOutBuilder || new FreeToGoOutBuilder(vif);
        this.hidePresence = hidePresenceBuilder || new HidePresenceBuilder(vif);
        this.meetAgainInIndia = meetAgainInIndiaBuilder || new MeetAgainInIndiaBuilder(vif);
        this.moneyChangeHands = moneyChangeHandsBuilder || new MoneyChangeHandsBuilder(vif);
        this.passport = passportBuilder || new PassportBuilder(vif);
        this.travel = travelBuilder || new TravelBuilder(vif);
        this.travelWithCompanion = travelWithCompanionBuilder || new TravelWithCompanionBuilder(vif);

        if(vif === null) {
            this.setDefaultValues();
        } else {
            this.setValues(vif);
        }
    }

    setDefaultValues() {
        this._firstTime = null;
        this._betweenVillageAndBorder = null;
        this.stayDays = null;
        this.stayStartDate = null;
        this.howManyOthers = null;
        this.ageOfYoungest = null;
        this._passportPermitWithBroker = null;
        this._companionWithVictim = null;
    }

    setValues(vif) {
        this._firstTime = vif.victim_first_time_crossing_border;
        this._betweenVillageAndBorder = vif.victim_stayed_somewhere_between;
        this.stayDays = vif.victim_how_long_stayed_between_days;
        this.stayStartDate = vif.victim_how_long_stayed_between_start_date;
        this.howManyOthers = vif.how_many_others_in_situation;
        this.ageOfYoungest = vif.others_in_situation_age_of_youngest;
        this._passportPermitWithBroker = vif.victim_passport_with_broker;
        this._companionWithVictim = vif.companion_with_when_intercepted;
    }

    build(vif) {
        this.events.build(vif);
        this.freeToGoOut.build(vif);
        this.hidePresence.build(vif);
        this.meetAgainInIndia.build(vif);
        this.moneyChangeHands.build(vif);
        this.passport.build(vif);
        this.travel.build(vif);
        this.travelWithCompanion.build(vif);
    }

    buildFields(vif) {
        vif.victim_first_time_crossing_border = this._firstTime;
        vif.victim_stayed_somewhere_between = this._betweenVillageAndBorder;
        vif.victim_how_long_stayed_between_days = this.stayDays;
        vif.victim_how_long_stayed_between_start_date = this.stayStartDate;
        vif.how_many_others_in_situation = this.howManyOthers;
        vif.others_in_situation_age_of_youngest = this.ageOfYoungest;
        vif.victim_passport_with_broker = this._passportPermitWithBroker;
        vif.companion_with_when_intercepted = this._companionWithVictim;
    }

    get firstTime() {
        return this._firstTime;
    }

    set firstTime(value) {
        if(value) {
            this._firstTime = value;
        }
    }

    get betweenVillageAndBorder() {
        return this._betweenVillageAndBorder;
    }

    set betweenVillageAndBorder(value) {
        if(value) {
            this._betweenVillageAndBorder = value;
        }
    }

    get passportPermitWithBroker() {
        return this._passportPermitWithBroker;
    }

    set passportPermitWithBroker(value) {
        if(value) {
            this._passportPermitWithBroker = value;
        }
    }

    get companionWithVictim() {
        return this._companionWithVictim;
    }

    set companionWithVictim(value) {
        if(value) {
            this._companionWithVictim = value;
        }
    }
}