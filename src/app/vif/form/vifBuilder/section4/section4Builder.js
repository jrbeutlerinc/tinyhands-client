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
        this.brokerMeetCompanionLocation = null;
        this._companionWithVictim = null;
    }

    setValues(vif) {
        this._firstTime = vif.victim_first_time;
        this._betweenVillageAndBorder = vif.victim_between_village_and_border;
        this.stayDays = vif.victim_stay_days;
        this.stayStartDate = vif.victim_stay_start_date;
        this.howManyOthers = vif.victim_how_many_others;
        this.ageOfYoungest = vif.victim_age_of_youngest;
        this._passportPermitWithBroker = vif.victim_passport_permit_with_broker;
        this.brokerMeetCompanionLocation = vif.victim_broker_meet_companion_location;
        this._companionWithVictim = vif.victim_companion_with_victim;
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
        vif.victim_first_time = this._firstTime;
        vif.victim_between_village_and_border = this._betweenVillageAndBorder;
        vif.victim_stay_days = this.stayDays;
        vif.victim_stay_start_date = this.stayStartDate;
        vif.victim_how_many_others = this.howManyOthers;
        vif.victim_age_of_youngest = this.ageOfYoungest;
        vif.victim_passport_permit_with_broker = this._passportPermitWithBroker;
        vif.victim_broker_meet_companion_location = this.brokerMeetCompanionLocation;
        vif.victim_companion_with_victim = this._companionWithVictim;
    }

    get firstTime() {
        return this._firstTime;
    }

    set firstTime(value) {
        if(value) {
            this._firstTime = true;
        }
    }

    get betweenVillageAndBorder() {
        return this._betweenVillageAndBorder;
    }

    set betweenVillageAndBorder(value) {
        if(value) {
            this._betweenVillageAndBorder = true;
        }
    }

    get passportPermitWithBroker() {
        return this._passportPermitWithBroker;
    }

    set passportPermitWithBroker(value) {
        if(value) {
            this._passportPermitWithBroker = true;
        }
    }

    get companionWithVictim() {
        return this._companionWithVictim;
    }

    set companionWithVictim(value) {
        if(value) {
            this._companionWithVictim = true;
        }
    }
}