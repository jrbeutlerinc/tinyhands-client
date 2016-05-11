import OccupationBuilder from './occupationBuilder';

describe('OccupationBuilder', () => {
    let builder, vif;
    
    describe('when no vif in constructor', () => {
        
        beforeEach(() => {
            builder = new OccupationBuilder(); 
        });
        
        it('should set all options to false', () => {
            expect(builder.unemployed).toEqual(false);
            expect(builder.animalHusbandry).toEqual(false);
            expect(builder.farmer).toEqual(false);
            expect(builder.domesticWork).toEqual(false);
            expect(builder.wageLaborer).toEqual(false);
            expect(builder.shopkeeper).toEqual(false);
            expect(builder.businessOwner).toEqual(false);
            expect(builder.hotel).toEqual(false);
            expect(builder.migrantWorker).toEqual(false);
            expect(builder.factory).toEqual(false);
            expect(builder.tailoring).toEqual(false);
            expect(builder.housewife).toEqual(false);
            expect(builder.other).toEqual(false);
        });
        
        it('should set otherText to empty string', () => {
            expect(builder.otherText).toEqual('');
        });
    });
    
    describe('when vif in constructor', () => {
        
        beforeEach(() => {
           vif = {
               victim_occupation_unemployed: true,
               victim_occupation_animal_husbandry: true,
               victim_occupation_farmer: true,
               victim_occupation_domestic_work: true,
               victim_occupation_wage_laborer: true,
               victim_occupation_shopkeeper: true,
               victim_occupation_bussiness_owner: true,
               victim_occupation_hotel: true,
               victim_occupation_migrant_worker: true,
               victim_occupation_factory: true,
               victim_occupation_tailoring: true,
               victim_occupation_housewife: true,               
               victim_occupation_other: true,
               victim_occupation_other_value: "foo",               
           };
           
           builder = new OccupationBuilder(vif);
        });
        
        it('should set options to match vif', () => {
            expect(builder.unemployed).toEqual(vif.victim_occupation_wage_laborer);
            expect(builder.animalHusbandry).toEqual(vif.victim_occupation_animal_husbandry);
            expect(builder.farmer).toEqual(vif.victim_occupation_farmer);
            expect(builder.domesticWork).toEqual(vif.victim_occupation_domestic_work);
            expect(builder.wageLaborer).toEqual(vif.victim_occupation_wage_laborer);
            expect(builder.shopkeeper).toEqual(vif.victim_occupation_shopkeeper);
            expect(builder.businessOwner).toEqual(vif.victim_occupation_bussiness_owner);
            expect(builder.hotel).toEqual(vif.victim_occupation_hotel);
            expect(builder.migrantWorker).toEqual(vif.victim_occupation_migrant_worker);
            expect(builder.factory).toEqual(vif.victim_occupation_factory);
            expect(builder.tailoring).toEqual(vif.victim_occupation_tailoring);
            expect(builder.housewife).toEqual(vif.victim_occupation_housewife);
            expect(builder.other).toEqual(vif.victim_occupation_other);
        });
        
        it('should set otherText to match vif', () => {
            expect(builder.otherText).toEqual(vif.victim_occupation_other_value);
        });
    });
    
    describe('when building vif', () => {
        it('builtVif should match builder values', () => {
            vif = {
                victim_occupation_unemployed: true,
                victim_occupation_animal_husbandry: true,
                victim_occupation_farmer: true,
                victim_occupation_domestic_work: true,
                victim_occupation_wage_laborer: true,
                victim_occupation_shopkeeper: true,
                victim_occupation_bussiness_owner: true,
                victim_occupation_hotel: true,
                victim_occupation_migrant_worker: true,
                victim_occupation_factory: true,
                victim_occupation_tailoring: true,
                victim_occupation_housewife: true,               
                victim_occupation_other: true,
                victim_occupation_other_value: "foo",               
            };
           
            builder = new OccupationBuilder(vif);
            let builtVif = builder.build();

            expect(builtVif.victim_occupation_wage_laborer).toEqual(builder.unemployed);
            expect(builtVif.victim_occupation_animal_husbandry).toEqual(builder.animalHusbandry);
            expect(builtVif.victim_occupation_farmer).toEqual(builder.farmer);
            expect(builtVif.victim_occupation_domestic_work).toEqual(builder.domesticWork);
            expect(builtVif.victim_occupation_wage_laborer).toEqual(builder.wageLaborer);
            expect(builtVif.victim_occupation_shopkeeper).toEqual(builder.shopkeeper);
            expect(builtVif.victim_occupation_bussiness_owner).toEqual(builder.businessOwner);
            expect(builtVif.victim_occupation_hotel).toEqual(builder.hotel);
            expect(builtVif.victim_occupation_migrant_worker).toEqual(builder.migrantWorker);
            expect(builtVif.victim_occupation_factory).toEqual(builder.factory);
            expect(builtVif.victim_occupation_tailoring).toEqual(builder.tailoring);
            expect(builtVif.victim_occupation_housewife).toEqual(builder.housewife);
            expect(builtVif.victim_occupation_other).toEqual(builder.other);
        });
    });
    
    describe('when', () => {
        
        beforeEach(() => {
            vif = {
                victim_occupation_unemployed: true,
                victim_occupation_animal_husbandry: true,
                victim_occupation_farmer: true,
                victim_occupation_domestic_work: true,
                victim_occupation_wage_laborer: true,
                victim_occupation_shopkeeper: true,
                victim_occupation_bussiness_owner: true,
                victim_occupation_hotel: true,
                victim_occupation_migrant_worker: true,
                victim_occupation_factory: true,
                victim_occupation_tailoring: true,
                victim_occupation_housewife: true,               
                victim_occupation_other: true,
                victim_occupation_other_value: "foo",               
            };
           
            builder = new OccupationBuilder(vif);
        });
        
        describe('unemployed is set', () => {
            it('should set all other occupation options to false', () => {
                builder.unemployed = true;
                
                expect(builder.unemployed).toEqual(true);
                expect(builder.animalHusbandry).toEqual(false);
                expect(builder.farmer).toEqual(false);
                expect(builder.domesticWork).toEqual(false);
                expect(builder.wageLaborer).toEqual(false);
                expect(builder.shopkeeper).toEqual(false);
                expect(builder.businessOwner).toEqual(false);
                expect(builder.hotel).toEqual(false);
                expect(builder.migrantWorker).toEqual(false);
                expect(builder.factory).toEqual(false);
                expect(builder.tailoring).toEqual(false);
                expect(builder.housewife).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('animalHusbandry is set', () => {
            it('should set all other occupation options to false', () => {
                builder.animalHusbandry = true;
                
                expect(builder.unemployed).toEqual(false);
                expect(builder.animalHusbandry).toEqual(true);
                expect(builder.farmer).toEqual(false);
                expect(builder.domesticWork).toEqual(false);
                expect(builder.wageLaborer).toEqual(false);
                expect(builder.shopkeeper).toEqual(false);
                expect(builder.businessOwner).toEqual(false);
                expect(builder.hotel).toEqual(false);
                expect(builder.migrantWorker).toEqual(false);
                expect(builder.factory).toEqual(false);
                expect(builder.tailoring).toEqual(false);
                expect(builder.housewife).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('farmer is set', () => {
            it('should set all other occupation options to false', () => {
                builder.farmer = true;
                
                expect(builder.unemployed).toEqual(false);
                expect(builder.animalHusbandry).toEqual(false);
                expect(builder.farmer).toEqual(true);
                expect(builder.domesticWork).toEqual(false);
                expect(builder.wageLaborer).toEqual(false);
                expect(builder.shopkeeper).toEqual(false);
                expect(builder.businessOwner).toEqual(false);
                expect(builder.hotel).toEqual(false);
                expect(builder.migrantWorker).toEqual(false);
                expect(builder.factory).toEqual(false);
                expect(builder.tailoring).toEqual(false);
                expect(builder.housewife).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('domesticWork is set', () => {
            it('should set all other occupation options to false', () => {
                builder.domesticWork = true;
                
                expect(builder.unemployed).toEqual(false);
                expect(builder.animalHusbandry).toEqual(false);
                expect(builder.farmer).toEqual(false);
                expect(builder.domesticWork).toEqual(true);
                expect(builder.wageLaborer).toEqual(false);
                expect(builder.shopkeeper).toEqual(false);
                expect(builder.businessOwner).toEqual(false);
                expect(builder.hotel).toEqual(false);
                expect(builder.migrantWorker).toEqual(false);
                expect(builder.factory).toEqual(false);
                expect(builder.tailoring).toEqual(false);
                expect(builder.housewife).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('wageLaborer is set', () => {
            it('should set all other occupation options to false', () => {
                builder.wageLaborer = true;
                
                expect(builder.unemployed).toEqual(false);
                expect(builder.animalHusbandry).toEqual(false);
                expect(builder.farmer).toEqual(false);
                expect(builder.domesticWork).toEqual(false);
                expect(builder.wageLaborer).toEqual(true);
                expect(builder.shopkeeper).toEqual(false);
                expect(builder.businessOwner).toEqual(false);
                expect(builder.hotel).toEqual(false);
                expect(builder.migrantWorker).toEqual(false);
                expect(builder.factory).toEqual(false);
                expect(builder.tailoring).toEqual(false);
                expect(builder.housewife).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('shopkeeper is set', () => {
            it('should set all other occupation options to false', () => {
                builder.shopkeeper = true;
                
                expect(builder.unemployed).toEqual(false);
                expect(builder.animalHusbandry).toEqual(false);
                expect(builder.farmer).toEqual(false);
                expect(builder.domesticWork).toEqual(false);
                expect(builder.wageLaborer).toEqual(false);
                expect(builder.shopkeeper).toEqual(true);
                expect(builder.businessOwner).toEqual(false);
                expect(builder.hotel).toEqual(false);
                expect(builder.migrantWorker).toEqual(false);
                expect(builder.factory).toEqual(false);
                expect(builder.tailoring).toEqual(false);
                expect(builder.housewife).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('businessOwner is set', () => {
            it('should set all other occupation options to false', () => {
                builder.businessOwner = true;
                
                expect(builder.unemployed).toEqual(false);
                expect(builder.animalHusbandry).toEqual(false);
                expect(builder.farmer).toEqual(false);
                expect(builder.domesticWork).toEqual(false);
                expect(builder.wageLaborer).toEqual(false);
                expect(builder.shopkeeper).toEqual(false);
                expect(builder.businessOwner).toEqual(true);
                expect(builder.hotel).toEqual(false);
                expect(builder.migrantWorker).toEqual(false);
                expect(builder.factory).toEqual(false);
                expect(builder.tailoring).toEqual(false);
                expect(builder.housewife).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('hotel is set', () => {
            it('should set all other occupation options to false', () => {
                builder.hotel = true;
                
                expect(builder.unemployed).toEqual(false);
                expect(builder.animalHusbandry).toEqual(false);
                expect(builder.farmer).toEqual(false);
                expect(builder.domesticWork).toEqual(false);
                expect(builder.wageLaborer).toEqual(false);
                expect(builder.shopkeeper).toEqual(false);
                expect(builder.businessOwner).toEqual(false);
                expect(builder.hotel).toEqual(true);
                expect(builder.migrantWorker).toEqual(false);
                expect(builder.factory).toEqual(false);
                expect(builder.tailoring).toEqual(false);
                expect(builder.housewife).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('migrantWorker is set', () => {
            it('should set all other occupation options to false', () => {
                builder.migrantWorker = true;
                
                expect(builder.unemployed).toEqual(false);
                expect(builder.animalHusbandry).toEqual(false);
                expect(builder.farmer).toEqual(false);
                expect(builder.domesticWork).toEqual(false);
                expect(builder.wageLaborer).toEqual(false);
                expect(builder.shopkeeper).toEqual(false);
                expect(builder.businessOwner).toEqual(false);
                expect(builder.hotel).toEqual(false);
                expect(builder.migrantWorker).toEqual(true);
                expect(builder.factory).toEqual(false);
                expect(builder.tailoring).toEqual(false);
                expect(builder.housewife).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('factory is set', () => {
            it('should set all other occupation options to false', () => {
                builder.factory = true;
                
                expect(builder.unemployed).toEqual(false);
                expect(builder.animalHusbandry).toEqual(false);
                expect(builder.farmer).toEqual(false);
                expect(builder.domesticWork).toEqual(false);
                expect(builder.wageLaborer).toEqual(false);
                expect(builder.shopkeeper).toEqual(false);
                expect(builder.businessOwner).toEqual(false);
                expect(builder.hotel).toEqual(false);
                expect(builder.migrantWorker).toEqual(false);
                expect(builder.factory).toEqual(true);
                expect(builder.tailoring).toEqual(false);
                expect(builder.housewife).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('tailoring is set', () => {
            it('should set all other occupation options to false', () => {
                builder.tailoring = true;
                
                expect(builder.unemployed).toEqual(false);
                expect(builder.animalHusbandry).toEqual(false);
                expect(builder.farmer).toEqual(false);
                expect(builder.domesticWork).toEqual(false);
                expect(builder.wageLaborer).toEqual(false);
                expect(builder.shopkeeper).toEqual(false);
                expect(builder.businessOwner).toEqual(false);
                expect(builder.hotel).toEqual(false);
                expect(builder.migrantWorker).toEqual(false);
                expect(builder.factory).toEqual(false);
                expect(builder.tailoring).toEqual(true);
                expect(builder.housewife).toEqual(false);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('housewife is set', () => {
            it('should set all other occupation options to false', () => {
                builder.housewife = true;
                
                expect(builder.unemployed).toEqual(false);
                expect(builder.animalHusbandry).toEqual(false);
                expect(builder.farmer).toEqual(false);
                expect(builder.domesticWork).toEqual(false);
                expect(builder.wageLaborer).toEqual(false);
                expect(builder.shopkeeper).toEqual(false);
                expect(builder.businessOwner).toEqual(false);
                expect(builder.hotel).toEqual(false);
                expect(builder.migrantWorker).toEqual(false);
                expect(builder.factory).toEqual(false);
                expect(builder.tailoring).toEqual(false);
                expect(builder.housewife).toEqual(true);
                expect(builder.other).toEqual(false);
            });
        });
        
        describe('other is set', () => {
            it('should set all other occupation options to false', () => {
                builder.other = true;
                
                expect(builder.unemployed).toEqual(false);
                expect(builder.animalHusbandry).toEqual(false);
                expect(builder.farmer).toEqual(false);
                expect(builder.domesticWork).toEqual(false);
                expect(builder.wageLaborer).toEqual(false);
                expect(builder.shopkeeper).toEqual(false);
                expect(builder.businessOwner).toEqual(false);
                expect(builder.hotel).toEqual(false);
                expect(builder.migrantWorker).toEqual(false);
                expect(builder.factory).toEqual(false);
                expect(builder.tailoring).toEqual(false);
                expect(builder.housewife).toEqual(false);
                expect(builder.other).toEqual(true);
            });
        });
        
        describe('otherText changes text', () => {
            it('should change text', () => {
                let text = "Bar";
                builder.otherText = text;
                
                expect(builder.otherText).toEqual(text);
            });
        });
    });
});