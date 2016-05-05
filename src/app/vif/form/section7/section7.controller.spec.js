import section7Controller from './section7.controller';
import Section7Builder from '.././vifBuilder/section7/section7Builder';

describe('section7Controller', () => {
    let section7,
        vifBuilder;

    beforeEach(() => {
        vifBuilder = new Section7Builder;
        section7 = new section7Controller(vifBuilder);
    });

    /*describe('function calculateAlarms', () => {
        console.log(section7);
        it('calculated alarms should be 7', () => {
            calculateAlarms(0, 3);
            calculateAlarms(1, 4);
            expect(section7.calculatedAlarms).toEqual(7);
        });
    });*/
});