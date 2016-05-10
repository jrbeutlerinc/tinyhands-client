import Section2Builder from './section2Builder';

describe('Section2Builder', () => {

    let builder;

    describe('build', () => {

        let builder,
            vif,
            migrationPlansBuilder,
            motiveBuilder,
            destinationBuilder;

        beforeAll(() => {
            vif = {};
            migrationPlansBuilder = new jasmine.createSpyObj('migrationPlansBuilder', ['build']);
            motiveBuilder = new jasmine.createSpyObj('motiveBuilder', ['build']);
            destinationBuilder = new jasmine.createSpyObj('destinationBuilder', ['build']);

            builder = new Section2Builder(vif, migrationPlansBuilder, motiveBuilder, destinationBuilder);
        });

        it('should call build on migrationPlansBuilder', () => {
            builder.build();

            expect(migrationPlansBuilder.build).toHaveBeenCalled();
        });

        it('should call build on motiveBuilder', () => {
            builder.build();

            expect(motiveBuilder.build).toHaveBeenCalled();
        });

        it('should call build on destinationBuilder', () => {
            builder.build();

            expect(destinationBuilder.build).toHaveBeenCalled();
        });
    });
});