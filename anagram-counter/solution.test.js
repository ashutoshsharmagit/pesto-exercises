describe('anagramCounter', () => {


    it('should return a sorted array of animal objects by their number of legs', () => {


        expect(anagramCounter(['arr,rar,rra'],'rar')).toEqual(3);
    });


});