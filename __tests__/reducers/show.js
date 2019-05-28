import show from '../../src/reducers/show';

describe('Shows reducer', () => {
  describe('SAVE_SHOW', () => {
    it('should return a show', () => {
      expect(
        show(
          {},
          {
            type: 'SAVE_SHOW',
            payload: {
              id: 6771,
              name: 'The Powerpuff Girls',
            },
          },
        ),
      ).toEqual({
        id: 6771,
        name: 'The Powerpuff Girls',
      });
    });
  });
});
